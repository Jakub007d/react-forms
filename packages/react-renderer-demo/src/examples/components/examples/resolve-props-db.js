import React from 'react';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import componentTypes from '@jakub007d/react-form-renderer/component-types';
import FormTemplate from '@jakub007d/mui-component-mapper/form-template';
import TextField from '@jakub007d/mui-component-mapper/text-field';
import Checkbox from '@jakub007d/mui-component-mapper/checkbox';

const isEnabled = () => (_props, _field, formOptions) => formOptions.getState().values.custom_email ? { isDisabled: false } : { isDisabled: true };

const actionMapper = {
  isEnabled,
};

const schema = {
  fields: [
    {
      name: 'custom_email',
      label: 'Use custom email',
      component: 'checkbox',
    },
    {
      name: 'email',
      label: 'Email',
      component: 'text-field',
      actions: {
        resolveProps: ['isEnabled'],
      },
    },
  ],
};

const componentMapper = {
  [componentTypes.CHECKBOX]: Checkbox,
  [componentTypes.TEXT_FIELD]: TextField,
};

const ResolvePropsDb = () => (
  <FormRenderer
    FormTemplate={FormTemplate}
    componentMapper={componentMapper}
    schema={schema}
    onSubmit={console.log}
    subscription={{ values: true }}
    actionMapper={actionMapper}
  />
);
ResolvePropsDb.displayName = 'Resolve props DB';

export default ResolvePropsDb;
