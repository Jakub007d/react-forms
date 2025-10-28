import { ReactNode } from "react";
import { Field } from "@jakub007d/react-form-renderer";

export interface SubFormProps {
  title?: ReactNode;
  description?: ReactNode;
  fields: Field | Field[];
}

declare const SubForm: React.ComponentType<SubFormProps>;

export default SubForm;
