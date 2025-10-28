import { FieldArrayField } from '@jakub007d/react-form-renderer';

export interface FieldArrayProps {
  fields: FieldArrayField[];
  itemDefault?: any;
}

declare const FieldArray: React.ComponentType<FieldArrayProps>;

export default FieldArray;
