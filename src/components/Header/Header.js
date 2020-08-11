/** @jsx jsx */
import { jsx } from 'theme-ui';
import { theme } from '../../../theme.config';

const Header = ({ title }) => {
  return (
    <header sx={theme?.styles?.Header}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
