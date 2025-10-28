import { UseFieldApiComponentConfig } from "@jakub007d/react-form-renderer";
import { TextInputProps } from "@patternfly/react-core";
import FormGroupProps from "../form-group";

export type DatePickerProps = TextInputProps & FormGroupProps & UseFieldApiComponentConfig;

declare const DatePicker: React.ComponentType<DatePickerProps>;

export default DatePicker;
