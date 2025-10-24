import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SortIcon from '@mui/icons-material/ArrowUpward';
import DualListSelectCommon from '@data-driven-forms/common/dual-list-select';
import FormFieldGrid from '../form-field-grid/form-field-grid';
import { validationError } from '../validation-error/validation-error';
var PREFIX = 'DualListSelectWrapper';
var classes = {
  allToLeftIcon: "".concat(PREFIX, "-allToLeftIcon"),
  upsideDown: "".concat(PREFIX, "-upsideDown"),
  list: "".concat(PREFIX, "-list"),
  button: "".concat(PREFIX, "-button"),
  buttonsGrid: "".concat(PREFIX, "-buttonsGrid"),
  filter: "".concat(PREFIX, "-filter"),
  toolbar: "".concat(PREFIX, "-toolbar")
};
var StyledDualListSelect = styled(FormFieldGrid)(function (_ref) {
  var _ref2;

  var theme = _ref.theme;
  return _ref2 = {}, _defineProperty(_ref2, "& .".concat(classes.allToLeftIcon), {
    transform: 'scaleX(-1)'
  }), _defineProperty(_ref2, "& .".concat(classes.upsideDown), {
    transform: 'scaleY(-1)'
  }), _defineProperty(_ref2, "& .".concat(classes.list), {
    height: 300,
    overflow: 'auto'
  }), _defineProperty(_ref2, "& .".concat(classes.button), {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(0.5, 0)
  }), _defineProperty(_ref2, "& .".concat(classes.buttonsGrid), {
    height: '100%',
    alignContent: 'center'
  }), _defineProperty(_ref2, "& .".concat(classes.filter), {
    width: '100%'
  }), _defineProperty(_ref2, "& .".concat(classes.toolbar), {
    paddingLeft: 16,
    paddingRight: 16
  }), _ref2;
});

var ListInternal = function ListInternal(_ref3) {
  var _ref3$value = _ref3.value,
      value = _ref3$value === void 0 ? [] : _ref3$value,
      optionClick = _ref3.optionClick,
      noOptionsTitle = _ref3.noOptionsTitle,
      filterValue = _ref3.filterValue,
      filterValueText = _ref3.filterValueText,
      selectedValues = _ref3.selectedValues,
      _ref3$ListProps = _ref3.ListProps,
      ListProps = _ref3$ListProps === void 0 ? {} : _ref3$ListProps,
      ListItemProps = _ref3.ListItemProps,
      ListItemIconProps = _ref3.ListItemIconProps,
      ListItemTextProps = _ref3.ListItemTextProps,
      ListItemSecondaryActionProps = _ref3.ListItemSecondaryActionProps,
      checkboxVariant = _ref3.checkboxVariant,
      PaperProps = _ref3.PaperProps,
      LeftPaperProps = _ref3.LeftPaperProps;
  return /*#__PURE__*/React.createElement(Paper, _extends({}, PaperProps, LeftPaperProps, {
    className: clsx(PaperProps && PaperProps.className, LeftPaperProps && LeftPaperProps.className)
  }), /*#__PURE__*/React.createElement(List, _extends({
    component: "div",
    role: "list",
    dense: true
  }, ListProps, {
    className: clsx(classes.list, ListProps.className)
  }), value.length < 1 && /*#__PURE__*/React.createElement(ListItem, _extends({
    button: true,
    disabled: true
  }, ListItemProps), /*#__PURE__*/React.createElement(ListItemText, {
    primary: filterValue ? filterValueText : noOptionsTitle
  })), value.length > 0 && value.map(function (_ref4) {
    var value = _ref4.value,
        label = _ref4.label,
        icon = _ref4.icon,
        isCheckbox = _ref4.isCheckbox,
        secondaryActions = _ref4.secondaryActions,
        ListItemPropsItem = _ref4.ListItemProps,
        ListItemIconPropsItem = _ref4.ListItemIconProps,
        ListItemTextPropsItem = _ref4.ListItemTextProps,
        ListItemSecondaryActionPropsItem = _ref4.ListItemSecondaryActionProps;
    return /*#__PURE__*/React.createElement(ListItem, _extends({
      button: true,
      key: value,
      selected: selectedValues.includes(value),
      onClick: function onClick(e) {
        return optionClick(isCheckbox || checkboxVariant ? _objectSpread(_objectSpread({}, e), {}, {
          ctrlKey: true
        }) : e, value);
      }
    }, ListItemProps, ListItemPropsItem), (icon || isCheckbox || checkboxVariant) && /*#__PURE__*/React.createElement(ListItemIcon, _extends({}, ListItemIconProps, ListItemIconPropsItem), isCheckbox || checkboxVariant ? /*#__PURE__*/React.createElement(Checkbox, {
      edge: "start",
      checked: selectedValues.includes(value),
      tabIndex: -1,
      disableRipple: true
    }) : icon), /*#__PURE__*/React.createElement(ListItemText, _extends({
      primary: label
    }, ListItemTextProps, ListItemTextPropsItem)), secondaryActions && /*#__PURE__*/React.createElement(ListItemSecondaryAction, _extends({}, ListItemSecondaryActionProps, ListItemSecondaryActionPropsItem), secondaryActions));
  })));
};

