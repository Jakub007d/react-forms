import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _typeof from "@babel/runtime/helpers/typeof";
var _excluded = ["inputProps"],
    _excluded2 = ["value", "options", "label", "helperText", "validateOnMount", "meta", "isSearchable", "description", "classNamePrefix", "isMulti", "placeholder", "onInputChange", "isFetching", "noOptionsMessage", "hideSelectedOptions", "closeMenuOnSelect", "required", "onChange", "onFocus", "onBlur", "FormFieldGridProps", "TextFieldProps", "inputProps", "isClearable", "isDisabled", "loadingText"],
    _excluded3 = ["input", "isRequired", "isDisabled", "isReadOnly", "disabled", "multiple", "isMulti", "isClearable", "disableClearable", "loadingMessage", "loadingText", "noOptionsMessage", "noOptionsText", "closeMenuOnSelect"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useMemo } from 'react';
import FormFieldGrid from '../form-field-grid/form-field-grid';
import { validationError } from '../validation-error/validation-error';
import DDFSelect from '@data-driven-forms/common/select';
import parseInternalValue from '@data-driven-forms/common/select/parse-internal-value';
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Autocomplete from "@mui/material/Autocomplete";
/**
 * Returns label of selected option
 * @param {Object|Array} option currently selected option
 * @param {Array<Object>} options all options avaiable
 * @returns {String}
 */

var _getOptionLabel = function getOptionLabel(option, options) {
  if (typeof option === 'undefined') {
    return '';
  }

  if (option === '') {
    return '';
  }

  if (Array.isArray(option) && option.length === 0) {
    return '';
  }

  if (_typeof(option) === 'object') {
    return option.label;
  }

  var item = options.find(function (_ref) {
    var value = _ref.value;
    return value === option;
  });
  return item && item.label || '';
};
/**
 * Function that creates correct DDF select value format
 * @param {Object|Array} option currently selected values
 * @param {Boolean} isMulti multiple select flag
 * @returns {Object|Array<Object>}
 */


export { _getOptionLabel as getOptionLabel };
export var createValue = function createValue(option, isMulti) {
  if (isMulti) {
    return Array.isArray(option) ? option.map(function (item) {
      return _typeof(item) === 'object' ? item : {
        value: item
      };
    }) : option;
  }

  return option;
};

