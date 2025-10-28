import { Field } from "@jakub007d/react-form-renderer";
import { ReactNode } from "react";

export interface SubFormProps {
  fields: Field[];
  name: string;
  title?: ReactNode;
  description?: ReactNode;
}

declare const SubForm: React.ComponentType<SubFormProps>;

export default SubForm;
