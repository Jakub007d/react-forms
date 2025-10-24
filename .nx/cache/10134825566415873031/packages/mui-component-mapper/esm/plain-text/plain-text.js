import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["label", "name", "component", "element", "variant", "gutterBottom"];
import React from 'react';
import Typography from "@mui/material/Typography";

var PlainText = function PlainText(_ref) {
  var label = _ref.label,
      name = _ref.name,
      component = _ref.component,
      element = _ref.element,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'body1' : _ref$variant,
      _ref$gutterBottom = _ref.gutterBottom,
      gutterBottom = _ref$gutterBottom === void 0 ? true : _ref$gutterBottom,
      props = _objectWithoutProperties(_ref, _excluded);

  return typeof label === 'string' ? label.split('\n').map(function (paragraph, index) {
    return /*#__PURE__*/React.createElement(Typography, _extends({
      key: "".concat(index, "-").concat(name),
      variant: variant,
      gutterBottom: gutterBottom
    }, props, element && {
      component: element
    }), paragraph);
  }) : /*#__PURE__*/React.createElement(Typography, _extends({}, props, element && {
    component: element
  }), label);
};

export default PlainText;