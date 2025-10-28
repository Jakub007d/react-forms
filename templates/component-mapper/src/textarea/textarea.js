import React from 'react';
import PropTypes from 'prop-types';
import { useFieldApi } from '@jakub007d/react-form-renderer';

const Textarea = (props) => {
  const { input, isDisabled, isReadOnly } = useFieldApi(props);

  return <textarea {...input} disabled={isDisabled} readOnly={isReadOnly} />;
};

Textarea.propTypes = {
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool
};

export default Textarea;
