import { Field } from '@jakub007d/react-form-renderer';

export interface SubFormProps {
  fields: Field | Field[];
}

declare const SubForm: React.ComponentType<SubFormProps>;

export default SubForm;
