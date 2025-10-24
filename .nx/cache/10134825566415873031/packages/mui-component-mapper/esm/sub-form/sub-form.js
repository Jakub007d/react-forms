import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["fields", "title", "description", "component", "TitleGridProps", "TitleProps", "DescriptionProps", "DescriptionGridProps", "ItemsGridProps"];
import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useFormApi from "@data-driven-forms/react-form-renderer/use-form-api";
var PREFIX = 'SubForm';
var classes = {
  grid: "".concat(PREFIX, "-grid")
};
var StyledGrid = styled(Grid)(function () {
  return _defineProperty({}, "&.".concat(classes.grid), {
    paddingRight: 0,
    paddingLeft: 0
  });
});

var SubForm = function SubForm(_ref2) {
  var fields = _ref2.fields,
      title = _ref2.title,
      description = _ref2.description,
      component = _ref2.component,
      TitleGridProps = _ref2.TitleGridProps,
      TitleProps = _ref2.TitleProps,
      DescriptionProps = _ref2.DescriptionProps,
      DescriptionGridProps = _ref2.DescriptionGridProps,
      ItemsGridProps = _ref2.ItemsGridProps,
      rest = _objectWithoutProperties(_ref2, _excluded);

  var _useFormApi = useFormApi(),
      renderForm = _useFormApi.renderForm;

  return /*#__PURE__*/React.createElement(StyledGrid, _extends({
    item: true,
    xs: 12,
    container: true,
    className: classes.grid
  }, rest), title && /*#__PURE__*/React.createElement(Grid, _extends({
    item: true,
    xs: 12
  }, TitleGridProps), /*#__PURE__*/React.createElement(Typography, _extends({
    variant: "h5"
  }, TitleProps), title)), description && /*#__PURE__*/React.createElement(Grid, _extends({
    item: true,
    xs: 12
  }, DescriptionGridProps), /*#__PURE__*/React.createElement(Typography, _extends({
    paragraph: true
  }, DescriptionProps), description)), /*#__PURE__*/React.createElement(Grid, _extends({
    item: true,
    xs: 12,
    container: true,
    rowSpacing: 2
  }, ItemsGridProps), renderForm(fields)));
};

export default SubForm;