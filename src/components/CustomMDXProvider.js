// NOTE: We are not currently using a custom provider for MDX. If we need to customize anything, we will add it in the _app.js in /src/pages

/* eslint-disable react/display-name, jsx-a11y/heading-has-content */

import { MDXProvider } from '@mdx-js/react';

const mdComponents = {
  // h1: (props) => <h1 style={{ color: 'green' }} {...props} />,
};

const CustomMDXProvider = ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
);

export default CustomMDXProvider;
