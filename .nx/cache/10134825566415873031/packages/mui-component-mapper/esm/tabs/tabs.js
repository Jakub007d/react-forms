import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useState } from 'react';
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import FormFieldGrid from '../form-field-grid';
import useFormApi from "@data-driven-forms/react-form-renderer/use-form-api";

var FormTabs = function FormTabs(_ref) {
  var fields = _ref.fields,
      _ref$AppBarProps = _ref.AppBarProps,
      AppBarProps = _ref$AppBarProps === void 0 ? {} : _ref$AppBarProps,
      _ref$TabsProps = _ref.TabsProps,
      TabsProps = _ref$TabsProps === void 0 ? {} : _ref$TabsProps,
      _ref$TabProps = _ref.TabProps,
      TabProps = _ref$TabProps === void 0 ? {} : _ref$TabProps,
      _ref$FormFieldGridPro = _ref.FormFieldGridProps,
      FormFieldGridProps = _ref$FormFieldGridPro === void 0 ? {} : _ref$FormFieldGridPro,
      _ref$GridItemProps = _ref.GridItemProps,
      GridItemProps = _ref$GridItemProps === void 0 ? {} : _ref$GridItemProps;
  var formOptions = useFormApi();

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  return /*#__PURE__*/React.createElement(FormFieldGrid, _extends({
    container: true
  }, FormFieldGridProps), /*#__PURE__*/React.createElement(AppBar, _extends({
    position: "static"
  }, AppBarProps), /*#__PURE__*/React.createElement(Tabs, _extends({
    textColor: "inherit",
    value: activeTab,
    onChange: function onChange(_e, tabIndex) {
      return setActiveTab(tabIndex);
    }
  }, TabsProps), fields.map(function (_ref2) {
    var title = _ref2.title,
        name = _ref2.name;
    return /*#__PURE__*/React.createElement(Tab, _extends({
      key: name,
      label: title
    }, TabProps));
  }))), fields.map(function (_ref3, index) {
    var fields = _ref3.fields,
        name = _ref3.name;
    return /*#__PURE__*/React.createElement(Grid, _extends({
      key: name || index,
      container: true,
      item: true,
      xs: 12,
      rowSpacing: 2,
      sx: _objectSpread({
        mt: 1
      }, index !== activeTab && {
        display: 'none'
      })
    }, GridItemProps), formOptions.renderForm(fields));
  }));
};

export default FormTabs;
/*
        {fields.map(({ fields }, index) =>
          index === activeTab ? (
            formOptions.renderForm(fields)
          ) : (
            <Grid container item xs={12} sx={{ display: 'none' }}>
              {formOptions.renderForm(fields)}
            </Grid>
          )
        )}
        */