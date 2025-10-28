import React from 'react';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import componentTypes from '@jakub007d/react-form-renderer/component-types';

import Checkbox from '@jakub007d/mui-component-mapper/checkbox';
import TextField from '@jakub007d/mui-component-mapper/text-field';
import FormTemplate from '@jakub007d/mui-component-mapper/form-template';

const schema = {
  title: 'Set action',
  fields: [
    {
      component: componentTypes.CHECKBOX,
      name: 'useDefaultNickName',
      label: 'Do you want to use default nickname?',
      condition: {
        when: 'nickname',
        is: 'User123',
        notMatch: true,
        then: {
          set: { useDefaultNickName: false },
        },
        else: { visible: true, set: { useDefaultNickName: true } },
      },
      description: 'set: {} is used to reset the setter',
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: 'nickname',
      label: 'Nickname',
      condition: {
        when: 'useDefaultNickName',
        is: true,
        then: {
          set: { nickname: 'User123' },
        },
        else: { visible: true, set: {} },
      },
    },
  ],
};

const componentMapper = {
  [componentTypes.CHECKBOX]: Checkbox,
  [componentTypes.TEXT_FIELD]: TextField,
};

const SetAction = () => <FormRenderer FormTemplate={FormTemplate} componentMapper={componentMapper} schema={schema} onSubmit={console.log} />;
SetAction.displayName = 'Set action';

export default SetAction;
