/** @jsx jsx */
import { jsx } from 'theme-ui';
import config from '../../../theme.config';
import defaultTheme from './Header.theme';

const Header = ({ title }) => {
  return (
    <header sx={config?.theme?.styles?.Header || defaultTheme}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
