import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["label", "isDisabled"],
    _excluded2 = ["initialValue", "isRequired", "isReadOnly", "helperText", "validate", "isDisabled", "component"],
    _excluded3 = ["FormControlProps", "FormLabelProps", "FormGroupProps", "FormHelperTextProps", "FormFieldGridProps", "FormControlLabelProps", "CheckboxProps"];
import React, { createContext, useContext } from 'react';
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import MultipleChoiceListCommon from '@data-driven-forms/common/multiple-choice-list';
import { validationError } from '../validation-error/validation-error';
var CheckboxContext = /*#__PURE__*/createContext({});

var FinalCheckbox = function FinalCheckbox(_ref) {
  var label = _ref.label,
      _isDisabled = _ref.isDisabled,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useContext = useContext(CheckboxContext),
      FormControlLabelProps = _useContext.FormControlLabelProps,
      CheckboxProps = _useContext.CheckboxProps,
      _useContext$props = _useContext.props,
      initialValue = _useContext$props.initialValue,
      isRequired = _useContext$props.isRequired,
      isReadOnly = _useContext$props.isReadOnly,
      helperText = _useContext$props.helperText,
      validate = _useContext$props.validate,
      isDisabled = _useContext$props.isDisabled,
      component = _useContext$props.component,
      props = _objectWithoutProperties(_useContext$props, _excluded2);

  return /*#__PURE__*/React.createElement(FormControlLabel, _extends({}, FormControlLabelProps, {
    control: /*#__PURE__*/React.createElement(Checkbox, _extends({}, rest, props, CheckboxProps, {
      disabled: isDisabled
    }), label),
    label: label
  }));
};

var Wrapper = function Wrapper(_ref2) {
  var label = _ref2.label,
      isRequired = _ref2.isRequired,
      children = _ref2.children,
      meta = _ref2.meta,
      validateOnMount = _ref2.validateOnMount,
      helperText = _ref2.helperText,
      description = _ref2.description;
  var invalid = validationError(meta, validateOnMount);

  var _useContext2 = useContext(CheckboxContext),
      FormFieldGridProps = _useContext2.FormFieldGridProps,
      FormControlProps = _useContext2.FormControlProps,
      FormLabelProps = _useContext2.FormLabelProps,
      FormGroupProps = _useContext2.FormGroupProps,
      FormHelperTextProps = _useContext2.FormHelperTextProps;

  return /*#__PURE__*/React.createElement(Grid, _extends({
    container: true,
    item: true,
    xs: 12
  }, FormFieldGridProps), /*#__PURE__*/React.createElement(FormControl, _extends({
    required: isRequired,
    error: !!invalid,
    component: "fieldset"
  }, FormControlProps), /*#__PURE__*/React.createElement(FormLabel, FormLabelProps, label), /*#__PURE__*/React.createElement(FormGroup, FormGroupProps, children), (invalid || helperText || description) && /*#__PURE__*/React.createElement(FormHelperText, FormHelperTextProps, invalid || helperText || description)));
};

var MultipleChoiceList = function MultipleChoiceList(_ref3) {
  var _ref3$FormControlProp = _ref3.FormControlProps,
      FormControlProps = _ref3$FormControlProp === void 0 ? {} : _ref3$FormControlProp,
      _ref3$FormLabelProps = _ref3.FormLabelProps,
      FormLabelProps = _ref3$FormLabelProps === void 0 ? {} : _ref3$FormLabelProps,
      _ref3$FormGroupProps = _ref3.FormGroupProps,
      FormGroupProps = _ref3$FormGroupProps === void 0 ? {} : _ref3$FormGroupProps,
      _ref3$FormHelperTextP = _ref3.FormHelperTextProps,
      FormHelperTextProps = _ref3$FormHelperTextP === void 0 ? {} : _ref3$FormHelperTextP,
      _ref3$FormFieldGridPr = _ref3.FormFieldGridProps,
      FormFieldGridProps = _ref3$FormFieldGridPr === void 0 ? {} : _ref3$FormFieldGridPr,
      _ref3$FormControlLabe = _ref3.FormControlLabelProps,
      FormControlLabelProps = _ref3$FormControlLabe === void 0 ? {} : _ref3$FormControlLabe,
      _ref3$CheckboxProps = _ref3.CheckboxProps,
      CheckboxProps = _ref3$CheckboxProps === void 0 ? {} : _ref3$CheckboxProps,
      props = _objectWithoutProperties(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement(CheckboxContext.Provider, {
    value: {
      FormControlProps: FormControlProps,
      FormLabelProps: FormLabelProps,
      FormGroupProps: FormGroupProps,
      FormHelperTextProps: FormHelperTextProps,
      FormFieldGridProps: FormFieldGridProps,
      FormControlLabelProps: FormControlLabelProps,
      CheckboxProps: CheckboxProps,
      props: props
    }
  }, /*#__PURE__*/React.createElement(MultipleChoiceListCommon, _extends({}, props, {
    Wrapper: Wrapper,
    Checkbox: FinalCheckbox
  })));
};

export default MultipleChoiceList;