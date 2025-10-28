import { FormGroupProps } from "../form-group";
import { UseFieldApiComponentConfig } from "@jakub007d/react-form-renderer";

import { ToggleProps } from 'carbon-components-react';

export type SwitchProps = ToggleProps & FormGroupProps & UseFieldApiComponentConfig;

declare const Switch: React.ComponentType<SwitchProps>;

export default Switch;
