import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["input", "isReadOnly", "isDisabled", "placeholder", "isRequired", "label", "helperText", "description", "validateOnMount", "meta", "MuiPickersUtilsProviderProps", "FormFieldGridProps"];
import React from 'react';
import { TimePicker as MUITimePicker } from "@mui/x-date-pickers/TimePicker";
import FormFieldGrid from '../form-field-grid/form-field-grid';
import { validationError } from '../validation-error/validation-error';
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";
import TextField from "@mui/material/TextField";

var TimePicker = function TimePicker(props) {
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
      MuiPickersUtilsProviderProps = _useFieldApi.MuiPickersUtilsProviderProps,
      _useFieldApi$FormFiel = _useFieldApi.FormFieldGridProps,
      FormFieldGridProps = _useFieldApi$FormFiel === void 0 ? {} : _useFieldApi$FormFiel,
      rest = _objectWithoutProperties(_useFieldApi, _excluded);

  var invalid = validationError(meta, validateOnMount);
  return /*#__PURE__*/React.createElement(FormFieldGrid, FormFieldGridProps, /*#__PURE__*/React.createElement(MUITimePicker, _extends({
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
    readOnly: isReadOnly,
    disabled: isDisabled || isReadOnly
  }, input, {
    value: input.value || null
  }, rest)));
};

export default TimePicker;