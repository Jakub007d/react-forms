import { AnyObject, Field } from "@jakub007d/react-form-renderer";
export interface WizardProps extends AnyObject {
  fields: Field[];
  isDynamic?: boolean;
  crossroads?: string[];
  Wizard?: React.ComponentType;
  component?: any;
  initialState?: AnyObject;
}

declare const Wizard: React.ComponentType<WizardProps>
export const wizardProps: AnyObject
export default Wizard;
