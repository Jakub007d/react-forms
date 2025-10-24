import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["children", "className"];
import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import clsx from 'clsx';
var PREFIX = 'FormFieldGrid';
var classes = {
  grid: "".concat(PREFIX, "-grid")
};
var StyledGrid = styled(Grid)(_defineProperty({}, "&.".concat(classes.grid), {
  position: 'relative'
}));

var FormFieldGrid = function FormFieldGrid(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledGrid, _extends({
    xs: 12,
    item: true,
    className: clsx(classes.grid, className)
  }, props), children);
};

export default FormFieldGrid;