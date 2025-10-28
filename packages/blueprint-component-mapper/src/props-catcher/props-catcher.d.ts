import { AnyObject } from '@jakub007d/react-form-renderer';

export interface PropsCatcherComponentProps extends AnyObject {
  isRequired?: boolean;
  label?: React.ReactNode;
  providerRequired?: React.ReactNode;
  component?: any;
  name?: string;
}

declare function propsCatcher(componentProps: PropsCatcherComponentProps): AnyObject;

export default propsCatcher;
