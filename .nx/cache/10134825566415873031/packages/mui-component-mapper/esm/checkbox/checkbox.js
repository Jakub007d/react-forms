import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["input", "isReadOnly", "isDisabled", "isRequired", "label", "helperText", "description", "validateOnMount", "meta", "FormFieldGridProps", "FormControlProps", "FormGroupProps", "FormControlLabelProps", "CheckboxProps", "FormLabelProps", "FormHelperTextProps", "inputProps"],
    _excluded2 = ["options"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import MUICheckbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import FormFieldGrid from '../form-field-grid/form-field-grid';
import { validationError } from '../validation-error/validation-error';
import MultipleChoiceList from '../multiple-choice-list/multiple-choice-list';
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";
export var SingleCheckbox = function SingleCheckbox(props) {
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
      _useFieldApi$FormFiel = _useFieldApi.FormFieldGridProps,
      FormFieldGridProps = _useFieldApi$FormFiel === void 0 ? {} : _useFieldApi$FormFiel,
      _useFieldApi$FormCont = _useFieldApi.FormControlProps,
      FormControlProps = _useFieldApi$FormCont === void 0 ? {} : _useFieldApi$FormCont,
      _useFieldApi$FormGrou = _useFieldApi.FormGroupProps,
      FormGroupProps = _useFieldApi$FormGrou === void 0 ? {} : _useFieldApi$FormGrou,
      _useFieldApi$FormCont2 = _useFieldApi.FormControlLabelProps,
      FormControlLabelProps = _useFieldApi$FormCont2 === void 0 ? {} : _useFieldApi$FormCont2,
      _useFieldApi$Checkbox = _useFieldApi.CheckboxProps,
      CheckboxProps = _useFieldApi$Checkbox === void 0 ? {} : _useFieldApi$Checkbox,
      _useFieldApi$FormLabe = _useFieldApi.FormLabelProps,
      FormLabelProps = _useFieldApi$FormLabe === void 0 ? {} : _useFieldApi$FormLabe,
      _useFieldApi$FormHelp = _useFieldApi.FormHelperTextProps,
      FormHelperTextProps = _useFieldApi$FormHelp === void 0 ? {} : _useFieldApi$FormHelp,
      inputProps = _useFieldApi.inputProps,
      rest = _objectWithoutProperties(_useFieldApi, _excluded);

  var invalid = validationError(meta, validateOnMount);
  var text = invalid || (meta.touched || validateOnMount) && meta.warning || helperText || description;
  return /*#__PURE__*/React.createElement(FormFieldGrid, FormFieldGridProps, /*#__PURE__*/React.createElement(FormControl, _extends({
    required: isRequired,
    error: !!invalid,
    component: "fieldset"
  }, FormControlProps), /*#__PURE__*/React.createElement(FormGroup, FormGroupProps, /*#__PURE__*/React.createElement(FormControlLabel, _extends({}, FormControlLabelProps, {
    control: /*#__PURE__*/React.createElement(MUICheckbox, _extends({}, input, CheckboxProps, {
      disabled: isDisabled || isReadOnly,
      value: input.name,
      inputProps: _objectSpread({
        readOnly: isReadOnly
      }, inputProps)
    }, rest)),
    disabled: isDisabled || isReadOnly,
    label: /*#__PURE__*/React.createElement(FormLabel, FormLabelProps, label)
  })), text && /*#__PURE__*/React.createElement(FormHelperText, FormHelperTextProps, text))));
};

var Checkbox = function Checkbox(_ref) {
  var options = _ref.options,
      props = _objectWithoutProperties(_ref, _excluded2);

  return options ? /*#__PURE__*/React.createElement(MultipleChoiceList, _extends({
    options: options
  }, props)) : /*#__PURE__*/React.createElement(SingleCheckbox, props);
};

export default Checkbox;