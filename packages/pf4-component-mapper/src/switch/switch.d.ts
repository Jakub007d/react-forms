import FormGroupProps from "../form-group";
import { UseFieldApiComponentConfig } from "@jakub007d/react-form-renderer";
import { SwitchProps as PFSwitchProps } from '@patternfly/react-core';

interface InternalSwitchProps extends PFSwitchProps {
  isReadOnly?: boolean;
}

export type SwitchProps = InternalSwitchProps & FormGroupProps & UseFieldApiComponentConfig;

declare const Switch: React.ComponentType<SwitchProps>;

export default Switch;
