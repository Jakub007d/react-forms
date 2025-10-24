import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
var _excluded = ["remove"],
    _excluded2 = ["remove"],
    _excluded3 = ["arrayValidator", "label", "description", "fields", "defaultItem", "meta", "minItems", "maxItems", "noItemsMessage", "FormFieldGridProps", "FormControlProps", "buttonLabels", "GridContainerProps", "HeaderGridProps", "HeaderProps", "UndoButtonProps", "RedoButtonProps", "AddButtonProps", "DescriptionGridProps", "DescriptionProps", "BodyGridProps", "NoItemsProps", "FormHelperTextGridProps", "FormHelperTextProps", "FieldContainerProps", "FieldGroupGridProps", "RemoveButtonGridProps", "RemoveButtonProps"];

var _styled;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { memo, useReducer } from 'react';
import { styled } from '@mui/material/styles';
import useFormApi from "@data-driven-forms/react-form-renderer/use-form-api";
import FieldArray from "@data-driven-forms/react-form-renderer/field-array";
import isEqual from 'lodash/isEqual';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import useFieldApi from "@data-driven-forms/react-form-renderer/use-field-api";
import FormFieldGrid from '../form-field-grid/form-field-grid';
import clsx from 'clsx';
var PREFIX = 'DynamicArray';
var classes = {
  formControl: "".concat(PREFIX, "-formControl"),
  centerText: "".concat(PREFIX, "-centerText"),
  buttonsToEnd: "".concat(PREFIX, "-buttonsToEnd"),
  header: "".concat(PREFIX, "-header"),
  label: "".concat(PREFIX, "-label"),
  fieldArrayGroup: "".concat(PREFIX, "-fieldArrayGroup")
};
var StyledFormFieldGrid = styled(FormFieldGrid)((_styled = {}, _defineProperty(_styled, "& .".concat(classes.formControl), {
  width: '100%'
}), _defineProperty(_styled, "& .".concat(classes.centerText), {
  display: 'flex',
  justifyContent: 'center'
}), _defineProperty(_styled, "& .".concat(classes.buttonsToEnd), {
  display: 'flex',
  justifyContent: 'flex-end'
}), _defineProperty(_styled, "& .".concat(classes.header), {
  display: 'flex'
}), _defineProperty(_styled, "& .".concat(classes.label), {
  flexGrow: 1
}), _defineProperty(_styled, "&.".concat(classes.fieldArrayGroup), {
  marginBottom: 32
}), _styled));
var ArrayItem = /*#__PURE__*/memo(function (_ref) {
  var fields = _ref.fields,
      fieldIndex = _ref.fieldIndex,
      name = _ref.name,
      remove = _ref.remove,
      length = _ref.length,
      minItems = _ref.minItems,
      removeLabel = _ref.removeLabel,
      _ref$FieldContainerPr = _ref.FieldContainerProps,
      FieldContainerProps = _ref$FieldContainerPr === void 0 ? {} : _ref$FieldContainerPr,
      _ref$FieldGroupGridPr = _ref.FieldGroupGridProps,
      FieldGroupGridProps = _ref$FieldGroupGridPr === void 0 ? {} : _ref$FieldGroupGridPr,
      _ref$RemoveButtonGrid = _ref.RemoveButtonGridProps,
      RemoveButtonGridProps = _ref$RemoveButtonGrid === void 0 ? {} : _ref$RemoveButtonGrid,
      _ref$RemoveButtonProp = _ref.RemoveButtonProps,
      RemoveButtonProps = _ref$RemoveButtonProp === void 0 ? {} : _ref$RemoveButtonProp;

  var _useFormApi = useFormApi(),
      renderForm = _useFormApi.renderForm;

  var editedFields = fields.map(function (field, index) {
    var computedName = field.name ? "".concat(name, ".").concat(field.name) : name;
    return _objectSpread(_objectSpread({}, field), {}, {
      name: computedName,
      key: "".concat(computedName, "-").concat(index)
    });
  });
  return /*#__PURE__*/React.createElement(Grid, _extends({
    container: true,
    spacing: 3
  }, FieldContainerProps), /*#__PURE__*/React.createElement(Grid, _extends({
    item: true,
    xs: 12
  }, FieldGroupGridProps), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 3
  }, renderForm([editedFields]))), /*#__PURE__*/React.createElement(Grid, _extends({
    item: true,
    xs: 12,
    className: classes.buttonsToEnd
  }, RemoveButtonGridProps), /*#__PURE__*/React.createElement(Button, _extends({
    color: "secondary",
    onClick: function onClick() {
      return remove(fieldIndex);
    },
    disabled: length <= minItems
  }, RemoveButtonProps), removeLabel)));
}, function (_ref2, _ref3) {
  var _prevRemove = _ref2.remove,
      prev = _objectWithoutProperties(_ref2, _excluded);

  var _nextRemove = _ref3.remove,
      next = _objectWithoutProperties(_ref3, _excluded2);

  return isEqual(prev, next);
});
var defaultButtonLabels = {
  add: 'ADD',
  remove: 'REMOVE'
};
var initialState = {
  index: 0,
  history: []
};
export var reducer = function reducer(state, _ref4) {
  var type = _ref4.type,
      action = _ref4.action;

  switch (type) {
    case 'redo':
      return _objectSpread(_objectSpread({}, state), {}, {
        index: state.index + 1
      });

    case 'action':
      return {
        index: state.index + 1,
        history: [].concat(_toConsumableArray(state.history.slice(0, state.index)), [action])
      };

    case 'undo':
      return _objectSpread(_objectSpread({}, state), {}, {
        index: state.index - 1
      });

    case 'resetHistory':
      return _objectSpread(_objectSpread({}, state), {}, {
        history: state.history.slice(0, state.index)
      });

    default:
      return state;
  }
};

