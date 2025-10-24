import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["buttons"];
import React from 'react';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import selectNext from '@data-driven-forms/common/wizard/select-next';
import FormSpy from "@data-driven-forms/react-form-renderer/form-spy";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
var PREFIX = 'WizardStepButtons';
var classes = {
  wizardBody: "".concat(PREFIX, "-wizardBody"),
  buttons: "".concat(PREFIX, "-buttons"),
  button: "".concat(PREFIX, "-button"),
  buttonsContainer: "".concat(PREFIX, "-buttonsContainer")
};
var StyledGrid = styled(Grid)(function () {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "& .".concat(classes.wizardBody), {
    padding: 24,
    margin: 0
  }), _defineProperty(_ref, "& .".concat(classes.buttons), {
    display: 'flex',
    justifyContent: 'flex-end'
  }), _defineProperty(_ref, "& .".concat(classes.button), {
    marginRight: 16
  }), _defineProperty(_ref, "&.".concat(classes.buttonsContainer), {
    marginTop: 36
  }), _ref;
});

var NextButton = function NextButton(_ref2) {
  var nextStep = _ref2.nextStep,
      valid = _ref2.valid,
      handleNext = _ref2.handleNext,
      nextLabel = _ref2.nextLabel,
      getState = _ref2.getState,
      handleSubmit = _ref2.handleSubmit,
      submitLabel = _ref2.submitLabel,
      conditionalSubmitFlag = _ref2.conditionalSubmitFlag;
  var nextResult = nextStep ? selectNext(nextStep, getState) : nextStep;
  var progressNext = nextResult !== conditionalSubmitFlag && nextStep;
  return /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    color: "primary",
    disabled: !valid || getState().validating || getState().submitting,
    onClick: function onClick() {
      return progressNext ? handleNext(nextResult) : handleSubmit();
    }
  }, progressNext ? nextLabel : submitLabel);
};

var WizardStepButtons = function WizardStepButtons(_ref3) {
  var Buttons = _ref3.buttons,
      props = _objectWithoutProperties(_ref3, _excluded);

  if (Buttons) {
    return /*#__PURE__*/React.createElement(Buttons, _extends({
      classes: classes
    }, props));
  }

  var disableBack = props.disableBack,
      handlePrev = props.handlePrev,
      nextStep = props.nextStep,
      handleNext = props.handleNext,
      _props$buttonLabels = props.buttonLabels,
      cancel = _props$buttonLabels.cancel,
      submit = _props$buttonLabels.submit,
      back = _props$buttonLabels.back,
      next = _props$buttonLabels.next,
      formOptions = props.formOptions,
      _props$ButtonContaine = props.ButtonContainerProps,
      ButtonContainerProps = _props$ButtonContaine === void 0 ? {} : _props$ButtonContaine,
      conditionalSubmitFlag = props.conditionalSubmitFlag;
  return /*#__PURE__*/React.createElement(StyledGrid, _extends({
    container: true,
    direction: "row",
    justifyContent: "space-evenly"
  }, ButtonContainerProps, {
    className: clsx(classes.buttonsContainer, ButtonContainerProps.className)
  }), /*#__PURE__*/React.createElement(FormSpy, {
    subscription: {
      values: true,
      valid: true,
      validating: true,
      submitting: true
    }
  }, function () {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Grid, {
      item: true,
      md: 2,
      xs: 2
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: formOptions.onCancel
    }, cancel)), /*#__PURE__*/React.createElement(Grid, {
      item: true,
      md: 10,
      xs: 10,
      className: classes.buttons
    }, /*#__PURE__*/React.createElement(Button, {
      disabled: disableBack,
      onClick: handlePrev,
      className: classes.button
    }, back), /*#__PURE__*/React.createElement(NextButton, _extends({}, formOptions, {
      conditionalSubmitFlag: conditionalSubmitFlag,
      handleNext: handleNext,
      nextStep: nextStep,
      nextLabel: next,
      submitLabel: submit
    }))));
  }));
};

export default WizardStepButtons;