import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import WizardContext from "@data-driven-forms/react-form-renderer/wizard-context";
import Grid from "@mui/material/Grid";
import Wizard from '@data-driven-forms/common/wizard';
import WizardNav from './wizard-nav';
import WizardStepButtons from './step-buttons';
var PREFIX = 'MuiWizard';
var classes = {
  wizardBody: "".concat(PREFIX, "-wizardBody")
};
var StyledWizard = styled(Grid)(function () {
  return _defineProperty({}, "& .".concat(classes.wizardBody), {
    padding: 24,
    margin: 0
  });
});

var WizardInternal = function WizardInternal(_ref2) {
  var buttonLabels = _ref2.buttonLabels,
      stepsInfo = _ref2.stepsInfo,
      ButtonContainerProps = _ref2.ButtonContainerProps,
      StepperProps = _ref2.StepperProps,
      _ref2$WizardBodyProps = _ref2.WizardBodyProps,
      WizardBodyProps = _ref2$WizardBodyProps === void 0 ? {} : _ref2$WizardBodyProps,
      WizardProps = _ref2.WizardProps,
      conditionalSubmitFlag = _ref2.conditionalSubmitFlag;

  var _useContext = useContext(WizardContext),
      formOptions = _useContext.formOptions,
      currentStep = _useContext.currentStep,
      handlePrev = _useContext.handlePrev,
      onKeyDown = _useContext.onKeyDown,
      handleNext = _useContext.handleNext,
      activeStepIndex = _useContext.activeStepIndex,
      prevSteps = _useContext.prevSteps;

  var buttonLabelsFinal = _objectSpread({
    next: 'Continue',
    submit: 'Submit',
    cancel: 'Cancel',
    back: 'Back'
  }, buttonLabels);

  return /*#__PURE__*/React.createElement(StyledWizard, _extends({
    container: true
  }, WizardProps, {
    onKeyDown: onKeyDown
  }), stepsInfo && /*#__PURE__*/React.createElement(WizardNav, {
    StepperProps: StepperProps,
    stepsInfo: stepsInfo,
    activeStepIndex: activeStepIndex
  }), /*#__PURE__*/React.createElement(Grid, _extends({
    container: true,
    spacing: 2
  }, WizardBodyProps, {
    className: clsx(classes.wizardBody, WizardBodyProps.className)
  }), currentStep.fields.map(function (item) {
    return formOptions.renderForm([item], formOptions);
  }), /*#__PURE__*/React.createElement(WizardStepButtons, _extends({}, currentStep, {
    formOptions: formOptions,
    buttonLabels: buttonLabelsFinal,
    handleNext: handleNext,
    handlePrev: handlePrev,
    disableBack: prevSteps.length === 0,
    conditionalSubmitFlag: conditionalSubmitFlag,
    ButtonContainerProps: ButtonContainerProps
  }))));
};

var MuiWizard = function MuiWizard(props) {
  return /*#__PURE__*/React.createElement(Wizard, _extends({
    Wizard: WizardInternal
  }, props));
};

export default MuiWizard;