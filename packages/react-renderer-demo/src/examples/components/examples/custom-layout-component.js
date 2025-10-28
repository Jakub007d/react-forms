import React from 'react';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import componentTypes from '@jakub007d/react-form-renderer/component-types';
import FormTemplate from '@jakub007d/mui-component-mapper/form-template';
import TextField from '@jakub007d/mui-component-mapper/text-field';
import useFormApi from '@jakub007d/react-form-renderer/use-form-api';

import Grid from '@mui/material/Grid';

const TwoColumns = ({ fields }) => {
  const { renderForm } = useFormApi();

  return (
    <Grid container spacing={3}>
      {fields.map((field) => (
        <Grid key={field.name} item xs={6}>
          {renderForm([field])}
        </Grid>
      ))}
    </Grid>
  );
};

const schema = {
  fields: [
    {
      name: 'layout',
      component: 'two-columns',
      fields: [
        {
          name: 'first-name',
          label: 'First name',
          component: componentTypes.TEXT_FIELD,
        },
        {
          name: 'last-name',
          label: 'Last name',
          component: componentTypes.TEXT_FIELD,
        },
        {
          name: 'address-1',
          label: 'Address 1',
          component: componentTypes.TEXT_FIELD,
        },
        {
          name: 'address-2',
          label: 'Address 2',
          component: componentTypes.TEXT_FIELD,
        },
      ],
    },
  ],
};

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
  'two-columns': TwoColumns,
};

const CustomLayoutComponent = () => (
  <FormRenderer FormTemplate={FormTemplate} componentMapper={componentMapper} schema={schema} onSubmit={console.log} />
);
CustomLayoutComponent.displayName = 'Custom layout component';

export default CustomLayoutComponent;