var ToolbarInternal = function ToolbarInternal(_ref5) {
  var ToolbarProps = _ref5.ToolbarProps,
      LeftToolbarProps = _ref5.LeftToolbarProps,
      filterOptions = _ref5.filterOptions,
      filterOptionsTitle = _ref5.filterOptionsTitle,
      FilterFieldProps = _ref5.FilterFieldProps,
      sortOptions = _ref5.sortOptions,
      SortIconButtonProps = _ref5.SortIconButtonProps,
      SortIconProps = _ref5.SortIconProps,
      LeftSortIconProps = _ref5.LeftSortIconProps,
      LeftFilterFieldProps = _ref5.LeftFilterFieldProps,
      LeftSortIconButtonProps = _ref5.LeftSortIconButtonProps,
      filter = _ref5.filter,
      sortDesc = _ref5.sortDesc,
      isValue = _ref5.isValue;
  return /*#__PURE__*/React.createElement(Toolbar, _extends({
    variant: "dense"
  }, ToolbarProps, LeftToolbarProps, {
    className: clsx(classes.toolbar, ToolbarProps && ToolbarProps.className, LeftToolbarProps && LeftToolbarProps.className)
  }), /*#__PURE__*/React.createElement(TextField, _extends({
    edge: "start",
    "aria-label": isValue ? 'value-search' : 'options-search',
    label: filterOptionsTitle,
    onChange: function onChange(_ref6) {
      var value = _ref6.target.value;
      return filterOptions(value);
    },
    value: filter,
    type: "search"
  }, FilterFieldProps, LeftFilterFieldProps, {
    className: clsx(classes.filter, FilterFieldProps && FilterFieldProps.className, LeftFilterFieldProps && LeftFilterFieldProps.className)
  })), /*#__PURE__*/React.createElement(IconButton, _extends({
    "aria-label": isValue ? 'sort value' : 'sort options',
    edge: "end",
    onClick: sortOptions,
    color: "inherit"
  }, SortIconButtonProps, LeftSortIconButtonProps, {
    size: "large"
  }), /*#__PURE__*/React.createElement(SortIcon, _extends({}, SortIconProps, LeftSortIconProps, {
    className: clsx(!sortDesc && classes.upsideDown, SortIconProps && SortIconProps.className, LeftSortIconProps && LeftSortIconProps.className)
  }))));
};

