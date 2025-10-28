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
  title: 'Start typing',
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: 'length',
      label: 'Length field',
      helperText: 'min 5 characters, max 10',
      validate: [
        {
          type: validatorTypes.MIN_LENGTH,
          threshold: 5,
        },
        {
          type: validatorTypes.MAX_LENGTH,
          threshold: 10,
        },
      ],
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: 'exact-length',
      label: 'Exact length field',
      helperText: 'must be 3 characters long',
      validate: [
        {
          type: validatorTypes.EXACT_LENGTH,
          threshold: 3,
        },
      ],
    },
  ],
};

const LengthValidators = () => <FormRenderer FormTemplate={FormTemplate} componentMapper={componentMapper} schema={schema} onSubmit={console.log} />;

LengthValidators.displayName = 'Length validators';

export default LengthValidators;
