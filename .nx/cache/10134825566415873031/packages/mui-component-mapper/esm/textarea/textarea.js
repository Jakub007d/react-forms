import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["input", "isReadOnly", "isDisabled", "placeholder", "isRequired", "label", "helperText", "description", "validateOnMount", "meta", "FormFieldGridProps", "inputProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import MuiTextField from "@mui/material/TextField";
import FormFieldGrid from '../form-field-grid/form-field-grid';
import { validationError } from '../validation-error/validation-error';
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";

var Textarea = function Textarea(props) {
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
      _useFieldApi$inputPro = _useFieldApi.inputProps,
      inputProps = _useFieldApi$inputPro === void 0 ? {} : _useFieldApi$inputPro,
      rest = _objectWithoutProperties(_useFieldApi, _excluded);

  var invalid = validationError(meta, validateOnMount);
  return /*#__PURE__*/React.createElement(FormFieldGrid, FormFieldGridProps, /*#__PURE__*/React.createElement(MuiTextField, _extends({}, input, {
    fullWidth: true,
    error: !!invalid,
    helperText: invalid || (meta.touched || validateOnMount) && meta.warning || helperText || description,
    disabled: isDisabled,
    label: label,
    placeholder: placeholder,
    required: isRequired,
    inputProps: _objectSpread({
      readOnly: isReadOnly
    }, inputProps)
  }, rest, {
    multiline: true
  })));
};

export default Textarea;