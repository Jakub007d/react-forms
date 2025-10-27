import _extends from "@babel/runtime/helpers/extends";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _typeof from "@babel/runtime/helpers/typeof";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["fields", "isDynamic", "crossroads", "Wizard", "component", "initialState", "conditionalSubmitFlag"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useReducer, useEffect } from 'react';
import useFormApi from "@data-driven-forms/react-form-renderer/use-form-api";
import WizardContext from "@data-driven-forms/react-form-renderer/wizard-context";
import get from 'lodash/get';
import set from 'lodash/set';
import flattenDeep from 'lodash/flattenDeep';
import handleEnter from './enter-handler';
import reducer, { DYNAMIC_WIZARD_TYPES, findCurrentStep } from './reducer';
import selectNext from './select-next';
import { CONDITIONAL_SUBMIT_FLAG } from './consts';

var Wizard = function Wizard(_ref) {
  var fields = _ref.fields,
      isDynamic = _ref.isDynamic,
      crossroads = _ref.crossroads,
      Wizard = _ref.Wizard,
      component = _ref.component,
      initialState = _ref.initialState,
      _ref$conditionalSubmi = _ref.conditionalSubmitFlag,
      conditionalSubmitFlag = _ref$conditionalSubmi === void 0 ? CONDITIONAL_SUBMIT_FLAG : _ref$conditionalSubmi,
      props = _objectWithoutProperties(_ref, _excluded);

  var formOptions = useFormApi();

  var _useReducer = useReducer(reducer, _objectSpread(_objectSpread({
    activeStep: fields[0].name,
    prevSteps: [],
    activeStepIndex: 0,
    maxStepIndex: 0
  }, initialState), {}, {
    isDynamic: isDynamic || fields.some(function (_ref2) {
      var nextStep = _ref2.nextStep;
      return DYNAMIC_WIZARD_TYPES.includes(_typeof(nextStep));
    }),
    loading: true
  })),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  useEffect(function () {
    dispatch({
      type: 'finishLoading',
      payload: {
        formOptions: formOptions,
        fields: fields
      }
    });
  }, [fields]);

  if (state.loading) {
    return null;
  }

  var prepareValues = function prepareValues(values, visitedSteps, getRegisteredFields) {
    // Add the final step fields to history
    var finalRegisteredFieldsHistory = _objectSpread(_objectSpread({}, state.registeredFieldsHistory), {}, _defineProperty({}, state.activeStep, getRegisteredFields()));

    var finalObject = {}; // Find only visited fields

    flattenDeep(Object.values([].concat(_toConsumableArray(visitedSteps), [state.activeStep]).reduce(function (obj, key) {
      return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, finalRegisteredFieldsHistory[key]));
    }, {}))).forEach(function (key) {
      return set(finalObject, key, get(values, key));
    });
    return finalObject;
  };

  var onCancel = function onCancel() {
    return formOptions.onCancel(state);
  };

  var handleSubmit = function handleSubmit() {
    return formOptions.onSubmit(prepareValues(formOptions.getState().values, [].concat(_toConsumableArray(state.prevSteps), [state.activeStep]), formOptions.getRegisteredFields), formOptions, state);
  };

  var jumpToStep = function jumpToStep(index, valid) {
    return dispatch({
      type: 'jumpToStep',
      payload: {
        index: index,
        valid: valid,
        fields: fields,
        crossroads: crossroads,
        formOptions: formOptions
      }
    });
  };

  var handlePrev = function handlePrev() {
    return jumpToStep(state.activeStepIndex - 1);
  };

  var handleNext = function handleNext(nextStep) {
    return dispatch({
      type: 'handleNext',
      payload: {
        nextStep: nextStep,
        formOptions: formOptions,
        fields: fields
      }
    });
  };

  var setPrevSteps = function setPrevSteps() {
    return dispatch({
      type: 'setPrevSteps',
      payload: {
        formOptions: formOptions,
        fields: fields
      }
    });
  };

  var findCurrentStepWrapped = function findCurrentStepWrapped(step) {
    return findCurrentStep(step, fields);
  };

  var onKeyDown = function onKeyDown(e) {
    return handleEnter(e, formOptions, state.activeStep, findCurrentStepWrapped, handleNext, handleSubmit);
  };

  return /*#__PURE__*/React.createElement(WizardContext.Provider, {
    value: {
      handleNext: handleNext,
      onKeyDown: onKeyDown,
      setPrevSteps: setPrevSteps,
      currentStep: findCurrentStep(state.activeStep, fields),
      jumpToStep: jumpToStep,
      handlePrev: handlePrev,
      formOptions: _objectSpread(_objectSpread({}, formOptions), {}, {
        onCancel: onCancel,
        handleSubmit: handleSubmit
      }),
      navSchema: state.navSchema,
      activeStepIndex: state.activeStepIndex,
      maxStepIndex: state.maxStepIndex,
      isDynamic: state.isDynamic,
      crossroads: crossroads,
      prevSteps: state.prevSteps,
      selectNext: selectNext
    }
  }, /*#__PURE__*/React.createElement(Wizard, _extends({
    conditionalSubmitFlag: conditionalSubmitFlag
  }, props)));
};

export default Wizard;