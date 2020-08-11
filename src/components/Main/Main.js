/** @jsx jsx */
import { jsx } from 'theme-ui';
import config from '../../../theme.config';
import defaultTheme from './Main.theme';

const Main = ({ children }) => {
  return (
    <main sx={config?.theme?.styles?.Main || defaultTheme}>{children}</main>
  );
};

export default Main;
