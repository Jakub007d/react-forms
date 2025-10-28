import React from 'react';
import PropTypes from 'prop-types';
import { useFieldApi } from '@jakub007d/react-form-renderer';

const Slider = (props) => {
  const { input, isDisabled, isReadOnly } = useFieldApi(props);

  return <input {...input} type="range" disabled={isDisabled} readOnly={isReadOnly} />;
};

Slider.propTypes = {
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool
};

export default Slider;
