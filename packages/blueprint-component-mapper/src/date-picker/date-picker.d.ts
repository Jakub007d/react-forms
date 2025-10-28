import { FormGroupProps } from "../form-group/form-group";
import { UseFieldApiComponentConfig } from "@jakub007d/react-form-renderer";
import { IDatePickerProps } from '@blueprintjs/datetime';
import { IPopoverProps, IButtonProps } from "@blueprintjs/core";

export interface DatePickerValueRenderer {
  (value?: string | Date): string;
}

interface InternalDatePickerProps extends IDatePickerProps {
  disabled?: boolean;
  valueRenderer?: DatePickerValueRenderer;
  PopoverProps?: IPopoverProps;
  ButtonProps: IButtonProps;
}

export type DatePickerProps = InternalDatePickerProps & FormGroupProps & UseFieldApiComponentConfig;

declare const DatePicker: React.ComponentType<DatePickerProps>;

export default DatePicker;
