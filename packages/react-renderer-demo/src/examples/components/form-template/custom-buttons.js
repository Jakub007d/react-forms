/* eslint-disable react/prop-types */
import React from 'react';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import componentTypes from '@jakub007d/react-form-renderer/component-types';
import validatorTypes from '@jakub007d/react-form-renderer/validator-types';
import useFormApi from '@jakub007d/react-form-renderer/use-form-api';
import FormSpy from '@jakub007d/react-form-renderer/form-spy';
import TextField from '@jakub007d/mui-component-mapper/text-field';
import Button from '@mui/material/Button';

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
};

const schema = {
  title: 'Custom MUI buttons',
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: 'name',
      label: 'Name',
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED,
        },
      ],
    },
  ],
};

const FormTemplate = ({ formFields, schema }) => {
  const { handleSubmit, onReset, onCancel, getState } = useFormApi();
  const { submitting, valid, pristine } = getState();

  return (
    <form onSubmit={handleSubmit}>
      {schema.title}
      {formFields}
      <FormSpy>
        {() => (
          <div style={{ marginTop: 8 }}>
            <Button disabled={submitting || !valid} style={{ marginRight: 8 }} type="submit" color="primary" variant="contained">
              Submit
            </Button>
            <Button disabled={pristine} style={{ marginRight: 8 }} onClick={onReset} variant="contained">
              Reset
            </Button>
            <Button variant="contained" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        )}
      </FormSpy>
    </form>
  );
};

const asyncSubmit = (values, api) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log('FormValues', values);
      resolve('Yay');
    }, 1500)
  );

const FormControls = () => (
  <FormRenderer
    FormTemplate={FormTemplate}
    componentMapper={componentMapper}
    schema={schema}
    onSubmit={asyncSubmit}
    onCancel={() => console.log('Cancelling')}
    onReset={() => console.log('Resetting')}
  />
);

FormControls.displayName = 'Form controls';

export default FormControls;
