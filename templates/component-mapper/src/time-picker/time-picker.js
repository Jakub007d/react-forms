import React from 'react';
import PropTypes from 'prop-types';
import { useFieldApi } from '@jakub007d/react-form-renderer';

const TimePicker = (props) => {
  const { input, isDisabled, isReadOnly } = useFieldApi(props);

  return <input {...input} disabled={isDisabled} readOnly={isReadOnly} type="time" />;
};

TimePicker.propTypes = {
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool
};

export default TimePicker;
