import React from 'react';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import componentTypes from '@jakub007d/react-form-renderer/component-types';

import TextField from '@jakub007d/mui-component-mapper/text-field';
import PlainText from '@jakub007d/mui-component-mapper/plain-text';
import FormTemplate from '@jakub007d/mui-component-mapper/form-template';

const schema = {
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: 'field-1',
      label: 'Compare your number with 10',
    },
    {
      component: componentTypes.PLAIN_TEXT,
      name: 'field-2',
      label: 'Greater than 10; ',
      condition: { when: 'field-1', greaterThan: 10 },
    },
    {
      component: componentTypes.PLAIN_TEXT,
      name: 'field-3',
      label: 'Greater than or equal to 10; ',
      condition: { when: 'field-1', greaterThanOrEqualTo: 10 },
    },
    {
      component: componentTypes.PLAIN_TEXT,
      name: 'field-4',
      label: 'Less than 10; ',
      condition: { when: 'field-1', lessThan: 10 },
    },
    {
      component: componentTypes.PLAIN_TEXT,
      name: 'field-5',
      label: 'Less than or equal to 10; ',
      condition: { when: 'field-1', lessThanOrEqualTo: 10 },
    },
  ],
};

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
  [componentTypes.PLAIN_TEXT]: PlainText,
};

const IsCondition = () => <FormRenderer FormTemplate={FormTemplate} componentMapper={componentMapper} schema={schema} onSubmit={console.log} />;
IsCondition.displayName = 'Is condition';

export default IsCondition;
