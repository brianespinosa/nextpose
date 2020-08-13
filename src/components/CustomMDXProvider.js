import { MDXProvider } from '@mdx-js/react';
import Split from './Split';
import Steps from './Steps';

const mdComponents = {
  Split: (props) => <Split {...props} />,
  Steps: (props) => <Steps {...props} />,
};

const CustomMDXProvider = ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
);

export default CustomMDXProvider;
