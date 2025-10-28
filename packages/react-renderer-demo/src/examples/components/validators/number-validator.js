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
      name: 'number-size',
      label: 'Number value validator',
      helperText: 'Value of the number must be between 1.36 and 33.3',
      type: 'number',
      validate: [
        {
          type: validatorTypes.MIN_NUMBER_VALUE,
          includeThreshold: true,
          value: 1.36,
        },
        {
          type: validatorTypes.MAX_NUMBER_VALUE,
          includeThreshold: false,
          value: 33.3,
        },
      ],
    },
  ],
};

const NumberValueValidators = () => (
  <FormRenderer FormTemplate={FormTemplate} componentMapper={componentMapper} schema={schema} onSubmit={console.log} />
);
NumberValueValidators.displayName = 'Number value validators';

export default NumberValueValidators;
