/* eslint-disable react/display-name, jsx-a11y/heading-has-content */

import { MDXProvider } from '@mdx-js/react';
// import Code from './Code';

const mdComponents = {
  h1: (props) => <h1 style={{ color: 'green' }} {...props} />,
  // code: (props) => <Code {...props} />,
};

const CustomMDXProvider = ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
);

export default CustomMDXProvider;
