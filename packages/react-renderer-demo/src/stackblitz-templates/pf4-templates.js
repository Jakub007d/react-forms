export const html = `
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/@patternfly/patternfly@latest/patternfly-base.css"/>
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/@patternfly/patternfly@latest/patternfly-addons.css"/>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

export const code = `import React, { Component } from 'react';
import { render } from 'react-dom';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import FormTemplate from '@jakub007d/pf4-component-mapper/form-template';
import componentMapper from '@jakub007d/pf4-component-mapper/component-mapper';

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
import Pf4FormTemplate from '@jakub007d/pf4-component-mapper/form-template';
import componentMapper from '@jakub007d/pf4-component-mapper/component-mapper';

import schema from './schema'

const FormTemplate = (props) => <Pf4FormTemplate {...props} showFormControls={false} />

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
  '@jakub007d/pf4-component-mapper': 'latest',
  '@jakub007d/common': 'latest',
  '@patternfly/react-core': '^6.0.0',
  '@patternfly/react-icons': '^6.0.0',
  '@patternfly/react-styles': '^6.0.0',
  'prop-types': 'latest',
  '@babel/runtime': '^7.12.1',
  tslib: '^2.0.0',
};
