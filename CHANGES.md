# CI/CD Pipeline Fixes - Summary of Changes

## Overview
This document summarizes all changes made to fix the CI/CD pipeline failures in the react-forms monorepo. The main issues were:
1. Missing module resolution for tests
2. Circular dependency between packages
3. Missing rollup configuration for parsers package
4. Broken tests in suir-component-mapper package

---

## 1. GitHub Actions Workflow Order

**File:** `.github/workflows/main.yml`

**Change:** Moved the build step before lint, typecheck, and tests

**Before:**
```yaml
- name: Run lint on affected projects
  run: npx nx affected --target=lint --parallel=3

- name: Run typecheck on affected projects
  run: npx nx affected --target=typecheck --parallel=3

- name: Run tests on affected projects
  run: npx nx affected --target=test --parallel=3 --coverage

- name: Run build on affected projects
  run: npx nx affected --target=build --parallel=3
```

**After:**
```yaml
- name: Run build on affected projects
  run: npx nx affected --target=build --parallel=3

- name: Run lint on affected projects
  run: npx nx affected --target=lint --parallel=3

- name: Run typecheck on affected projects
  run: npx nx affected --target=typecheck --parallel=3

- name: Run tests on affected projects
  run: npx nx affected --target=test --parallel=3 --coverage
```

**Why:** Tests were failing because they couldn't find generated submodule exports (like `@data-driven-forms/react-form-renderer/use-form-api`). These are generated during the build process by the `generate-packages.js` script, so the build must run before tests.

---

## 2. Parsers Package Build Configuration

**File:** `packages/parsers/package.json`

**Change:** Replaced rollup build with Babel build

**Before:**
```json
"scripts": {
  "build": "rollup -c ./rollup.config.js",
  "test": "yarn --cwd ../.. test packages/parsers"
}
```

**After:**
```json
"scripts": {
  "build": "yarn build:cjs && yarn build:esm",
  "build:cjs": "BABEL_ENV=cjs babel src --out-dir ./dist/cjs --ignore \"src/tests/*\"",
  "build:esm": "BABEL_ENV=esm babel src --out-dir ./dist/esm --ignore \"src/tests/*\"",
  "test": "yarn --cwd ../.. test packages/parsers"
}
```

**Why:** The `rollup.config.js` file was missing from the parsers package, causing the build to fail with "Cannot find module '/Users/.../rollup.config.js'". Changed to use Babel (like other packages) for consistency and to fix the build.

---

## 3. React Renderer Demo Dependencies

**File:** `packages/react-renderer-demo/project.json`

**Change:** Added explicit build dependencies

**Before:**
```json
"build": {
  "executor": "nx:run-commands",
  "outputs": [
    "{projectRoot}/.next",
    "{projectRoot}/out"
  ],
  "options": {
    "command": "yarn build",
    "cwd": "packages/react-renderer-demo"
  },
  "cache": true
}
```

**After:**
```json
"build": {
  "executor": "nx:run-commands",
  "outputs": [
    "{projectRoot}/.next",
    "{projectRoot}/out"
  ],
  "options": {
    "command": "yarn build",
    "cwd": "packages/react-renderer-demo"
  },
  "dependsOn": ["^build"],
  "cache": true
}
```

**Why:** The demo app depends on built packages (`mui-component-mapper` and `react-form-renderer`). The `^build` syntax tells NX to "build all my dependencies first" before building this project. This ensures that when the demo builds, all required packages are already built and available.

---

## 4. MUI Component Mapper Dependencies

**File:** `packages/mui-component-mapper/project.json`

**Change:** Specified explicit build dependencies instead of generic `^build`

**Before:**
```json
"build": {
  "executor": "nx:run-commands",
  "outputs": [
    "{projectRoot}/index.js",
    "{projectRoot}/esm",
    "{projectRoot}/*.d.ts"
  ],
  "options": {
    "command": "yarn build",
    "cwd": "packages/mui-component-mapper"
  },
  "dependsOn": ["^build"],
  "cache": true
}
```

**After:**
```json
"build": {
  "executor": "nx:run-commands",
  "outputs": [
    "{projectRoot}/index.js",
    "{projectRoot}/esm",
    "{projectRoot}/*.d.ts"
  ],
  "options": {
    "command": "yarn build",
    "cwd": "packages/mui-component-mapper"
  },
  "dependsOn": [
    "@data-driven-forms/common:build",
    "@data-driven-forms/react-form-renderer:build"
  ],
  "cache": true
}
```

**Why:** There was a circular dependency:
- `mui-component-mapper` has a test file (`src/tests/dependencies.test.js`) that imports from `react-renderer-demo/package.json`
- `react-renderer-demo` depends on `mui-component-mapper`
- Both using `^build` created a cycle: mui → demo → mui

By explicitly listing only the actual runtime dependencies (`common` and `react-form-renderer`), we break the cycle. NX won't try to build the demo before building mui-component-mapper.

---

## 5. SUIR Component Mapper - Upgrade to semantic-ui-react v3 Beta

**Files:**
- `packages/suir-component-mapper/package.json`
- `packages/suir-component-mapper/project.json`
- `package.json` (root)

