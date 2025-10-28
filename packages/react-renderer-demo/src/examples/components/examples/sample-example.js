import React from 'react';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import useFieldApi from '@jakub007d/react-form-renderer/use-field-api';
import validatorTypes from '@jakub007d/react-form-renderer/validator-types';

import FormTemplate from '@jakub007d/mui-component-mapper/form-template';

const CustomComponent = (props) => {
  const { input, meta, label, ...rest } = useFieldApi(props);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 8 }}>
      <label style={{ marginBottom: 6 }} htmlFor={input.name}>
        {label}
      </label>
      <input {...input} {...rest} />
      {meta.error && <p>{meta.error}</p>}
    </div>
  );
};

const schema = {
  fields: [
    {
      component: 'custom-component',
      name: 'some-name',
      label: 'Custom component prop',
      validate: [{ type: validatorTypes.REQUIRED, message: 'I am a required field' }],
    },
  ],
};

const SampleExample = () => {
  return (
    <FormRenderer schema={schema} componentMapper={{ 'custom-component': CustomComponent }} FormTemplate={FormTemplate} onSubmit={console.log} />
  );
};

SampleExample.displayName = 'SampleExample';

export default SampleExample;
