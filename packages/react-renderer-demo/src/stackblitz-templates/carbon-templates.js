export const html = `
<html>
  <head>
    <!-- Carbon stylesheets -->
    <link rel="stylesheet" href="https://unpkg.com/carbon-components/css/carbon-components.min.css">
    </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

export const code = `import React, { Component } from 'react';
import { render } from 'react-dom';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import FormTemplate from '@jakub007d/carbon-component-mapper/form-template';
import componentMapper from '@jakub007d/carbon-component-mapper/component-mapper';

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
import CarbonFormTemplate from '@jakub007d/carbon-component-mapper/form-template';
import componentMapper from '@jakub007d/carbon-component-mapper/component-mapper';

import schema from './schema'

const FormTemplate = (props) => <CarbonFormTemplate {...props} showFormControls={false} />

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
  '@jakub007d/carbon-component-mapper': 'latest',
  '@jakub007d/common': 'latest',
  '@carbon/icons-react': 'latest',
  'carbon-components': 'latest',
  'carbon-components-react': 'latest',
  'carbon-icons': 'latest',
  'prop-types': 'latest',
  '@babel/runtime': '^7.12.1',
  clsx: 'latest',
};
