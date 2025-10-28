import { FormGroupProps } from '../form-group';
import { UseFieldApiComponentConfig } from '@jakub007d/react-form-renderer';

interface InternalSwitchProps extends React.HTMLProps<HTMLInputElement> { }

export type SwitchProps = InternalSwitchProps & FormGroupProps & UseFieldApiComponentConfig;

declare const Switch: React.ComponentType<SwitchProps>;

export default Switch;
