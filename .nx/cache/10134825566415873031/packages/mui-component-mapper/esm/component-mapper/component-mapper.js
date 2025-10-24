import _defineProperty from "@babel/runtime/helpers/defineProperty";

var _componentMapper;

import componentTypes from "@data-driven-forms/react-form-renderer/component-types";
import SubForm from '../sub-form';
import Tabs from '../tabs';
import TextField from '../text-field';
import Textarea from '../textarea';
import Checkbox from '../checkbox';
import Switch from '../switch';
import TimePicker from '../time-picker';
import DatePicker from '../date-picker';
import PlainText from '../plain-text';
import Select from '../select';
import Radio from '../radio';
import Wizard from '../wizard';
import FieldArray from '../field-array';
import DualListSelect from '../dual-list-select';
import Slider from '../slider';
export var components = {
  TextField: TextField,
  Textarea: Textarea,
  Select: Select,
  Checkbox: Checkbox,
  Radio: Radio,
  Switch: Switch,
  DatePicker: DatePicker,
  TimePicker: TimePicker,
  PlainText: PlainText,
  SubForm: SubForm,
  Wizard: Wizard,
  DualListSelect: DualListSelect,
  Slider: Slider
};
var componentMapper = (_componentMapper = {}, _defineProperty(_componentMapper, componentTypes.TEXT_FIELD, TextField), _defineProperty(_componentMapper, componentTypes.TEXTAREA, Textarea), _defineProperty(_componentMapper, componentTypes.SELECT, Select), _defineProperty(_componentMapper, componentTypes.CHECKBOX, Checkbox), _defineProperty(_componentMapper, componentTypes.SUB_FORM, SubForm), _defineProperty(_componentMapper, componentTypes.RADIO, Radio), _defineProperty(_componentMapper, componentTypes.TABS, Tabs), _defineProperty(_componentMapper, componentTypes.DATE_PICKER, DatePicker), _defineProperty(_componentMapper, componentTypes.TIME_PICKER, TimePicker), _defineProperty(_componentMapper, componentTypes.SWITCH, Switch), _defineProperty(_componentMapper, componentTypes.PLAIN_TEXT, PlainText), _defineProperty(_componentMapper, componentTypes.WIZARD, Wizard), _defineProperty(_componentMapper, componentTypes.FIELD_ARRAY, FieldArray), _defineProperty(_componentMapper, componentTypes.DUAL_LIST_SELECT, DualListSelect), _defineProperty(_componentMapper, componentTypes.SLIDER, Slider), _componentMapper);
export default componentMapper;