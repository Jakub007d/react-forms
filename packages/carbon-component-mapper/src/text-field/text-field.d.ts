import { FormGroupProps } from "../form-group";
import { UseFieldApiComponentConfig } from "@jakub007d/react-form-renderer";

import { TextInputProps } from 'carbon-components-react';

export type TextFieldProps = TextInputProps & FormGroupProps & UseFieldApiComponentConfig;

declare const TextField: React.ComponentType<TextFieldProps>;

export default TextField;
