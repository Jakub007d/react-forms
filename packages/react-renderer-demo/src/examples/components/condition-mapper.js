import React from 'react';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import componentTypes from '@jakub007d/react-form-renderer/component-types';

import TextField from '@jakub007d/mui-component-mapper/text-field';
import FormTemplate from '@jakub007d/mui-component-mapper/form-template';

const conditionMapper = {
  resolveCondition: (requiredValue) => (value, _conditionConfig) => requiredValue === value,
};

const schema = {
  title: 'Condition Mapper example',
  fields: [
    {
      name: 'first-name',
      label: 'First name',
      component: componentTypes.TEXT_FIELD,
      helperText: 'Type John to see mapped condition',
    },
    {
      name: 'mapped-condition',
      label: 'Mapped Condition',
      component: componentTypes.TEXT_FIELD,
      condition: {
        mappedAttributes: {
          is: ['resolveCondition', 'John'],
        },
        when: 'first-name',
      },
    },
  ],
};

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
};
const ConditionMapper = () => (
  <FormRenderer
    FormTemplate={FormTemplate}
    conditionMapper={conditionMapper}
    componentMapper={componentMapper}
    schema={schema}
    onSubmit={console.log}
  />
);
ConditionMapper.displayName = 'Condition mapper';

export default ConditionMapper;
