import { CommonFieldProps } from "../common-field-props/common-field-props";
import { UseFieldApiComponentConfig } from "@jakub007d/react-form-renderer";
import { FormTextAreaProps } from "semantic-ui-react";

interface InternalTextareaProps extends FormTextAreaProps {}

export type TextareaProps = InternalTextareaProps & CommonFieldProps & UseFieldApiComponentConfig;

declare const Textarea: React.ComponentType<TextareaProps>;

export default Textarea;
