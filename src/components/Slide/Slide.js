/** @jsx jsx */
import pt from 'prop-types';
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import config from '../../../theme.config';
import defaultTheme from './Slide.theme';
import Main from '../Main';

const propTypes = {
  children: pt.node,
};
const Slide = ({ children }) => {
  return (
    <motion.div
      sx={config?.theme?.styles?.Slide || defaultTheme}
      {...config?.animations?.slideNext}
    >
      <Main>{children}</Main>
    </motion.div>
  );
};

Slide.propTypes = propTypes;

export default Slide;
