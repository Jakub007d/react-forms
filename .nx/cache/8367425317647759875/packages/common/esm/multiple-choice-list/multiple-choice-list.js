import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["input", "Checkbox"],
    _excluded2 = ["Wrapper", "Checkbox", "label", "validateOnMount", "isRequired", "helperText", "meta", "input", "options", "isDisabled", "isReadOnly", "description"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";

var SingleCheckbox = function SingleCheckbox(props) {
  var _useFieldApi = useFieldApi(_objectSpread(_objectSpread({}, props), {}, {
    type: 'checkbox'
  })),
      input = _useFieldApi.input,
      Checkbox = _useFieldApi.Checkbox,
      rest = _objectWithoutProperties(_useFieldApi, _excluded);

  return /*#__PURE__*/React.createElement(Checkbox, _extends({}, input, rest));
};

var MultipleChoiceList = function MultipleChoiceList(props) {
  var _useFieldApi2 = useFieldApi(props),
      Wrapper = _useFieldApi2.Wrapper,
      Checkbox = _useFieldApi2.Checkbox,
      label = _useFieldApi2.label,
      validateOnMount = _useFieldApi2.validateOnMount,
      isRequired = _useFieldApi2.isRequired,
      helperText = _useFieldApi2.helperText,
      meta = _useFieldApi2.meta,
      input = _useFieldApi2.input,
      options = _useFieldApi2.options,
      isDisabled = _useFieldApi2.isDisabled,
      isReadOnly = _useFieldApi2.isReadOnly,
      description = _useFieldApi2.description,
      rest = _objectWithoutProperties(_useFieldApi2, _excluded2);

  var error = meta.error,
      touched = meta.touched,
      submitError = meta.submitError;
  var showError = Boolean((touched || validateOnMount) && (error || submitError));
  return /*#__PURE__*/React.createElement(Wrapper, {
    showError: showError,
    isRequired: isRequired,
    label: label,
    helperText: helperText,
    meta: meta,
    description: description,
    rest: rest,
    error: error || submitError,
    name: input.name
  }, options.map(function (option) {
    return /*#__PURE__*/React.createElement(SingleCheckbox, _extends({
      Checkbox: Checkbox,
      "aria-label": option['aria-label'] || option.label
    }, rest, {
      value: option.value,
      label: option.label,
      name: input.name,
      option: option,
      id: "".concat(rest.id || input.name, "-").concat(option.value),
      key: "".concat(rest.id || input.name, "-").concat(option.value),
      isDisabled: isDisabled || isReadOnly
    }));
  }));
};

export default MultipleChoiceList;