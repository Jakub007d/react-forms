import React, { useState } from 'react';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import componentTypes from '@jakub007d/react-form-renderer/component-types';
import dataTypes from '@jakub007d/react-form-renderer/data-types';
import FormTemplate from '@jakub007d/mui-component-mapper/form-template';
import TextField from '@jakub007d/mui-component-mapper/text-field';
import Typography from '@mui/material/Typography';

const schema = {
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: 'typed-number',
      label: 'Typed number',
      type: 'number',
      dataType: dataTypes.FLOAT,
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: 'untyped-number',
      label: 'Number without type',
      type: 'number',
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: 'string-as-number',
      label: 'String as number',
      type: 'string',
      dataType: dataTypes.INTEGER,
    },
  ],
};

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
};

const DataTypesExample = () => {
  const [values, setValues] = useState({});
  return (
    <div>
      <FormRenderer
        FormTemplate={FormTemplate}
        componentMapper={componentMapper}
        schema={schema}
        onSubmit={console.log}
        debug={({ values }) => setValues(values)}
      />
      <div style={{ marginTop: 16 }}>
        <Typography component="h3" variant="h5">
          Form values
        </Typography>
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </div>
    </div>
  );
};

DataTypesExample.displayName = 'Data types example';

export default DataTypesExample;
