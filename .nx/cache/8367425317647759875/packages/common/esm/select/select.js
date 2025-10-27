import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["invalid", "classNamePrefix", "simpleValue", "isMulti", "pluckSingleValue", "options", "loadOptions", "loadingMessage", "placeholder", "loadingProps", "selectVariant", "updatingMessage", "noOptionsMessage", "value", "onChange", "loadOptionsChangeCounter", "SelectComponent", "noValueUpdates", "optionsTransformer", "compareValues", "isSearchable", "isClearable"];

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import clsx from 'clsx';
import useSelect from '../use-select/use-select';
import deepEqual from './deep-equal';

var Select = function Select(_ref) {
  var _ref$invalid = _ref.invalid,
      invalid = _ref$invalid === void 0 ? false : _ref$invalid,
      classNamePrefix = _ref.classNamePrefix,
      _ref$simpleValue = _ref.simpleValue,
      simpleValue = _ref$simpleValue === void 0 ? true : _ref$simpleValue,
      isMulti = _ref.isMulti,
      _ref$pluckSingleValue = _ref.pluckSingleValue,
      pluckSingleValue = _ref$pluckSingleValue === void 0 ? true : _ref$pluckSingleValue,
      propsOptions = _ref.options,
      loadOptions = _ref.loadOptions,
      loadingMessage = _ref.loadingMessage,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Choose...' : _ref$placeholder,
      loadingProps = _ref.loadingProps,
      selectVariant = _ref.selectVariant,
      updatingMessage = _ref.updatingMessage,
      noOptionsMessage = _ref.noOptionsMessage,
      value = _ref.value,
      onChange = _ref.onChange,
      loadOptionsChangeCounter = _ref.loadOptionsChangeCounter,
      SelectComponent = _ref.SelectComponent,
      noValueUpdates = _ref.noValueUpdates,
      optionsTransformer = _ref.optionsTransformer,
      _ref$compareValues = _ref.compareValues,
      compareValues = _ref$compareValues === void 0 ? deepEqual : _ref$compareValues,
      _ref$isSearchable = _ref.isSearchable,
      isSearchable = _ref$isSearchable === void 0 ? false : _ref$isSearchable,
      _ref$isClearable = _ref.isClearable,
      isClearable = _ref$isClearable === void 0 ? false : _ref$isClearable,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useSelect = useSelect({
    loadOptions: loadOptions,
    optionsTransformer: optionsTransformer,
    options: propsOptions,
    noValueUpdates: noValueUpdates,
    onChange: onChange,
    value: value,
    loadOptionsChangeCounter: loadOptionsChangeCounter,
    isSearchable: isSearchable,
    pluckSingleValue: pluckSingleValue,
    isMulti: isMulti,
    simpleValue: simpleValue,
    compareValues: compareValues
  }),
      state = _useSelect.state,
      selectValue = _useSelect.value,
      selectOnChange = _useSelect.onChange,
      onInputChange = _useSelect.onInputChange,
      isFetching = _useSelect.isFetching;

  var renderNoOptionsMessage = function renderNoOptionsMessage() {
    return Object.values(state.promises).some(function (value) {
      return value;
    }) ? function () {
      return updatingMessage;
    } : function () {
      return noOptionsMessage;
    };
  }; // When isMulti is true, the "getSelect" always creates new value array, we need to memoize it to not create new array instance
  // Memo is required to fix https://github.com/data-driven-forms/react-forms/issues/1366
  // Keeping prev values in ref and calling lodash.isEqual is not reliable as it ca return false positive beucase it only has true/false result.
  // If we have multiple updates during one reconciliation pahse the search input reset will trigger on initial key stroke
  // JSON.stringify is expensive but seems to be working better.


  var selectValueInternal = useMemo(function () {
    return selectValue;
  }, [JSON.stringify(selectValue)]);

  if (state.isLoading) {
    return /*#__PURE__*/React.createElement(SelectComponent, _extends({
      isClearable: isClearable,
      isSearchable: isSearchable
    }, props, {
      classNamePrefix: classNamePrefix,
      isDisabled: true,
      isFetching: true,
      placeholder: placeholder,
      loadingMessage: loadingMessage,
      options: state.options,
      onChange: function onChange() {},
      onInputChange: onInputChange,
      value: selectValueInternal,
      isMulti: isMulti
    }, loadingProps, {
      noOptionsMessage: renderNoOptionsMessage()
    }, state.originalOptions && {
      originalOptions: state.originalOptions
    }));
  }

  return /*#__PURE__*/React.createElement(SelectComponent, _extends({
    className: clsx(classNamePrefix, {
      'has-error': invalid
    })
  }, props, {
    isSearchable: isSearchable,
    isClearable: isClearable,
    placeholder: placeholder,
    isDisabled: props.isDisabled || props.isReadOnly,
    options: state.options,
    classNamePrefix: classNamePrefix,
    isMulti: isMulti,
    value: selectValueInternal,
    onChange: selectOnChange,
    onInputChange: onInputChange,
    isFetching: isFetching,
    noOptionsMessage: renderNoOptionsMessage(),
    hideSelectedOptions: false,
    closeMenuOnSelect: !isMulti
  }, state.originalOptions && {
    originalOptions: state.originalOptions
  }));
};

export default Select;