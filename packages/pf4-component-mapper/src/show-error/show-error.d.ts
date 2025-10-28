import { Meta } from "@jakub007d/react-form-renderer";

declare function showError(meta: Meta<any>, validateOnMount?: boolean): { validated: 'error' | 'warning' | 'default' }

export default showError;
