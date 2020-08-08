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
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, x: '-100%' }}
    >
      <main className={styles.Main}>{children}</main>
    </motion.div>
  );
};

Slide.propTypes = propTypes;

export default Slide;
