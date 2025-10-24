import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["input", "isReadOnly", "isDisabled", "isRequired", "label", "helperText", "description", "validateOnMount", "meta", "onText", "offText", "FormFieldGridProps", "FormControlProps", "FormGroupProps", "FormControlLabelProps", "SwitchProps", "FormLabelProps", "FormHelperTextProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import MUISwitch from "@mui/material/Switch";
import FormFieldGrid from '../form-field-grid/form-field-grid';
import { validationError } from '../validation-error/validation-error';
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";
export var Switch = function Switch(props) {
  var _useFieldApi = useFieldApi(_objectSpread(_objectSpread({}, props), {}, {
    type: 'checkbox'
  })),
      input = _useFieldApi.input,
      isReadOnly = _useFieldApi.isReadOnly,
      isDisabled = _useFieldApi.isDisabled,
      isRequired = _useFieldApi.isRequired,
      label = _useFieldApi.label,
      helperText = _useFieldApi.helperText,
      description = _useFieldApi.description,
      validateOnMount = _useFieldApi.validateOnMount,
      meta = _useFieldApi.meta,
      onText = _useFieldApi.onText,
      offText = _useFieldApi.offText,
      _useFieldApi$FormFiel = _useFieldApi.FormFieldGridProps,
      FormFieldGridProps = _useFieldApi$FormFiel === void 0 ? {} : _useFieldApi$FormFiel,
      _useFieldApi$FormCont = _useFieldApi.FormControlProps,
      FormControlProps = _useFieldApi$FormCont === void 0 ? {} : _useFieldApi$FormCont,
      _useFieldApi$FormGrou = _useFieldApi.FormGroupProps,
      FormGroupProps = _useFieldApi$FormGrou === void 0 ? {} : _useFieldApi$FormGrou,
      _useFieldApi$FormCont2 = _useFieldApi.FormControlLabelProps,
      FormControlLabelProps = _useFieldApi$FormCont2 === void 0 ? {} : _useFieldApi$FormCont2,
      _useFieldApi$SwitchPr = _useFieldApi.SwitchProps,
      SwitchProps = _useFieldApi$SwitchPr === void 0 ? {} : _useFieldApi$SwitchPr,
      _useFieldApi$FormLabe = _useFieldApi.FormLabelProps,
      FormLabelProps = _useFieldApi$FormLabe === void 0 ? {} : _useFieldApi$FormLabe,
      _useFieldApi$FormHelp = _useFieldApi.FormHelperTextProps,
      FormHelperTextProps = _useFieldApi$FormHelp === void 0 ? {} : _useFieldApi$FormHelp,
      rest = _objectWithoutProperties(_useFieldApi, _excluded);

  var invalid = validationError(meta, validateOnMount);
  var text = invalid || (meta.touched || validateOnMount) && meta.warning || helperText || description;
  return /*#__PURE__*/React.createElement(FormFieldGrid, FormFieldGridProps, /*#__PURE__*/React.createElement(FormControl, _extends({
    required: isRequired,
    error: !!invalid,
    component: "fieldset"
  }, FormControlProps), /*#__PURE__*/React.createElement(FormGroup, FormGroupProps, /*#__PURE__*/React.createElement(FormControlLabel, _extends({
    control: /*#__PURE__*/React.createElement(MUISwitch, _extends({}, rest, input, {
      readOnly: isReadOnly,
      disabled: isDisabled || isReadOnly,
      onChange: function onChange(_ref) {
        var checked = _ref.target.checked;
        return input.onChange(checked);
      }
    }, SwitchProps)),
    label: /*#__PURE__*/React.createElement(FormLabel, FormLabelProps, input.checked ? onText || label : offText || label)
  }, FormControlLabelProps)), text && /*#__PURE__*/React.createElement(FormHelperText, FormHelperTextProps, text))));
};
export default Switch;