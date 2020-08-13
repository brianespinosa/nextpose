import prismTheme from '@theme-ui/prism/presets/github.json';
import Header from '../../src/components/Header/Header.theme';
import Main from '../../src/components/Main/Main.theme';
import Pagination from '../../src/components/Pagination/Pagination.theme';
import Slide from '../../src/components/Slide/Slide.theme';

const inlineCode = {
  backgroundColor: 'muted',
  padding: '.125em .25em',
  borderRadius: '.25em',
};

const heading = {
  color: 'secondary',
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
  code: inlineCode,
};

export const base = {
  fonts: {
    body: 'Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: '"Dank Mono", "Fira Code", monospace',
  },
  fontSizes: [
    '.75em',
    '.875em',
    '1em',
    '1.25em',
    '1.5em',
    '2em',
    '3em',
    '4em',
    '6em',
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#3af',
    muted: '#f3f3f3',
  },
  styles: {
    Header,
    Main,
    Pagination,
    Slide,
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      '*:first-child': {
        marginBlockStart: 0,
      },
      '*:last-child': {
        marginBlockEnd: 0,
      },
    },
    h1: {
      ...heading,
      fontSize: 6,
    },
    h2: {
      ...heading,
      fontSize: 5,
    },
    h3: {
      ...heading,
      fontSize: 4,
    },
    h4: {
      ...heading,
      fontSize: 3,
    },
    h5: {
      ...heading,
      fontSize: 2,
    },
    h6: {
      ...heading,
      fontSize: 1,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      code: inlineCode,
    },
    a: {
      color: 'primary',
    },
    pre: {
      ...prismTheme,
      padding: '1em',
      backgroundColor: 'muted',
      fontFamily: 'monospace',
      overflowX: 'auto',
      borderRadius: '.25em',
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    blockquote: {
      fontSize: '1.125em',
      borderRadius: '.25em',
      backgroundColor: 'muted',
      borderLeftColor: 'primary',
      borderLeftStyle: 'solid',
      borderLeftWidth: '.25em',
      margin: '1em 0',
      padding: '.5em 1em',
      'p:last-of-type': { marginBlockEnd: '.5em' },
      footer: {
        textAlign: 'right',
        fontStyle: 'italic',
        ':before': {
          content: '"-"',
        },
      },
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
    ul: {
      color: 'primary',
      listStyleType: 'square',
      paddingInlineStart: '1em',
      fontSize: 3,
      li: {
        lineHeight: 2,
        code: inlineCode,
      },
      ul: {
        color: 'text',
        fontSize: 0,
        listStyleType: 'circle',
        marginBlockEnd: '1em',
      },
    },
    ol: {
      paddingInlineStart: '1em',
    },
    li: {
      lineHeight: '1.75em',
    },
  },
};
