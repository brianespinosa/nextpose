import pt from 'prop-types';
import { motion } from 'framer-motion';
import styles from './Slide.module.scss';

const propTypes = {
  children: pt.node,
};
const Slide = ({ children }) => {
  return (
    <motion.div
      className={styles._}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
    >
      <main>{children}</main>
    </motion.div>
  );
};

Slide.propTypes = propTypes;

export default Slide;
