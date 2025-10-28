import { UseFieldApiComponentConfig } from '@jakub007d/react-form-renderer';

export interface FormGroupInternalProps { }

export type FormGroupProps = FormGroupInternalProps & UseFieldApiComponentConfig;

declare const FormGroup: React.ComponentType<FormGroupProps>;

export default FormGroup;
