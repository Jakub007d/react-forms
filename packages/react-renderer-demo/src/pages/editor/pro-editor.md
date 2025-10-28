import DocPage from '@docs/doc-page';
import ComponentMapperBar from '@docs/component-mapper-bar';
import Alert from '@mui/material/Alert';

<DocPage>

# Pro Editor

<ComponentMapperBar prefix="mui" github="https://github.com/data-driven-forms/editor/tree/main/packages/editor-pro" npm="https://www.npmjs.com/package/@jakub007d%2Feditor-pro" npmSvg="https://badge.fury.io/js/@jakub007d%2Feditor-pro.svg" />

<br />

<Alert severity="warning">This component is work-in-progress and in preview. API is unstable.</Alert>

<br />

`@jakub007d/editor-pro` is a prebuilt Drag And Drop editor supporting custom provided mappers. The UI is built on Evergreen UI Framework. Check the [live example](/editor/live-editor).

## Installation

```bash
npm install --save @jakub007d/editor-pro
```
or
```bash
yarn add @jakub007d/editor-pro
```


**Features**

- component editing
- condition editing
- validator editing

## Usage

```jsx
import Editor from '@jakub007d/editor-pro/editor'

<Editor />
```


</DocPage>