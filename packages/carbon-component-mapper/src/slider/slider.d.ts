import { FormGroupProps } from "../form-group";
import { UseFieldApiComponentConfig } from "@jakub007d/react-form-renderer";

import { SliderProps as CarbonSliderProps } from 'carbon-components-react';

export type SliderProps = CarbonSliderProps & FormGroupProps & UseFieldApiComponentConfig;

declare const Slider: React.ComponentType<SliderProps>;

export default Slider;
