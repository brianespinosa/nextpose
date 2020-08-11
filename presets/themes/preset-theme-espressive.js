import { base } from '.';

export const espressive = {
  ...base,
  fonts: {
    body: '"Inter", Helvetica Neue, sans-serif',
    heading: '"Inter", Helvetica Neue, sans-serif',
    monospace: '"Dank Mono", "Fira Code", monospace',
  },
  fontWeights: {
    body: 300,
    heading: 500,
    bold: 600,
    monospace: 400,
  },
  colors: {
    text: '#dddee0',
    background: '#323f46',
    primary: '#2db59e',
    secondary: '#e59925',
    muted: '#1e262b',
  },
  styles: {
    ...base.styles,
    Header: {
      ...base.styles.Header,
      backgroundImage:
        'url(https://www.espressive.com/wp-content/themes/espressive2/images/logo_2.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'calc(100% - 1.5rem) center',
    },
    h4: {
      color: 'text',
      textTransform: 'uppercase',
    },
    h5: {
      color: 'text',
      textTransform: 'uppercase',
    },
    h6: {
      color: 'text',
      textTransform: 'uppercase',
    },
  },
};

export default espressive;
