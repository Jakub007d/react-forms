/* eslint-disable no-console */
const replace = require('replace-in-file');
const glob = require('glob');

const nextVersion = process.argv[2];
console.log('Updating common package version!\n');
console.log('Next version is:', nextVersion, '\n');

const root = process.cwd();
const files = glob.sync(`${root}/packages/*/package.json`);

console.log('Files to replace: ', files.join(',\n'), '\n');
console.log('Replacing to: ', `"@jakub007d/common": "^${nextVersion}"`, '\n');

const replaceConfig = {
  files,
  from: ['"@jakub007d/common": "*"', '"@jakub007d/react-form-renderer": "*"'],
  to: [`"@jakub007d/common": "^${nextVersion}"`, `"@jakub007d/react-form-renderer": "^${nextVersion}"`],
};

(async () => await replace(replaceConfig))();

console.log('Common package version successfully updated!\n');
