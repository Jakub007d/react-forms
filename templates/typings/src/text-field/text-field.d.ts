import { FormGroupProps } from '../form-group';
import { UseFieldApiComponentConfig } from '@jakub007d/react-form-renderer';

interface InternalTextFieldProps extends React.HTMLProps<HTMLInputElement> {
    isReadOnly?: boolean;
    isDisabled?: boolean;
}

export type TextFieldProps = InternalTextFieldProps & FormGroupProps & UseFieldApiComponentConfig;

declare const TextField: React.ComponentType<TextFieldProps>;

export default TextField;
