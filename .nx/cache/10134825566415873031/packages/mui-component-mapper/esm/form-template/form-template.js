import _typeof from "@babel/runtime/helpers/typeof";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "GridContainerProps", "GridProps"],
    _excluded2 = ["children", "GridProps"],
    _excluded3 = ["children", "GridProps"],
    _excluded4 = ["children", "GridProps"],
    _excluded5 = ["label", "variant", "children", "buttonType"],
    _excluded6 = ["title", "description", "TitleProps", "className"];
import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import MUIButton from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import FormTemplate from '@data-driven-forms/common/form-template';
import clsx from 'clsx';
var PREFIX = 'MuiFormTemplate';
var classes = {
  buttonGroup: "".concat(PREFIX, "-buttonGroup")
};
var StyledButtonGroup = styled(Grid)(function () {
  return _defineProperty({}, "& .".concat(classes.buttonGroup), {
    display: 'flex',
    justifyContent: 'flex-end',
    '&>button:not(last-child)': {
      marginLeft: 8
    }
  });
});

var Form = function Form(_ref2) {
  var children = _ref2.children,
      GridContainerProps = _ref2.GridContainerProps,
      GridProps = _ref2.GridProps,
      props = _objectWithoutProperties(_ref2, _excluded);

  return /*#__PURE__*/React.createElement(Grid, _extends({
    item: true,
    xs: 12
  }, GridProps), /*#__PURE__*/React.createElement("form", _extends({
    noValidate: true
  }, props), /*#__PURE__*/React.createElement(Grid, _extends({
    container: true,
    rowSpacing: 2,
    item: true,
    xs: 12
  }, GridContainerProps), children)));
};

var Description = function Description(_ref3) {
  var children = _ref3.children,
      GridProps = _ref3.GridProps,
      props = _objectWithoutProperties(_ref3, _excluded2);

  return /*#__PURE__*/React.createElement(Grid, _extends({
    item: true,
    xs: 12
  }, GridProps), /*#__PURE__*/React.createElement(Typography, _extends({
    variant: "body1",
    gutterBottom: true
  }, props), children));
};

var Title = function Title(_ref4) {
  var children = _ref4.children,
      GridProps = _ref4.GridProps,
      props = _objectWithoutProperties(_ref4, _excluded3);

  return /*#__PURE__*/React.createElement(Grid, _extends({
    item: true,
    xs: 12
  }, GridProps), /*#__PURE__*/React.createElement(Typography, _extends({
    variant: "h3",
    gutterBottom: true
  }, props), children));
};

var ButtonGroup = function ButtonGroup(_ref5) {
  var children = _ref5.children,
      GridProps = _ref5.GridProps,
      props = _objectWithoutProperties(_ref5, _excluded4);

  return /*#__PURE__*/React.createElement(StyledButtonGroup, _extends({
    item: true,
    xs: 12
  }, GridProps), /*#__PURE__*/React.createElement("div", _extends({
    className: classes.buttonGroup
  }, props), children));
};

var Button = function Button(_ref6) {
  var label = _ref6.label,
      variant = _ref6.variant,
      children = _ref6.children,
      buttonType = _ref6.buttonType,
      props = _objectWithoutProperties(_ref6, _excluded5);

  return /*#__PURE__*/React.createElement(MUIButton, _extends({
    color: variant,
    variant: "contained"
  }, props), label || children);
};

var StyledAlert = styled(Alert)(function () {
  return {
    '& .alert': {
      width: '100%',
      margin: 8
    }
  };
});
export var FormError = function FormError(_ref7) {
  var formError = _ref7.formError,
      alertProps = _ref7.alertProps;

  if (_typeof(formError) === 'object' && (formError.title || formError.title)) {
    var title = formError.title,
        description = formError.description,
        TitleProps = formError.TitleProps,
        className = formError.className,
        props = _objectWithoutProperties(formError, _excluded6);

    return /*#__PURE__*/React.createElement(StyledAlert, _extends({
      severity: "error"
    }, props, alertProps, {
      className: clsx('alert', alertProps === null || alertProps === void 0 ? void 0 : alertProps.className, className)
    }), title && /*#__PURE__*/React.createElement(AlertTitle, TitleProps, title), description);
  }

  if (formError) {
    return /*#__PURE__*/React.createElement(StyledAlert, _extends({
      severity: "error"
    }, alertProps, {
      className: clsx('alert', alertProps === null || alertProps === void 0 ? void 0 : alertProps.className)
    }), formError);
  }

  return null;
};

var MuiFormTemplate = function MuiFormTemplate(props) {
  return /*#__PURE__*/React.createElement(FormTemplate, _extends({
    BeforeError: FormError,
    FormWrapper: Form,
    Button: Button,
    ButtonGroup: ButtonGroup,
    Title: Title,
    Description: Description
  }, props));
};

export default MuiFormTemplate;