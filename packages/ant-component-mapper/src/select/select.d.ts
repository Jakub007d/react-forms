import { FormGroupProps } from "../form-group";
import { AnyObject } from "@jakub007d/react-form-renderer";
import { ReactNode } from "react";

export interface SelectOption extends AnyObject {
  value?: any;
  label: ReactNode;
}

interface InternalSelectProps {
  options: SelectOption[];
  isSearchable?: boolean;
  isMulti?: boolean;
  placeholder?: ReactNode;
  isClearable?: boolean;
}

export type SelectProps = InternalSelectProps & FormGroupProps;

declare const Select: React.ComponentType<SelectProps>;

export default Select;
