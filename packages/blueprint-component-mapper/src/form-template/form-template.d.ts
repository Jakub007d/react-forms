import FormTemplateCommonProps from "@jakub007d/common/form-template";
import { ReactNode } from "react";

export interface FormTemplateProps extends FormTemplateCommonProps {
  requiredLabelInfo?: ReactNode;
}

declare const FormTemplate: React.ComponentType<FormTemplateProps>;

export default FormTemplate;
