import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["inputProps"],
    _excluded2 = ["name", "option", "isDisabled", "isReadOnly", "FormControlLabelProps", "RadioProps"],
    _excluded3 = ["name"],
    _excluded4 = ["options", "isDisabled", "label", "isRequired", "helperText", "description", "isReadOnly", "meta", "validateOnMount", "FormFieldGridProps", "FormControlProps", "FormLabelProps", "FormHelperTextProps", "FormControlLabelProps", "RadioProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { styled } from '@mui/material/styles';
import MUIRadio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormFieldGrid from '../form-field-grid/form-field-grid';
import { validationError } from '../validation-error/validation-error';
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";
var PREFIX = 'Radio';
var classes = {
  grid: "".concat(PREFIX, "-grid")
};
var StyledFormFieldGrid = styled(FormFieldGrid)(function () {
  return _defineProperty({}, "&.".concat(classes.grid), {
    '&:first-of-type': {
      marginTop: 8
    }
  });
});

var RadioOption = function RadioOption(_ref2) {
  var name = _ref2.name,
      option = _ref2.option,
      isDisabled = _ref2.isDisabled,
      isReadOnly = _ref2.isReadOnly,
      FormControlLabelProps = _ref2.FormControlLabelProps,
      _ref2$RadioProps = _ref2.RadioProps,
      inputProps = _ref2$RadioProps.inputProps,
      RadioProps = _objectWithoutProperties(_ref2$RadioProps, _excluded),
      props = _objectWithoutProperties(_ref2, _excluded2);

  var _useFieldApi = useFieldApi({
    name: name,
    type: 'radio',
    value: option.value
  }),
      input = _useFieldApi.input;

  return /*#__PURE__*/React.createElement(FormControlLabel, _extends({
    key: "".concat(name, "-").concat(option.value),
    control: /*#__PURE__*/React.createElement(MUIRadio, _extends({}, input, {
      name: name,
      disabled: isDisabled || isReadOnly,
      onChange: function onChange() {
        return input.onChange(option.value);
      },
      inputProps: _objectSpread({
        readOnly: isReadOnly
      }, inputProps)
    }, RadioProps)),
    label: option.label
  }, FormControlLabelProps, props));
};

var Radio = function Radio(_ref3) {
  var name = _ref3.name,
      props = _objectWithoutProperties(_ref3, _excluded3);

  var _useFieldApi2 = useFieldApi(_objectSpread(_objectSpread({}, props), {}, {
    name: name,
    type: 'radio'
  })),
      _useFieldApi2$options = _useFieldApi2.options,
      options = _useFieldApi2$options === void 0 ? [] : _useFieldApi2$options,
      isDisabled = _useFieldApi2.isDisabled,
      label = _useFieldApi2.label,
      isRequired = _useFieldApi2.isRequired,
      helperText = _useFieldApi2.helperText,
      description = _useFieldApi2.description,
      isReadOnly = _useFieldApi2.isReadOnly,
      meta = _useFieldApi2.meta,
      validateOnMount = _useFieldApi2.validateOnMount,
      _useFieldApi2$FormFie = _useFieldApi2.FormFieldGridProps,
      FormFieldGridProps = _useFieldApi2$FormFie === void 0 ? {} : _useFieldApi2$FormFie,
      _useFieldApi2$FormCon = _useFieldApi2.FormControlProps,
      FormControlProps = _useFieldApi2$FormCon === void 0 ? {} : _useFieldApi2$FormCon,
      _useFieldApi2$FormLab = _useFieldApi2.FormLabelProps,
      FormLabelProps = _useFieldApi2$FormLab === void 0 ? {} : _useFieldApi2$FormLab,
      _useFieldApi2$FormHel = _useFieldApi2.FormHelperTextProps,
      FormHelperTextProps = _useFieldApi2$FormHel === void 0 ? {} : _useFieldApi2$FormHel,
      _useFieldApi2$FormCon2 = _useFieldApi2.FormControlLabelProps,
      FormControlLabelProps = _useFieldApi2$FormCon2 === void 0 ? {} : _useFieldApi2$FormCon2,
      _useFieldApi2$RadioPr = _useFieldApi2.RadioProps,
      RadioProps = _useFieldApi2$RadioPr === void 0 ? {} : _useFieldApi2$RadioPr,
      rest = _objectWithoutProperties(_useFieldApi2, _excluded4);

  var invalid = validationError(meta, validateOnMount);
  var text = invalid || (meta.touched || validateOnMount) && meta.warning || helperText || description;
  return /*#__PURE__*/React.createElement(StyledFormFieldGrid, _extends({
    className: classes.grid
  }, FormFieldGridProps), /*#__PURE__*/React.createElement(FormControl, _extends({
    required: isRequired,
    error: !!invalid,
    component: "fieldset"
  }, FormControlProps), /*#__PURE__*/React.createElement(FormLabel, _extends({
    component: "legend"
  }, FormLabelProps), label), options.map(function (option) {
    return /*#__PURE__*/React.createElement(RadioOption, _extends({
      key: option.value,
      name: name,
      option: option,
      isDisabled: isDisabled,
      isReadOnly: isReadOnly,
      FormControlLabelProps: FormControlLabelProps,
      RadioProps: RadioProps
    }, rest));
  }), text && /*#__PURE__*/React.createElement(FormHelperText, FormHelperTextProps, text)));
};

export default Radio;