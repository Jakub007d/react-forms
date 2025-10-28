import React from 'react';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import componentTypes from '@jakub007d/react-form-renderer/component-types';

import TextField from '@jakub007d/mui-component-mapper/text-field';
import FormTemplate from '@jakub007d/mui-component-mapper/form-template';

const schema = {
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: 'name',
      label: 'Validate me',
      isRequired: true,
      validate: [{ type: 'required' }],
      helperText: 'This field will indicate successful validation after onBlur event',
      resolveProps: (props, { meta, input }, formOptions) => {
        if (meta.valid && meta.touched) {
          return {
            helperText: 'Validated',
            style: {
              background: 'greenyellow',
            },
          };
        }

        return {};
      },
    },
  ],
};

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
};

const ResolveProps = () => <FormRenderer FormTemplate={FormTemplate} componentMapper={componentMapper} schema={schema} onSubmit={console.log} />;
ResolveProps.displayName = 'Resolve props';

export default ResolveProps;
