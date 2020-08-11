/** @jsx jsx */
import pt from 'prop-types';
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import { animations, theme } from '../../../theme.config';
import Main from '../Main';

const propTypes = {
  children: pt.node,
};
const Slide = ({ children }) => {
  return (
    <motion.div sx={theme?.styles?.Slide} {...animations.slideNext}>
      <Main>{children}</Main>
    </motion.div>
  );
};

Slide.propTypes = propTypes;

export default Slide;