var DualListSelect = function DualListSelect(_ref7) {
  var handleOptionsClick = _ref7.handleOptionsClick,
      rightValues = _ref7.rightValues,
      _ref7$noValueTitle = _ref7.noValueTitle,
      noValueTitle = _ref7$noValueTitle === void 0 ? 'No selected' : _ref7$noValueTitle,
      _ref7$filterValueText = _ref7.filterValueText,
      filterValueText = _ref7$filterValueText === void 0 ? 'Remove your filter to see all selected' : _ref7$filterValueText,
      leftValues = _ref7.leftValues,
      _ref7$noOptionsTitle = _ref7.noOptionsTitle,
      noOptionsTitle = _ref7$noOptionsTitle === void 0 ? 'No available options' : _ref7$noOptionsTitle,
      state = _ref7.state,
      _ref7$filterOptionsTe = _ref7.filterOptionsText,
      filterOptionsText = _ref7$filterOptionsTe === void 0 ? 'Remove your filter to see all options' : _ref7$filterOptionsTe,
      handleValuesClick = _ref7.handleValuesClick,
      handleMoveRight = _ref7.handleMoveRight,
      _ref7$moveRightTitle = _ref7.moveRightTitle,
      moveRightTitle = _ref7$moveRightTitle === void 0 ? 'Move selected to right' : _ref7$moveRightTitle,
      handleClearLeftValues = _ref7.handleClearLeftValues,
      _ref7$moveAllRightTit = _ref7.moveAllRightTitle,
      moveAllRightTitle = _ref7$moveAllRightTit === void 0 ? 'Move all to right' : _ref7$moveAllRightTit,
      handleClearRightValues = _ref7.handleClearRightValues,
      _ref7$moveAllLeftTitl = _ref7.moveAllLeftTitle,
      moveAllLeftTitle = _ref7$moveAllLeftTitl === void 0 ? 'Move all to left' : _ref7$moveAllLeftTitl,
      handleMoveLeft = _ref7.handleMoveLeft,
      _ref7$moveLeftTitle = _ref7.moveLeftTitle,
      moveLeftTitle = _ref7$moveLeftTitle === void 0 ? 'Move selected to left' : _ref7$moveLeftTitle,
      _ref7$allToRight = _ref7.allToRight,
      allToRight = _ref7$allToRight === void 0 ? true : _ref7$allToRight,
      _ref7$allToLeft = _ref7.allToLeft,
      allToLeft = _ref7$allToLeft === void 0 ? true : _ref7$allToLeft,
      checkboxVariant = _ref7.checkboxVariant,
      isRequired = _ref7.isRequired,
      meta = _ref7.meta,
      validateOnMount = _ref7.validateOnMount,
      label = _ref7.label,
      helperText = _ref7.helperText,
      description = _ref7.description,
      _ref7$filterOptionsTi = _ref7.filterOptionsTitle,
      filterOptionsTitle = _ref7$filterOptionsTi === void 0 ? 'Filter options' : _ref7$filterOptionsTi,
      _ref7$leftTitle = _ref7.leftTitle,
      leftTitle = _ref7$leftTitle === void 0 ? 'Options' : _ref7$leftTitle,
      filterOptions = _ref7.filterOptions,
      sortOptions = _ref7.sortOptions,
      sortValues = _ref7.sortValues,
      _ref7$filterValueTitl = _ref7.filterValueTitle,
      filterValueTitle = _ref7$filterValueTitl === void 0 ? 'Filter selected value' : _ref7$filterValueTitl,
      filterValues = _ref7.filterValues,
      _ref7$rightTitle = _ref7.rightTitle,
      rightTitle = _ref7$rightTitle === void 0 ? 'Selected' : _ref7$rightTitle,
      _ref7$isFilterable = _ref7.isFilterable,
      isFilterable = _ref7$isFilterable === void 0 ? true : _ref7$isFilterable,
      FormFieldGridProps = _ref7.FormFieldGridProps,
      InternalGridProps = _ref7.InternalGridProps,
      ListGridProps = _ref7.ListGridProps,
      LeftListGridProps = _ref7.LeftListGridProps,
      ListProps = _ref7.ListProps,
      LeftListProps = _ref7.LeftListProps,
      ButtonsGridProps = _ref7.ButtonsGridProps,
      ButtonsInternalGridProps = _ref7.ButtonsInternalGridProps,
      ButtonGridProps = _ref7.ButtonGridProps,
      ToRightGridProps = _ref7.ToRightGridProps,
      IconButtonProps = _ref7.IconButtonProps,
      ToRightIconButtonProps = _ref7.ToRightIconButtonProps,
      AllToRightGridProps = _ref7.AllToRightGridProps,
      AllToRightIconButtonProps = _ref7.AllToRightIconButtonProps,
      AllToLeftGridProps = _ref7.AllToLeftGridProps,
      AllToLeftIconButtonProps = _ref7.AllToLeftIconButtonProps,
      ToLeftGridProps = _ref7.ToLeftGridProps,
      ToLeftIconButtonProps = _ref7.ToLeftIconButtonProps,
      RightListGridProps = _ref7.RightListGridProps,
      RightListProps = _ref7.RightListProps,
      ListItemProps = _ref7.ListItemProps,
      ListItemIconProps = _ref7.ListItemIconProps,
      ListItemTextProps = _ref7.ListItemTextProps,
      ListItemSecondaryActionProps = _ref7.ListItemSecondaryActionProps,
      LeftListItemProps = _ref7.LeftListItemProps,
      LeftListItemIconProps = _ref7.LeftListItemIconProps,
      LeftItemTextProps = _ref7.LeftItemTextProps,
      LeftItemSecondaryActionProps = _ref7.LeftItemSecondaryActionProps,
      RightListItemProps = _ref7.RightListItemProps,
      RightListItemIconProps = _ref7.RightListItemIconProps,
      RightItemTextProps = _ref7.RightItemTextProps,
      RightItemSecondaryActionProps = _ref7.RightItemSecondaryActionProps,
      FormControlProps = _ref7.FormControlProps,
      FormLabelProps = _ref7.FormLabelProps,
      FormHelperTextProps = _ref7.FormHelperTextProps,
      TitleProps = _ref7.TitleProps,
      ToolbarProps = _ref7.ToolbarProps,
      FilterFieldProps = _ref7.FilterFieldProps,
      SortIconButtonProps = _ref7.SortIconButtonProps,
      SortIconProps = _ref7.SortIconProps,
      LeftToolbarProps = _ref7.LeftToolbarProps,
      LeftFilterFieldProps = _ref7.LeftFilterFieldProps,
      LeftSortIconButtonProps = _ref7.LeftSortIconButtonProps,
      LeftSortIconProps = _ref7.LeftSortIconProps,
      LeftTitleProps = _ref7.LeftTitleProps,
      RightToolbarProps = _ref7.RightToolbarProps,
      RightFilterFieldProps = _ref7.RightFilterFieldProps,
      RightSortIconButtonProps = _ref7.RightSortIconButtonProps,
      RightSortIconProps = _ref7.RightSortIconProps,
      RightTitleProps = _ref7.RightTitleProps,
      PaperProps = _ref7.PaperProps,
      LeftPaperProps = _ref7.LeftPaperProps,
      RightPaperProps = _ref7.RightPaperProps;
  var invalid = validationError(meta, validateOnMount);
  var text = invalid || (meta.touched || validateOnMount) && meta.warning || helperText || description;
  return /*#__PURE__*/React.createElement(StyledDualListSelect, FormFieldGridProps, /*#__PURE__*/React.createElement(FormControl, _extends({
    fullWidth: true,
    required: isRequired,
    error: !!invalid,
    component: "fieldset"
  }, FormControlProps), /*#__PURE__*/React.createElement(FormLabel, _extends({
    component: "legend"
  }, FormLabelProps), label), /*#__PURE__*/React.createElement(Grid, _extends({
    container: true
  }, InternalGridProps), /*#__PURE__*/React.createElement(Grid, _extends({
    item: true,
    xs: 12,
    md: 5
  }, ListGridProps, LeftListGridProps), leftTitle && /*#__PURE__*/React.createElement(Typography, _extends({
    variant: "h6",
    gutterBottom: true
  }, TitleProps, LeftTitleProps), leftTitle), isFilterable && /*#__PURE__*/React.createElement(ToolbarInternal, {
    ToolbarProps: ToolbarProps,
    LeftToolbarProps: LeftToolbarProps,
    filterOptions: filterOptions,
    filterOptionsTitle: filterOptionsTitle,
    FilterFieldProps: FilterFieldProps,
    sortOptions: sortOptions,
    SortIconButtonProps: SortIconButtonProps,
    SortIconProps: SortIconProps,
    LeftSortIconProps: LeftSortIconProps,
    LeftFilterFieldProps: LeftFilterFieldProps,
    LeftSortIconButtonProps: LeftSortIconButtonProps,
    filter: state.filterOptions,
    sortDesc: state.sortLeftDesc
  }), /*#__PURE__*/React.createElement(ListInternal, {
    optionClick: handleOptionsClick,
    value: leftValues,
    noOptionsTitle: noOptionsTitle,
    filterValue: state.filterOptions,
    filterValueText: filterOptionsText,
    selectedValues: state.selectedLeftValues,
    checkboxVariant: checkboxVariant,
    ListProps: _objectSpread(_objectSpread({}, ListProps), LeftListProps),
    ListItemProps: _objectSpread(_objectSpread({}, ListItemProps), LeftListItemProps),
    ListItemIconProps: _objectSpread(_objectSpread({}, ListItemIconProps), LeftListItemIconProps),
    ListItemTextProps: _objectSpread(_objectSpread({}, ListItemTextProps), LeftItemTextProps),
    ListItemSecondaryActionProps: _objectSpread(_objectSpread({}, ListItemSecondaryActionProps), LeftItemSecondaryActionProps),
    PaperProps: PaperProps,
    LeftPaperProps: LeftPaperProps
  })), /*#__PURE__*/React.createElement(Grid, _extends({
    item: true,
    xs: 12,
    md: 2
  }, ButtonsGridProps), /*#__PURE__*/React.createElement(Grid, _extends({
    container: true
  }, ButtonsInternalGridProps, {
    className: clsx(classes.buttonsGrid, ButtonsInternalGridProps && ButtonsInternalGridProps.className)
  }), allToRight && /*#__PURE__*/React.createElement(Grid, _extends({
    item: true,
    md: 12,
    sm: 3
  }, ButtonGridProps, AllToRightGridProps, {
    className: clsx(classes.button, ButtonGridProps && ButtonGridProps.className, AllToRightGridProps && AllToRightGridProps.className)
  }), /*#__PURE__*/React.createElement(Button, _extends({
    variant: "outlined",
    size: "small",
    disabled: leftValues.length === 0,
    onClick: handleClearLeftValues,
    "aria-label": moveAllRightTitle
  }, IconButtonProps, AllToRightIconButtonProps), "\u226B")), /*#__PURE__*/React.createElement(Grid, _extends({
    item: true,
    md: 12,
    sm: 3
  }, ButtonGridProps, ToRightGridProps, {
    className: clsx(classes.button, ButtonGridProps && ButtonGridProps.className, ToRightGridProps && ToRightGridProps.className)
  }), /*#__PURE__*/React.createElement(Button, _extends({
    variant: "outlined",
    size: "small",
    disabled: leftValues.length === 0,
    onClick: handleMoveRight,
    "aria-label": moveRightTitle
  }, IconButtonProps, ToRightIconButtonProps), ">")), /*#__PURE__*/React.createElement(Grid, _extends({
    item: true,
    md: 12,
    sm: 3
  }, ButtonGridProps, ToLeftGridProps, {
    className: clsx(classes.button, ButtonGridProps && ButtonGridProps.className, ToLeftGridProps && ToLeftGridProps.className)
  }), /*#__PURE__*/React.createElement(Button, _extends({
    variant: "outlined",
    size: "small",
    disabled: rightValues.length === 0,
    onClick: handleMoveLeft,
    "aria-label": moveLeftTitle
  }, IconButtonProps, ToLeftIconButtonProps), "<")), allToLeft && /*#__PURE__*/React.createElement(Grid, _extends({
    item: true,
    md: 12,
    sm: 3
  }, ButtonGridProps, AllToLeftGridProps, {
    className: clsx(classes.button, ButtonGridProps && ButtonGridProps.className, AllToLeftGridProps && AllToLeftGridProps.className)
  }), /*#__PURE__*/React.createElement(Button, _extends({
    variant: "outlined",
    size: "small",
    disabled: rightValues.length === 0,
    onClick: handleClearRightValues,
    "aria-label": moveAllLeftTitle
  }, IconButtonProps, AllToLeftIconButtonProps), "\u226A")))), /*#__PURE__*/React.createElement(Grid, _extends({
    item: true,
    xs: 12,
    md: 5
  }, ListGridProps, RightListGridProps), rightTitle && /*#__PURE__*/React.createElement(Typography, _extends({
    variant: "h6",
    gutterBottom: true
  }, TitleProps, RightTitleProps), rightTitle), isFilterable && /*#__PURE__*/React.createElement(ToolbarInternal, {
    ToolbarProps: ToolbarProps,
    LeftToolbarProps: RightToolbarProps,
    filterOptions: filterValues,
    filterOptionsTitle: filterValueTitle,
    FilterFieldProps: FilterFieldProps,
    sortOptions: sortValues,
    SortIconButtonProps: SortIconButtonProps,
    SortIconProps: SortIconProps,
    LeftSortIconProps: RightSortIconProps,
    LeftFilterFieldProps: RightFilterFieldProps,
    LeftSortIconButtonProps: RightSortIconButtonProps,
    filter: state.filterValue,
    sortDesc: state.sortRightDesc,
    isValue: true
  }), /*#__PURE__*/React.createElement(ListInternal, {
    checkboxVariant: checkboxVariant,
    optionClick: handleValuesClick,
    value: rightValues,
    noOptionsTitle: noValueTitle,
    filterValue: state.filterValue,
    filterValueText: filterValueText,
    selectedValues: state.selectedRightValues,
    ListProps: _objectSpread(_objectSpread({}, ListProps), RightListProps),
    ListItemProps: _objectSpread(_objectSpread({}, ListItemProps), RightListItemProps),
    ListItemIconProps: _objectSpread(_objectSpread({}, ListItemIconProps), RightListItemIconProps),
    ListItemTextProps: _objectSpread(_objectSpread({}, ListItemTextProps), RightItemTextProps),
    ListItemSecondaryActionProps: _objectSpread(_objectSpread({}, ListItemSecondaryActionProps), RightItemSecondaryActionProps),
    PaperProps: PaperProps,
    LeftPaperProps: RightPaperProps
  }))), text && /*#__PURE__*/React.createElement(FormHelperText, FormHelperTextProps, text)));
};

var DualListSelectWrapper = function DualListSelectWrapper(props) {
  return /*#__PURE__*/React.createElement(DualListSelectCommon, _extends({}, props, {
    DualListSelect: DualListSelect
  }));
};

export default DualListSelectWrapper;