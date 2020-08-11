/** @jsx jsx */
import { jsx } from 'theme-ui';
import { theme } from '../../../theme.config';

const Main = ({ children }) => {
  return <main sx={theme?.styles?.Main}>{children}</main>;
};

export default Main;
