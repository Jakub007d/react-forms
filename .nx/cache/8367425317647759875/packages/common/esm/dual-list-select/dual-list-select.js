import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
var _excluded = ["DualListSelect"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useReducer } from 'react';
import _isEqual from 'lodash/isEqual';
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";
import reducer, { initialState } from './reducer';

var getOptionsGroup = function getOptionsGroup(value, lastClicked, options) {
  var lastIndex = options.map(function (_ref) {
    var value = _ref.value;
    return value.toString();
  }).indexOf(lastClicked.toString());
  var currentIndex = options.map(function (_ref2) {
    var value = _ref2.value;
    return value.toString();
  }).indexOf(value);
  var startIndex = Math.min(lastIndex, currentIndex);
  var endIndex = Math.max(lastIndex, currentIndex) + 1;
  return _toConsumableArray(options.slice(startIndex, endIndex).map(function (_ref3) {
    var value = _ref3.value;
    return value.toString();
  }));
};

var handleOptionClick = function handleOptionClick(event, value, options, isRight, dispatch, state) {
  var selectedKey = isRight ? 'selectedLeftValues' : 'selectedRightValues';
  var lastKey = isRight ? 'lastLeftClicked' : 'lastRightClicked';

  if (event.shiftKey && state[lastKey]) {
    dispatch({
      type: 'setSelectedValue',
      value: value,
      values: getOptionsGroup(value, state[lastKey], options),
      isRight: isRight
    });
  } else if (event.ctrlKey && state[lastKey]) {
    var selectedValues = state[selectedKey].includes(value) ? state[selectedKey].filter(function (item) {
      return item !== value;
    }) : [].concat(_toConsumableArray(state[selectedKey]), [value]);
    dispatch({
      type: 'setSelectedValue',
      value: value,
      values: selectedValues,
      isRight: isRight
    });
  } else {
    dispatch({
      type: 'setSelectedValue',
      value: value,
      values: [value],
      isRight: isRight
    });
  }
};

var DualListSelectCommon = function DualListSelectCommon(props) {
  var _useReducer = useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useFieldApi = useFieldApi(_objectSpread(_objectSpread({}, props), {}, {
    FieldProps: {
      isEqual: function isEqual(current, initial) {
        return _isEqual(_toConsumableArray(current || []).sort(), _toConsumableArray(initial || []).sort());
      }
    }
  })),
      DualListSelect = _useFieldApi.DualListSelect,
      rest = _objectWithoutProperties(_useFieldApi, _excluded);

  var leftValues = rest.options.filter(function (option) {
    return !rest.input.value.includes(option.value) && option.label.toLowerCase().includes(state.filterOptions.toLowerCase());
  }).sort(function (a, b) {
    return state.sortLeftDesc ? a.label.localeCompare(b.label) : b.label.localeCompare(a.label);
  });
  var rightValues = rest.options.filter(function (option) {
    return rest.input.value.includes(option.value) && option.label.toLowerCase().includes(state.filterValue.toLowerCase());
  }).sort(function (a, b) {
    return state.sortRightDesc ? a.label.localeCompare(b.label) : b.label.localeCompare(a.label);
  });

  var handleOptionsClick = function handleOptionsClick(event, value) {
    return handleOptionClick(event, value, leftValues, true, dispatch, state);
  };

  var handleValuesClick = function handleValuesClick(event, value) {
    return handleOptionClick(event, value, rightValues, false, dispatch, state);
  };

  var handleMoveRight = function handleMoveRight() {
    rest.input.onChange([].concat(_toConsumableArray(rest.input.value), _toConsumableArray(state.selectedLeftValues)));
    dispatch({
      type: 'clearLeftOptions'
    });
  };

  var handleMoveLeft = function handleMoveLeft() {
    rest.input.onChange(rest.input.value.filter(function (value) {
      return !state.selectedRightValues.includes(value);
    }));
    dispatch({
      type: 'clearRightValues'
    });
  };

  var sortOptions = function sortOptions() {
    return dispatch({
      type: 'sortOptions'
    });
  };

  var sortValues = function sortValues() {
    return dispatch({
      type: 'sortValue'
    });
  };

  var filterOptions = function filterOptions(value) {
    return dispatch({
      type: 'setFilterOptions',
      value: value
    });
  };

  var filterValues = function filterValues(value) {
    return dispatch({
      type: 'setFilterValue',
      value: value
    });
  };

  var handleClearLeftValues = function handleClearLeftValues() {
    dispatch({
      type: 'clearLeftValues'
    });
    rest.input.onChange([].concat(_toConsumableArray(rest.input.value), _toConsumableArray(leftValues.map(function (_ref4) {
      var value = _ref4.value;
      return value;
    }))));
  };

  var handleClearRightValues = function handleClearRightValues() {
    dispatch({
      type: 'clearRightValues'
    });
    rest.input.onChange(_toConsumableArray(rest.input.value.filter(function (val) {
      return !rightValues.find(function (_ref5) {
        var value = _ref5.value;
        return val === value;
      });
    })));
  };

  return /*#__PURE__*/React.createElement(DualListSelect, _extends({}, rest, {
    leftValues: leftValues,
    rightValues: rightValues,
    handleOptionsClick: handleOptionsClick,
    handleValuesClick: handleValuesClick,
    handleMoveRight: handleMoveRight,
    handleMoveLeft: handleMoveLeft,
    sortOptions: sortOptions,
    sortValues: sortValues,
    filterOptions: filterOptions,
    filterValues: filterValues,
    handleClearLeftValues: handleClearLeftValues,
    handleClearRightValues: handleClearRightValues,
    state: state
  }));
};

export default DualListSelectCommon;