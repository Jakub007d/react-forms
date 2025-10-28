import React from 'react';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import componentTypes from '@jakub007d/react-form-renderer/component-types';
import FormTemplate from '@jakub007d/mui-component-mapper/form-template';
import TextField from '@jakub007d/mui-component-mapper/text-field';
import validatorTypes from '@jakub007d/react-form-renderer/validator-types';

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
};
const schema = {
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: 'custom-validator',
      validate: [{ type: validatorTypes.REQUIRED, message: 'This field is required' }],
      validateOnMount: true,
    },
  ],
};

const CustomMessage = () => <FormRenderer FormTemplate={FormTemplate} componentMapper={componentMapper} schema={schema} onSubmit={console.log} />;
CustomMessage.displayName = 'Custom message';

export default CustomMessage;
