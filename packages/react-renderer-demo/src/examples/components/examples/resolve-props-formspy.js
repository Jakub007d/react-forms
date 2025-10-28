import React from 'react';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import FormSpy from '@jakub007d/react-form-renderer/form-spy';
import componentTypes from '@jakub007d/react-form-renderer/component-types';
import FormTemplate from '@jakub007d/mui-component-mapper/form-template';
import TextField from '@jakub007d/mui-component-mapper/text-field';
import Checkbox from '@jakub007d/mui-component-mapper/checkbox';

const TextFieldWrapped = (props) => <FormSpy subscription={{ values: true }}>{() => <TextField {...props} />}</FormSpy>;

const schema = {
  fields: [
    {
      name: 'custom_email',
      label: 'Use custom email',
      component: componentTypes.CHECKBOX,
    },
    {
      name: 'email',
      label: 'Email',
      component: 'text-field-wrapper',
      resolveProps: (_props, _field, formOptions) => (formOptions.getState().values.custom_email ? { isDisabled: false } : { isDisabled: true }),
    },
  ],
};

const componentMapper = {
  [componentTypes.CHECKBOX]: Checkbox,
  'text-field-wrapper': TextFieldWrapped,
};

const ResolvePropsFormSpy = () => (
  <FormRenderer FormTemplate={FormTemplate} componentMapper={componentMapper} schema={schema} onSubmit={console.log} />
);
ResolvePropsFormSpy.displayName = 'Resolve props form spy';

export default ResolvePropsFormSpy;
