import FormGroupProps from "../form-group";
import { UseFieldApiComponentConfig } from "@jakub007d/react-form-renderer";
import { TextAreaProps as PfTextAreaProps } from '@patternfly/react-core';

interface InternalTextareaProps extends PfTextAreaProps {}

export type TextareaProps = InternalTextareaProps & FormGroupProps & UseFieldApiComponentConfig;

declare const Textarea: React.ComponentType<TextareaProps>;

export default Textarea;
