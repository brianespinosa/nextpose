import Header from '../../src/components/Header/Header.theme';
import Main from '../../src/components/Main/Main.theme';
import Slide from '../../src/components/Slide/Slide.theme';

const heading = {
  color: 'secondary',
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
};

export const base = {
  fonts: {
    body: 'Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: '"Dank Mono", "Fira Code", monospace',
  },
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
    Slide,
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
    },
    h1: {
      ...heading,
    },
    h2: {
      ...heading,
    },
    h3: {
      ...heading,
    },
    h4: {
      ...heading,
    },
    h5: {
      ...heading,
    },
    h6: {
      ...heading,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      borderRadius: '.25em',
      code: {
        color: 'inherit',
        fontFamily: 'monospace',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    blockquote: {
      borderRadius: '.25em',
      backgroundColor: 'muted',
      borderLeftColor: 'primary',
      borderLeftStyle: 'solid',
      borderLeftWidth: '.25em',
      fontStyle: 'italic',
      margin: '1em 0',
      padding: '.25em 1em',
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
      paddingInlineStart: '1em',
      listStyleType: 'square',
    },
    ol: {
      paddingInlineStart: '1em',
    },
    li: {
      lineHeight: '1.75em',
    },
  },
};
