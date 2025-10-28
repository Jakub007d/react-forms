import { FormGroupProps } from '../form-group';
import { UseFieldApiComponentConfig, AnyObject } from '@jakub007d/react-form-renderer';
import { ReactNode } from 'react';

export interface SelectOption extends AnyObject {
  value?: any;
  label: ReactNode;
}

interface InternalSelectProps extends React.HTMLProps<HTMLSelectElement> {
  options: SelectOption[];
  isDisabled?: boolean;
}

export type SelectProps = InternalSelectProps & FormGroupProps & UseFieldApiComponentConfig;

declare const Select: React.ComponentType<SelectProps>;

export default Select;
