import { MDXProvider } from '@mdx-js/react';
import Steps from './Steps';

const mdComponents = {
  Steps: (props) => <Steps {...props} />,
};

const CustomMDXProvider = ({ children }) => (
  <MDXProvider components={mdComponents}>{children}</MDXProvider>
);

export default CustomMDXProvider;
