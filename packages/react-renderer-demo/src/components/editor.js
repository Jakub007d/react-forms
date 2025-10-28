import { React } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import EditorPro from '@jakub007d/editor-pro/editor';

import propertiesFields from '@jakub007d/editor-pro/editor/properties-fields';
import { componentMapper } from '@jakub007d/mui-component-mapper';

const componentInitialProps = {
  'dual-list-select': {
    options: [],
  },
  'sub-form': {
    title: 'Sub form',
    fields: [],
  },
  'field-array': {
    fields: [],
  },
  wizard: {
    fields: [{ name: 'step-1', fields: [] }],
  },
  tabs: {
    fields: [],
  },
};

const fields = propertiesFields({ componentMapper });

const Editor = () => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <EditorPro fields={fields} componentMapper={componentMapper} componentInitialProps={componentInitialProps} />
  </LocalizationProvider>
);

export default Editor;