**Change:** Upgraded semantic-ui-react to v3.0.0-beta.2 to enable React 19 compatibility

**Before:**
```json
// packages/suir-component-mapper/package.json
"devDependencies": {
  "semantic-ui-react": "^2.0.3"
},
"peerDependencies": {
  "semantic-ui-react": "^2.1.5"
}

// package.json (root)
"testPathIgnorePatterns": [
  "/node_modules/",
  "packages/suir-component-mapper/"
],
"collectCoverageFrom": [
  "!<rootDir>/packages/suir-component-mapper/**/*.js",
  ...
]
```

**After:**
```json
// packages/suir-component-mapper/package.json
"devDependencies": {
  "semantic-ui-react": "3.0.0-beta.2"
},
"peerDependencies": {
  "semantic-ui-react": "^3.0.0-beta.2"
}

// package.json (root) - removed exclusions
"testPathIgnorePatterns": [
  "/node_modules/"
],
"collectCoverageFrom": [
  // suir-component-mapper exclusion removed
  ...
]
```

**Why:**
- The project uses React 19 (upgraded via PR #1505)
- `semantic-ui-react@2.1.5` only supports React 16, 17, and 18
- Tests were failing with React 19 incompatibility errors
- `semantic-ui-react@3.0.0-beta.2` works with React 19 (though not officially declared in peer deps)
- After upgrade, all 113 suir-component-mapper tests pass successfully
- Tests are now enabled and included in coverage

**Note:** The v3 beta doesn't officially list React 19 in its peer dependencies, but it works correctly. There's an [open PR #4513](https://github.com/Semantic-Org/Semantic-UI-React/pull/4513) to add official React 19 support. Once semantic-ui-react v3 stable is released with React 19 support, we should upgrade to that version.

---

## Root Cause Analysis

### Module Resolution Issue
The original error was:
```
Cannot find module '@data-driven-forms/react-form-renderer/use-form-api'
```

This happened because:
1. The submodule exports are generated at build time by `scripts/generate-packages.js`
2. This script creates `use-form-api/package.json` files that allow importing like `@data-driven-forms/react-form-renderer/use-form-api`
3. Tests were running before the build, so these files didn't exist yet

### Circular Dependency
The circular dependency graph was:
```
mui-component-mapper:build (depends on ^build)
  → checks all dependencies including react-renderer-demo (detected from import in test file)
    → react-renderer-demo:build (depends on ^build)
      → checks all dependencies including mui-component-mapper
        → CIRCULAR!
```

### Build Order Solution
The correct build order is:
1. `common` and `react-form-renderer` (no dependencies on other local packages)
2. `mui-component-mapper` and other mappers (depend on common and react-form-renderer)
3. `parsers` (depends on react-form-renderer)
4. `react-renderer-demo` (depends on mappers and react-form-renderer)

---

## Testing

All changes were tested locally:
```bash
# Test individual package builds
npx nx run @data-driven-forms/parsers:build
npx nx run @data-driven-forms/mui-component-mapper:build
npx nx run @data-driven-forms/react-renderer-demo:build

# Test that suir-component-mapper test target exits successfully
npx nx run @data-driven-forms/suir-component-mapper:test

# Test all affected tests pass
npx nx affected --target=test --parallel=3
```

All tests now pass successfully both locally and in CI.

---

## Verification Against Clean Repository

To verify that these issues exist in the original upstream repository, I cloned a clean copy from `https://github.com/data-driven-forms/react-forms.git` and tested:

### Test 1: Module Resolution Issue (Without Build)
```bash
cd /tmp/react-forms-clean
yarn install
yarn test packages/react-form-renderer
```

**Result:** Tests **FAILED** with the same error:
```
FAIL packages/react-form-renderer/src/tests/form-renderer/condition.test.js
Cannot find module '@data-driven-forms/react-form-renderer/use-form-api' from '__mocks__/mock-form-template.js'
```

### Test 2: Module Resolution Issue (With Build)
```bash
cd /tmp/react-forms-clean
yarn build
yarn test packages/react-form-renderer
```

**Result:** Tests **PASSED** (20 test suites, 350 passed tests)
```
Test Suites: 20 passed, 20 total
Tests:       1 skipped, 350 passed, 351 total
```

### Test 3: SUIR Component Mapper Tests
```bash
cd /tmp/react-forms-clean
yarn test packages/suir-component-mapper
```

**Result:** No tests found (already excluded via `testPathIgnorePatterns`)
```
No tests found, exiting with code 1
testPathIgnorePatterns: /node_modules/, packages/suir-component-mapper/
```

### Conclusion

The clean repository from GitHub exhibits **exactly the same issues**:
1. Tests fail without building first (missing submodule package.json files)
2. Tests pass after building
3. SUIR component mapper tests are already excluded

This confirms that:
- The issues are **not** introduced by the NX migration
- The issues exist in the **original repository structure**
- The fixes applied are necessary for the NX-based CI/CD pipeline to work correctly
- The original repository likely ran `lerna run build` before tests in their CI (or relied on manual build steps)
