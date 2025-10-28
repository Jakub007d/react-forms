import React from 'react';
import { TextField as MuiTextField } from '@mui/material';

import FormFieldGrid from '../form-field-grid/form-field-grid';
import { validationError } from '../validation-error/validation-error';
import { useFieldApi } from '@jakub007d/react-form-renderer';

const TextField = (props) => {
  const {
    input,
    isReadOnly,
    isDisabled,
    placeholder,
    isRequired,
    label,
    helperText,
    description,
    validateOnMount,
    meta,
    inputProps,
    FormFieldGridProps,
    ...rest
  } = useFieldApi(props);
  const invalid = validationError(meta, validateOnMount);

  return (
    <FormFieldGrid {...FormFieldGridProps}>
      <MuiTextField
        {...input}
        fullWidth
        error={!!invalid}
        helperText={invalid || ((meta.touched || validateOnMount) && meta.warning) || helperText || description}
        disabled={isDisabled}
        label={label}
        placeholder={placeholder}
        required={isRequired}
        inputProps={{
          readOnly: isReadOnly,
          ...inputProps,
        }}
        {...rest}
      />
    </FormFieldGrid>
  );
};

export default TextField;
