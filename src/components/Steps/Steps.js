/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion, useCycle } from 'framer-motion';

const hidden = {
  opacity: 0,
  transition: {
    duration: 1,
  },
};

const visible = {
  opacity: 1,
  transition: {
    duration: 1,
  },
};

// const renderChildren = (children) => {
//   console.warn(children);
//   return children.map(({ props }) => (
//     <motion.li animate={visible}>{props.children}</motion.li>
//   ));
// };

const Steps = (props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const { mdxType, children } = props.children.props;

  const ListComponent = motion[mdxType];

  return (
    <ListComponent onClick={() => toggleOpen()}>
      {children.map(({ props }, i) => {
        {
          /* console.warn(children); */
        }
        return (
          <motion.li key={i} animate={isOpen ? visible : hidden}>
            {props.children}
          </motion.li>
        );
      })}
    </ListComponent>
  );
};

export default Steps;
