export const html = `
<html>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

export const code = `import React, { Component } from 'react';
import { render } from 'react-dom';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import FormTemplate from '@jakub007d/ant-component-mapper/form-template';
import componentMapper from '@jakub007d/ant-component-mapper/component-mapper';
import 'antd/dist/antd.css'

import schema from './schema'

class App extends Component {
  render() {
    return (
      <div style={{margin: 24}}>
        <FormRenderer
          schema={schema}
          FormTemplate={FormTemplate}
          componentMapper={componentMapper}
          onSubmit={console.log}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));`;

export const wizardCode = `import React, { Component } from 'react';
import { render } from 'react-dom';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import AntFormTemplate from '@jakub007d/ant-component-mapper/form-template';
import componentMapper from '@jakub007d/ant-component-mapper/component-mapper';
import 'antd/dist/antd.css'

import schema from './schema'

const FormTemplate = (props) => <AntFormTemplate {...props} showFormControls={false} />

class App extends Component {
  render() {
    return (
      <div style={{margin: 24}}>
        <FormRenderer
          schema={schema}
          FormTemplate={FormTemplate}
          componentMapper={componentMapper}
          onSubmit={console.log}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));`;

export const dependencies = {
  react: 'latest',
  'react-dom': 'latest',
  '@jakub007d/react-form-renderer': 'latest',
  '@jakub007d/ant-component-mapper': 'latest',
  '@jakub007d/common': 'latest',
  antd: '^4.0.0',
  '@ant-design/icons': '^4.7.0',
  'prop-types': 'latest',
  '@babel/runtime': '^7.12.1',
};
