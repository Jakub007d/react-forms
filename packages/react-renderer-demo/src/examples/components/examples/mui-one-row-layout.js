import React from 'react';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import componentTypes from '@jakub007d/react-form-renderer/component-types';
import FormTemplate from '@jakub007d/mui-component-mapper/form-template';
import TextField from '@jakub007d/mui-component-mapper/text-field';

const schema = {
  fields: [
    {
      name: 'first-name',
      label: 'First name',
      component: componentTypes.TEXT_FIELD,
      FormFieldGridProps: { xs: 6 },
    },
    {
      name: 'last-name',
      label: 'Last name',
      component: componentTypes.TEXT_FIELD,
      FormFieldGridProps: { xs: 6 },
    },
  ],
};

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
};

const OneRowLayout = () => <FormRenderer FormTemplate={FormTemplate} componentMapper={componentMapper} schema={schema} onSubmit={console.log} />;
OneRowLayout.displayName = 'One row layout';

export default OneRowLayout;
