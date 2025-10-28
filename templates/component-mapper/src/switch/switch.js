import React from 'react';
import PropTypes from 'prop-types';
import { useFieldApi } from '@jakub007d/react-form-renderer';

const Switch = (props) => {
  const { input } = useFieldApi({ ...props, type: 'checkbox' });

  return (
    <label>
      <input {...input} />
      <span />
    </label>
  );
};

export default Switch;
