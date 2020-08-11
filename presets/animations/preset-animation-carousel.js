export const slideNext = {
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: '-100%' },
  initial: { opacity: 0, x: '100%' },
  transition: { duration: 0.5 },
};

export const slidePrev = {
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: '100%' },
  initial: { opacity: 0, x: '-100%' },
  transition: { duration: 0.5 },
};

export const carousel = { slideNext, slidePrev };
