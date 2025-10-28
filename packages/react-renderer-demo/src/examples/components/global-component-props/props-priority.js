import React from 'react';
import FormRenderer from '@jakub007d/react-form-renderer/form-renderer';
import componentTypes from '@jakub007d/react-form-renderer/component-types';
import Switch from '@jakub007d/mui-component-mapper/switch';
import FormTemplate from '@jakub007d/mui-component-mapper/form-template';

const PropsPriority = () => {
  const componentMapper = {
    [componentTypes.SWITCH]: {
      component: Switch,
      FormControlLabelProps: {
        labelPlacement: 'bottom',
      },
    },
  };

  const schema = {
    fields: [
      {
        component: componentTypes.SWITCH,
        name: 'switch-field-bottom',
        label: 'Label is on the bottom of the switch by default',
      },
      {
        component: componentTypes.SWITCH,
        name: 'switch-field-end',
        label: 'Label is on the right because schema props have higher priority',
        FormControlLabelProps: {
          labelPlacement: 'end',
        },
      },
    ],
  };
  return <FormRenderer FormTemplate={FormTemplate} schema={schema} componentMapper={componentMapper} onSubmit={console.log} />;
};

PropsPriority.displayName = 'Props priority';

export default PropsPriority;
