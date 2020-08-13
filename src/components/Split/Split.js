/** @jsx jsx */
import { jsx } from 'theme-ui';
import config from '../../../theme.config';
import defaultTheme from './Split.theme';

const Split = ({ children }) => {
  return (
    <section sx={config?.theme?.styles?.Split || defaultTheme}>
      {children}
    </section>
  );
};

export default Split;
