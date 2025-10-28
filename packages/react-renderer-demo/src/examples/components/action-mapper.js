import React from 'react';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import componentTypes from '@jakub007d/react-form-renderer/component-types';

import TextField from '@jakub007d/mui-component-mapper/text-field';
import FormTemplate from '@jakub007d/mui-component-mapper/form-template';

const translateLabel = (id, locale = 'en') =>
  ({
    en: {
      name: 'User name',
      password: 'Password',
    },
    jp: {
      name: '名前',
      password: 'パスワード',
    },
  }[locale][id]);

const schema = {
  title: 'Action Mapper example (translated strings)',
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: 'name',
      actions: {
        label: ['translateLabel', 'name', 'jp'],
      },
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: 'password',
      actions: {
        label: ['translateLabel', 'password', 'jp'],
      },
    },
  ],
};

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
};

const actionMapper = {
  translateLabel,
};

const ActionMapper = () => (
  <FormRenderer FormTemplate={FormTemplate} actionMapper={actionMapper} componentMapper={componentMapper} schema={schema} onSubmit={console.log} />
);
ActionMapper.displayName = 'Action mapper';

export default ActionMapper;
