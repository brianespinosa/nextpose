import { MDXProvider } from '@mdx-js/react';
import Split from './Split';
import Steps from './Steps';

/* eslint-disable react/display-name */
const mdComponents = {
  Split: (properties) => <Split {...properties} />,
  Steps: (properties) => <Steps {...properties} />,
};
/* eslint-enable react/display-name */

const CustomMDXProvider = ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
);

export default CustomMDXProvider;
