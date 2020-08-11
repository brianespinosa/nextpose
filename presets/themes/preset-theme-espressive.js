import prismTheme from '@theme-ui/prism/presets/night-owl.json';
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
      a: {
        ...base.styles.Header.a,
        float: 'right',
        marginRight: '12em',
      },
    },
    pre: {
      // NOTE: The order matters!
      // start with the base theme settings
      ...base.styles.pre,
      // set the prism theme
      ...prismTheme,
      // override the background color
      backgroundColor: 'muted',
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
