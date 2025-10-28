import { Field } from "@jakub007d/react-form-renderer";
import { ReactNode } from "react";

export interface TabField {
  fields: Field[];
  name: string;
  title?: ReactNode;
}

export interface TabsProps {
  fields: TabField[];
  name: string;
}

declare const Tabs: React.ComponentType<TabsProps>;

export default Tabs;