var DynamicArray = function DynamicArray(_ref5) {
  var props = _extends({}, _ref5);

  var _useFieldApi = useFieldApi(props),
      arrayValidator = _useFieldApi.arrayValidator,
      label = _useFieldApi.label,
      description = _useFieldApi.description,
      formFields = _useFieldApi.fields,
      defaultItem = _useFieldApi.defaultItem,
      meta = _useFieldApi.meta,
      _useFieldApi$minItems = _useFieldApi.minItems,
      minItems = _useFieldApi$minItems === void 0 ? 0 : _useFieldApi$minItems,
      _useFieldApi$maxItems = _useFieldApi.maxItems,
      maxItems = _useFieldApi$maxItems === void 0 ? Infinity : _useFieldApi$maxItems,
      _useFieldApi$noItemsM = _useFieldApi.noItemsMessage,
      noItemsMessage = _useFieldApi$noItemsM === void 0 ? 'No items added' : _useFieldApi$noItemsM,
      _useFieldApi$FormFiel = _useFieldApi.FormFieldGridProps,
      FormFieldGridProps = _useFieldApi$FormFiel === void 0 ? {} : _useFieldApi$FormFiel,
      _useFieldApi$FormCont = _useFieldApi.FormControlProps,
      FormControlProps = _useFieldApi$FormCont === void 0 ? {} : _useFieldApi$FormCont,
      buttonLabels = _useFieldApi.buttonLabels,
      _useFieldApi$GridCont = _useFieldApi.GridContainerProps,
      GridContainerProps = _useFieldApi$GridCont === void 0 ? {} : _useFieldApi$GridCont,
      _useFieldApi$HeaderGr = _useFieldApi.HeaderGridProps,
      HeaderGridProps = _useFieldApi$HeaderGr === void 0 ? {} : _useFieldApi$HeaderGr,
      _useFieldApi$HeaderPr = _useFieldApi.HeaderProps,
      HeaderProps = _useFieldApi$HeaderPr === void 0 ? {} : _useFieldApi$HeaderPr,
      _useFieldApi$UndoButt = _useFieldApi.UndoButtonProps,
      UndoButtonProps = _useFieldApi$UndoButt === void 0 ? {} : _useFieldApi$UndoButt,
      _useFieldApi$RedoButt = _useFieldApi.RedoButtonProps,
      RedoButtonProps = _useFieldApi$RedoButt === void 0 ? {} : _useFieldApi$RedoButt,
      _useFieldApi$AddButto = _useFieldApi.AddButtonProps,
      AddButtonProps = _useFieldApi$AddButto === void 0 ? {} : _useFieldApi$AddButto,
      _useFieldApi$Descript = _useFieldApi.DescriptionGridProps,
      DescriptionGridProps = _useFieldApi$Descript === void 0 ? {} : _useFieldApi$Descript,
      _useFieldApi$Descript2 = _useFieldApi.DescriptionProps,
      DescriptionProps = _useFieldApi$Descript2 === void 0 ? {} : _useFieldApi$Descript2,
      _useFieldApi$BodyGrid = _useFieldApi.BodyGridProps,
      BodyGridProps = _useFieldApi$BodyGrid === void 0 ? {} : _useFieldApi$BodyGrid,
      _useFieldApi$NoItemsP = _useFieldApi.NoItemsProps,
      NoItemsProps = _useFieldApi$NoItemsP === void 0 ? {} : _useFieldApi$NoItemsP,
      _useFieldApi$FormHelp = _useFieldApi.FormHelperTextGridProps,
      FormHelperTextGridProps = _useFieldApi$FormHelp === void 0 ? {} : _useFieldApi$FormHelp,
      _useFieldApi$FormHelp2 = _useFieldApi.FormHelperTextProps,
      FormHelperTextProps = _useFieldApi$FormHelp2 === void 0 ? {} : _useFieldApi$FormHelp2,
      _useFieldApi$FieldCon = _useFieldApi.FieldContainerProps,
      FieldContainerProps = _useFieldApi$FieldCon === void 0 ? {} : _useFieldApi$FieldCon,
      _useFieldApi$FieldGro = _useFieldApi.FieldGroupGridProps,
      FieldGroupGridProps = _useFieldApi$FieldGro === void 0 ? {} : _useFieldApi$FieldGro,
      _useFieldApi$RemoveBu = _useFieldApi.RemoveButtonGridProps,
      RemoveButtonGridProps = _useFieldApi$RemoveBu === void 0 ? {} : _useFieldApi$RemoveBu,
      _useFieldApi$RemoveBu2 = _useFieldApi.RemoveButtonProps,
      RemoveButtonProps = _useFieldApi$RemoveBu2 === void 0 ? {} : _useFieldApi$RemoveBu2,
      rest = _objectWithoutProperties(_useFieldApi, _excluded3);

  var _useReducer = useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var combinedButtonLabels = _objectSpread(_objectSpread({}, defaultButtonLabels), buttonLabels);

  var dirty = meta.dirty,
      submitFailed = meta.submitFailed,
      error = meta.error,
      submitError = meta.submitError;
  var isError = (dirty || submitFailed) && error && typeof error === 'string';
  return /*#__PURE__*/React.createElement(StyledFormFieldGrid, _extends({}, FormFieldGridProps, {
    className: clsx(classes.fieldArrayGroup, FormFieldGridProps.classname)
  }), /*#__PURE__*/React.createElement(FormControl, _extends({
    component: "fieldset",
    error: isError || submitError
  }, FormControlProps, {
    className: clsx(classes.formControl, FormControlProps.className)
  }), /*#__PURE__*/React.createElement(FieldArray, {
    key: rest.input.name,
    name: rest.input.name,
    validate: arrayValidator
  }, function (_ref6) {
    var _ref6$fields = _ref6.fields,
        map = _ref6$fields.map,
        _ref6$fields$value = _ref6$fields.value,
        value = _ref6$fields$value === void 0 ? [] : _ref6$fields$value,
        push = _ref6$fields.push,
        remove = _ref6$fields.remove;

    var pushWrapper = function pushWrapper() {
      dispatch({
        type: 'resetHistory'
      });
      push(defaultItem);
    };

    var removeWrapper = function removeWrapper(index) {
      dispatch({
        type: 'action',
        action: {
          action: 'remove',
          value: value[index]
        }
      });
      remove(index);
    };

    var undo = function undo() {
      push(state.history[state.index - 1].value);
      dispatch({
        type: 'undo'
      });
    };

    var redo = function redo() {
      remove(value.length - 1);
      dispatch({
        type: 'redo'
      });
    };

    return /*#__PURE__*/React.createElement(Grid, _extends({
      container: true,
      spacing: 3
    }, GridContainerProps), /*#__PURE__*/React.createElement(Grid, _extends({
      item: true,
      xs: 12,
      className: classes.header
    }, HeaderGridProps), label && /*#__PURE__*/React.createElement(Typography, _extends({
      variant: "h6",
      className: classes.label
    }, HeaderProps), label), /*#__PURE__*/React.createElement(IconButton, _extends({
      color: "primary",
      "aria-label": "undo",
      component: "span",
      disabled: state.index === 0,
      onClick: undo
    }, UndoButtonProps, {
      size: "large"
    }), /*#__PURE__*/React.createElement(UndoIcon, null)), /*#__PURE__*/React.createElement(IconButton, _extends({
      color: "primary",
      "aria-label": "redo",
      component: "span",
      disabled: state.index === state.history.length,
      onClick: redo
    }, RedoButtonProps, {
      size: "large"
    }), /*#__PURE__*/React.createElement(RedoIcon, null)), /*#__PURE__*/React.createElement(Button, _extends({
      color: "primary",
      onClick: pushWrapper,
      disabled: value.length >= maxItems
    }, AddButtonProps), combinedButtonLabels.add)), description && /*#__PURE__*/React.createElement(Grid, _extends({
      item: true,
      xs: 12
    }, DescriptionGridProps), /*#__PURE__*/React.createElement(Typography, _extends({
      variant: "subtitle1"
    }, DescriptionProps), description)), /*#__PURE__*/React.createElement(Grid, _extends({
      item: true,
      xs: 12
    }, BodyGridProps), value.length <= 0 ? /*#__PURE__*/React.createElement(Typography, _extends({
      variant: "body1",
      gutterBottom: true,
      className: classes.centerText
    }, NoItemsProps), noItemsMessage) : map(function (name, index) {
      return /*#__PURE__*/React.createElement(ArrayItem, {
        key: name,
        fields: formFields,
        name: name,
        fieldIndex: index,
        remove: removeWrapper,
        length: value.length,
        minItems: minItems,
        removeLabel: combinedButtonLabels.remove,
        FieldContainerProps: FieldContainerProps,
        FieldGroupGridProps: FieldGroupGridProps,
        RemoveButtonGridProps: RemoveButtonGridProps,
        RemoveButtonProps: RemoveButtonProps
      });
    })), (isError || submitError) && /*#__PURE__*/React.createElement(Grid, _extends({
      item: true,
      xs: 12
    }, FormHelperTextGridProps), /*#__PURE__*/React.createElement(FormHelperText, FormHelperTextProps, error || submitError)));
  })));
};

export default DynamicArray;