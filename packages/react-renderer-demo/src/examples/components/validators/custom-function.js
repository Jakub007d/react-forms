import React from 'react';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import componentTypes from '@jakub007d/react-form-renderer/component-types';
import FormTemplate from '@jakub007d/mui-component-mapper/form-template';
import TextField from '@jakub007d/mui-component-mapper/text-field';

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
};
const schema = {
  title: 'Start typing',
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: 'custom-validator',
      label: 'Custom validator',
      helperText: 'type name John to fail validation',
      validate: [(value) => (value === 'John' ? 'John is not alloved' : undefined)],
    },
  ],
};

const CustomValidator = () => <FormRenderer FormTemplate={FormTemplate} componentMapper={componentMapper} schema={schema} onSubmit={console.log} />;
CustomValidator.displayName = 'Custom validator';

export default CustomValidator;
