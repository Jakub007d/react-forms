import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import React from 'react';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
var PREFIX = 'WizardNav';
var classes = {
  stepper: "".concat(PREFIX, "-stepper")
};
var StyledStepper = styled(Stepper)(function () {
  return _defineProperty({}, "&.".concat(classes.stepper), {
    width: '100%'
  });
});

var WizardNav = function WizardNav(_ref2) {
  var _ref2$StepperProps = _ref2.StepperProps,
      StepperProps = _ref2$StepperProps === void 0 ? {} : _ref2$StepperProps,
      stepsInfo = _ref2.stepsInfo,
      activeStepIndex = _ref2.activeStepIndex;
  return /*#__PURE__*/React.createElement(StyledStepper, _extends({}, StepperProps, {
    className: clsx(classes.stepper, StepperProps.className),
    activeStep: activeStepIndex
  }), stepsInfo.map(function (_ref3, idx) {
    var title = _ref3.title,
        label = _ref3.label,
        StepLabelProps = _ref3.StepLabelProps,
        StepProps = _ref3.StepProps;
    return /*#__PURE__*/React.createElement(Step, _extends({}, StepProps, {
      key: idx
    }), /*#__PURE__*/React.createElement(StepLabel, StepLabelProps, title || label));
  }));
};

export default WizardNav;