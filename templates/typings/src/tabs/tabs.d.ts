import { ReactNode } from 'react';
import { Field } from '@jakub007d/react-form-renderer';

export interface TabField {
  name: string;
  title?: ReactNode;
  fields: Field[];
}

export interface TabsProps {
  fields: TabField[];
}

declare const Tabs: React.ComponentType<TabsProps>;

export default Tabs;
