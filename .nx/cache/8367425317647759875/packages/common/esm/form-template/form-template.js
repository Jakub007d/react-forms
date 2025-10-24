import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
var _excluded = ["FormWrapper", "Title", "Description", "Button", "ButtonGroup", "formWrapperProps", "showFormControls", "disableSubmit", "Header", "headerProps", "titleProps", "descriptionProps", "buttonGroupProps", "buttonsProps", "alertProps", "BeforeError"];
import React from 'react';
import useFormApi from "@data-driven-forms/react-form-renderer/use-form-api";
import FormSpy from "@data-driven-forms/react-form-renderer/form-spy";
export var isDisabled = function isDisabled(disableStates, getState) {
  return disableStates.map(function (item) {
    return getState()[item];
  }).find(function (item) {
    return !!item;
  });
};
export var completeButtons = function completeButtons(buttonOrder) {
  var expectedOrder = _toConsumableArray(buttonOrder);

  if (!expectedOrder.includes('submit')) {
    expectedOrder.push('submit');
  }

  if (!expectedOrder.includes('reset')) {
    expectedOrder.push('reset');
  }

  if (!expectedOrder.includes('cancel')) {
    expectedOrder.push('cancel');
  }

  return expectedOrder;
};
export var FormControls = function FormControls(_ref) {
  var onCancel = _ref.onCancel,
      onReset = _ref.onReset,
      _ref$submitLabel = _ref.submitLabel,
      submitLabel = _ref$submitLabel === void 0 ? 'Submit' : _ref$submitLabel,
      _ref$cancelLabel = _ref.cancelLabel,
      cancelLabel = _ref$cancelLabel === void 0 ? 'Cancel' : _ref$cancelLabel,
      _ref$resetLabel = _ref.resetLabel,
      resetLabel = _ref$resetLabel === void 0 ? 'Reset' : _ref$resetLabel,
      _ref$canReset = _ref.canReset,
      canReset = _ref$canReset === void 0 ? false : _ref$canReset,
      disableSubmit = _ref.disableSubmit,
      _ref$buttonOrder = _ref.buttonOrder,
      buttonOrder = _ref$buttonOrder === void 0 ? ['submit', 'reset', 'cancel'] : _ref$buttonOrder,
      buttonClassName = _ref.buttonClassName,
      FormButtons = _ref.FormButtons,
      Button = _ref.Button,
      ButtonGroup = _ref.ButtonGroup,
      formSpyProps = _ref.formSpyProps,
      _ref$buttonsProps = _ref.buttonsProps,
      buttonsProps = _ref$buttonsProps === void 0 ? {} : _ref$buttonsProps,
      buttonGroupProps = _ref.buttonGroupProps;

  if (FormButtons) {
    return /*#__PURE__*/React.createElement(FormButtons, null);
  }

  var submitting = formSpyProps.submitting,
      pristine = formSpyProps.pristine,
      validating = formSpyProps.validating;
  var submit = buttonsProps.submit,
      reset = buttonsProps.reset,
      cancel = buttonsProps.cancel;
  var buttons = {
    submit: /*#__PURE__*/React.createElement(Button, _extends({
      key: "form-submit",
      type: "submit",
      variant: "primary",
      buttonType: "submit",
      disabled: submitting || validating || disableSubmit,
      label: submitLabel
    }, submit)),
    reset: canReset ? /*#__PURE__*/React.createElement(Button, _extends({
      key: "form-reset",
      type: "button",
      buttonType: "reset",
      disabled: pristine,
      onClick: onReset,
      label: resetLabel
    }, reset)) : null,
    cancel: onCancel ? /*#__PURE__*/React.createElement(Button, _extends({
      key: "form-cancel",
      type: "button",
      buttonType: "cancel",
      onClick: onCancel,
      label: cancelLabel
    }, cancel)) : null
  };
  return /*#__PURE__*/React.createElement(ButtonGroup, _extends({}, buttonGroupProps, buttonClassName && {
    className: buttonClassName
  }), completeButtons(buttonOrder).map(function (button) {
    return buttons[button];
  }));
};

var FormTemplate = function FormTemplate(_ref2) {
  var FormWrapper = _ref2.FormWrapper,
      Title = _ref2.Title,
      Description = _ref2.Description,
      Button = _ref2.Button,
      ButtonGroup = _ref2.ButtonGroup,
      formWrapperProps = _ref2.formWrapperProps,
      _ref2$showFormControl = _ref2.showFormControls,
      showFormControls = _ref2$showFormControl === void 0 ? true : _ref2$showFormControl,
      _ref2$disableSubmit = _ref2.disableSubmit,
      disableSubmit = _ref2$disableSubmit === void 0 ? [] : _ref2$disableSubmit,
      _ref2$Header = _ref2.Header,
      Header = _ref2$Header === void 0 ? React.Fragment : _ref2$Header,
      headerProps = _ref2.headerProps,
      titleProps = _ref2.titleProps,
      descriptionProps = _ref2.descriptionProps,
      buttonGroupProps = _ref2.buttonGroupProps,
      buttonsProps = _ref2.buttonsProps,
      alertProps = _ref2.alertProps,
      BeforeError = _ref2.BeforeError,
      rest = _objectWithoutProperties(_ref2, _excluded);

  var _rest$schema = rest.schema,
      title = _rest$schema.title,
      description = _rest$schema.description,
      label = _rest$schema.label,
      formFields = rest.formFields;

  var _useFormApi = useFormApi(),
      onReset = _useFormApi.onReset,
      onCancel = _useFormApi.onCancel,
      getState = _useFormApi.getState,
      handleSubmit = _useFormApi.handleSubmit;

  return /*#__PURE__*/React.createElement(FormWrapper, _extends({
    onSubmit: handleSubmit
  }, formWrapperProps), (title || label || description) && /*#__PURE__*/React.createElement(Header, headerProps, (title || label) && /*#__PURE__*/React.createElement(Title, titleProps, title || label), description && /*#__PURE__*/React.createElement(Description, descriptionProps, description)), BeforeError && /*#__PURE__*/React.createElement(FormSpy, {
    subscription: {
      submitError: true,
      error: true
    }
  }, function () {
    var state = getState();
    return /*#__PURE__*/React.createElement(BeforeError, {
      formError: state.error || state.submitError,
      formSpyProps: state,
      alertProps: alertProps
    });
  }), formFields, showFormControls && /*#__PURE__*/React.createElement(FormSpy, null, function (formSpyProps) {
    return /*#__PURE__*/React.createElement(FormControls, _extends({
      Button: Button,
      FormSpy: FormSpy,
      buttonGroupProps: buttonGroupProps,
      buttonsProps: buttonsProps,
      ButtonGroup: ButtonGroup,
      onReset: onReset,
      onCancel: onCancel,
      disableSubmit: isDisabled(disableSubmit, getState),
      formSpyProps: formSpyProps
    }, rest));
  }));
};

export default FormTemplate;