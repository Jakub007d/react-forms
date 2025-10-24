import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";
import FormFieldGrid from '../form-field-grid/form-field-grid';
import { validationError } from '../validation-error/validation-error';
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";
import TextField from "@mui/material/TextField";

var DatePicker = function DatePicker(props) {
  var _useFieldApi = useFieldApi(props),
      input = _useFieldApi.input,
      isReadOnly = _useFieldApi.isReadOnly,
      isDisabled = _useFieldApi.isDisabled,
      placeholder = _useFieldApi.placeholder,
      isRequired = _useFieldApi.isRequired,
      label = _useFieldApi.label,
      helperText = _useFieldApi.helperText,
      description = _useFieldApi.description,
      validateOnMount = _useFieldApi.validateOnMount,
      meta = _useFieldApi.meta,
      _useFieldApi$FormFiel = _useFieldApi.FormFieldGridProps,
      FormFieldGridProps = _useFieldApi$FormFiel === void 0 ? {} : _useFieldApi$FormFiel,
      _useFieldApi$DatePick = _useFieldApi.DatePickerProps,
      DatePickerProps = _useFieldApi$DatePick === void 0 ? {} : _useFieldApi$DatePick;

  var invalid = validationError(meta, validateOnMount);
  return /*#__PURE__*/React.createElement(FormFieldGrid, FormFieldGridProps, /*#__PURE__*/React.createElement(MUIDatePicker, _extends({
    slotProps: {
      textField: {
        fullWidth: true,
        margin: 'normal',
        label: label,
        helperText: invalid || (meta.touched || validateOnMount) && meta.warning || helperText || description,
        placeholder: placeholder,
        required: isRequired,
        error: !!invalid,
        onBlur: input.onBlur,
        onFocus: input.onFocus
      }
    } // legacy version
    ,
    renderInput: function renderInput(props) {
      return /*#__PURE__*/React.createElement(TextField, _extends({}, props, {
        fullWidth: true,
        margin: "normal",
        label: label,
        helperText: invalid || (meta.touched || validateOnMount) && meta.warning || helperText || description,
        placeholder: placeholder,
        required: isRequired,
        error: !!invalid
      }));
    },
    disabled: isDisabled || isReadOnly,
    readOnly: isReadOnly
  }, input, {
    value: input.value || null
  }, DatePickerProps)));
};

export default DatePicker;