import { AnyObject } from "@jakub007d/react-form-renderer";

export interface DualListSortButtonProps extends AnyObject {
    position: 'left' | 'right';
}

declare const DualListSortButton: React.ComponentType<DualListSortButtonProps>;

export default DualListSortButton;
