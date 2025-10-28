import React from 'react';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import componentTypes from '@jakub007d/react-form-renderer/component-types';
import validatorTypes from '@jakub007d/react-form-renderer/validator-types';
import FormTemplate from '@jakub007d/mui-component-mapper/form-template';
import TextField from '@jakub007d/mui-component-mapper/text-field';

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
};

const schema = {
  title: 'Try submitting empty form',
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: 'name',
      label: 'Required field',
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED,
        },
      ],
    },
  ],
};

const RequiredValidator = () => <FormRenderer FormTemplate={FormTemplate} componentMapper={componentMapper} schema={schema} onSubmit={console.log} />;
RequiredValidator.displayName = 'Required validator';

export default RequiredValidator;
