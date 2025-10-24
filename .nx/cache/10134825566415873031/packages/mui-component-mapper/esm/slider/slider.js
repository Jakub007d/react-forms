import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["input", "isReadOnly", "isDisabled", "isRequired", "label", "helperText", "description", "validateOnMount", "meta", "FormFieldGridProps", "FormControlProps", "FormGroupProps", "FormLabelProps", "FormHelperTextProps", "before", "after", "InputGridProps", "BeforeGridProps", "SliderGridProps", "AfterGridProps"];
import React from 'react';
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import MUISlider from "@mui/material/Slider";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";
import FormFieldGrid from '../form-field-grid/form-field-grid';
import { validationError } from '../validation-error/validation-error';

var Slider = function Slider(props) {
  var _useFieldApi = useFieldApi(props),
      input = _useFieldApi.input,
      isReadOnly = _useFieldApi.isReadOnly,
      isDisabled = _useFieldApi.isDisabled,
      isRequired = _useFieldApi.isRequired,
      label = _useFieldApi.label,
      helperText = _useFieldApi.helperText,
      description = _useFieldApi.description,
      validateOnMount = _useFieldApi.validateOnMount,
      meta = _useFieldApi.meta,
      FormFieldGridProps = _useFieldApi.FormFieldGridProps,
      FormControlProps = _useFieldApi.FormControlProps,
      FormGroupProps = _useFieldApi.FormGroupProps,
      FormLabelProps = _useFieldApi.FormLabelProps,
      FormHelperTextProps = _useFieldApi.FormHelperTextProps,
      before = _useFieldApi.before,
      after = _useFieldApi.after,
      InputGridProps = _useFieldApi.InputGridProps,
      BeforeGridProps = _useFieldApi.BeforeGridProps,
      SliderGridProps = _useFieldApi.SliderGridProps,
      AfterGridProps = _useFieldApi.AfterGridProps,
      rest = _objectWithoutProperties(_useFieldApi, _excluded);

  var invalid = validationError(meta, validateOnMount);
  var text = invalid || (meta.touched || validateOnMount) && meta.warning || helperText || description;
  return /*#__PURE__*/React.createElement(FormFieldGrid, FormFieldGridProps, /*#__PURE__*/React.createElement(FormControl, _extends({
    fullWidth: true,
    required: isRequired,
    error: !!invalid,
    component: "fieldset"
  }, FormControlProps), /*#__PURE__*/React.createElement(FormGroup, FormGroupProps, /*#__PURE__*/React.createElement(FormLabel, _extends({
    component: "legend"
  }, FormLabelProps), label), /*#__PURE__*/React.createElement(Grid, _extends({
    container: true,
    spacing: 2,
    alignItems: "center"
  }, InputGridProps), before && /*#__PURE__*/React.createElement(Grid, _extends({
    item: true
  }, BeforeGridProps), before), /*#__PURE__*/React.createElement(Grid, _extends({
    item: true,
    xs: true
  }, SliderGridProps), /*#__PURE__*/React.createElement(MUISlider, _extends({}, input, {
    value: input.value || (rest.max + rest.min) / 2 || 50
  }, rest, {
    disabled: isDisabled || isReadOnly,
    onChange: function onChange(_e, value) {
      return input.onChange(value);
    }
  }))), after && /*#__PURE__*/React.createElement(Grid, _extends({
    item: true
  }, AfterGridProps), after)), text && /*#__PURE__*/React.createElement(FormHelperText, FormHelperTextProps, text))));
};

export default Slider;