var InternalSelect = function InternalSelect(_ref2) {
  var value = _ref2.value,
      options = _ref2.options,
      label = _ref2.label,
      helperText = _ref2.helperText,
      validateOnMount = _ref2.validateOnMount,
      meta = _ref2.meta,
      isSearchable = _ref2.isSearchable,
      description = _ref2.description,
      classNamePrefix = _ref2.classNamePrefix,
      isMulti = _ref2.isMulti,
      _ref2$placeholder = _ref2.placeholder,
      placeholder = _ref2$placeholder === void 0 ? 'Please choose' : _ref2$placeholder,
      _onInputChange = _ref2.onInputChange,
      isFetching = _ref2.isFetching,
      noOptionsMessage = _ref2.noOptionsMessage,
      hideSelectedOptions = _ref2.hideSelectedOptions,
      closeMenuOnSelect = _ref2.closeMenuOnSelect,
      required = _ref2.required,
      _onChange = _ref2.onChange,
      onFocus = _ref2.onFocus,
      onBlur = _ref2.onBlur,
      _ref2$FormFieldGridPr = _ref2.FormFieldGridProps,
      FormFieldGridProps = _ref2$FormFieldGridPr === void 0 ? {} : _ref2$FormFieldGridPr,
      _ref2$TextFieldProps = _ref2.TextFieldProps;
  _ref2$TextFieldProps = _ref2$TextFieldProps === void 0 ? {} : _ref2$TextFieldProps;

  var textFieldInputProps = _ref2$TextFieldProps.inputProps,
      TextFieldProps = _objectWithoutProperties(_ref2$TextFieldProps, _excluded),
      _ref2$inputProps = _ref2.inputProps,
      inputProps = _ref2$inputProps === void 0 ? {} : _ref2$inputProps,
      isClearable = _ref2.isClearable,
      isDisabled = _ref2.isDisabled,
      _ref2$loadingText = _ref2.loadingText,
      loadingText = _ref2$loadingText === void 0 ? 'Loading...' : _ref2$loadingText,
      rest = _objectWithoutProperties(_ref2, _excluded2);

  var invalid = validationError(meta, validateOnMount); // When isMulti is true, the "parseInternalValue" always creates new value array, we need to memoize it to not create new array instance
  // Memo is required to fix https://github.com/data-driven-forms/react-forms/issues/1366

  var internalValue = useMemo(function () {
    return parseInternalValue(value, isMulti);
  }, [value, isMulti]);
  return /*#__PURE__*/React.createElement(FormFieldGrid, FormFieldGridProps, /*#__PURE__*/React.createElement(Autocomplete, _extends({
    filterSelectedOptions: hideSelectedOptions,
    disabled: isDisabled,
    disableClearable: isClearable,
    popupIcon: isFetching ? /*#__PURE__*/React.createElement(CircularProgress, {
      size: 20,
      color: "inherit"
    }) : /*#__PURE__*/React.createElement(ArrowDropDownIcon, null),
    fullWidth: true,
    loadingText: loadingText
  }, rest, {
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React.createElement(TextField, _extends({
        onFocus: onFocus,
        onBlur: onBlur
      }, params, {
        required: required,
        error: !!invalid,
        helperText: invalid || (meta.touched || validateOnMount) && meta.warning || helperText || description,
        label: label,
        margin: "normal"
      }, TextFieldProps, {
        inputProps: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, params.inputProps), textFieldInputProps), inputProps), {}, {
          readOnly: !isSearchable,
          placeholder: !internalValue || internalValue.length === 0 ? placeholder : undefined
        })
      }));
    },
    noOptionsText: noOptionsMessage(),
    onInputChange: function onInputChange(_event, value) {
      return _onInputChange(value);
    },
    options: options,
    multiple: isMulti,
    getOptionLabel: function getOptionLabel(option) {
      return _getOptionLabel(option, options);
    },
    value: typeof internalValue === 'undefined' ? null : internalValue,
    onChange: function onChange(_event, option) {
      return _onChange(createValue(option, isMulti));
    },
    loading: isFetching
  })));
};

var Select = function Select(props) {
  var _useFieldApi = useFieldApi(props),
      input = _useFieldApi.input,
      isRequired = _useFieldApi.isRequired,
      isDisabled = _useFieldApi.isDisabled,
      isReadOnly = _useFieldApi.isReadOnly,
      disabled = _useFieldApi.disabled,
      multiple = _useFieldApi.multiple,
      isMulti = _useFieldApi.isMulti,
      isClearable = _useFieldApi.isClearable,
      disableClearable = _useFieldApi.disableClearable,
      loadingMessage = _useFieldApi.loadingMessage,
      loadingText = _useFieldApi.loadingText,
      noOptionsMessage = _useFieldApi.noOptionsMessage,
      noOptionsText = _useFieldApi.noOptionsText,
      closeMenuOnSelect = _useFieldApi.closeMenuOnSelect,
      rest = _objectWithoutProperties(_useFieldApi, _excluded3);

  return /*#__PURE__*/React.createElement(DDFSelect, _extends({}, input, {
    isMulti: multiple || isMulti,
    required: isRequired,
    disabled: isDisabled || isReadOnly || disabled,
    disableClearable: !isClearable || disableClearable,
    loadingText: loadingMessage || loadingText,
    noOptionsMessage: noOptionsMessage || noOptionsText
  }, rest, {
    SelectComponent: InternalSelect
  }));
};

export default Select;