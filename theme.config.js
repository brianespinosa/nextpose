import { espressive } from './src/presets/themes';

module.exports = {
  googleFontsUrl:
    'https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@300;500&display=swap',
  prismTheme: 'a11y-dark',
  animations: {
    slideNext: {
      initial: { opacity: 0, x: '100%' },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 },
      exit: { opacity: 0, x: '-100%' },
    },
    slidePrev: {
      initial: { opacity: 0, x: '-100%' },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 },
      exit: { opacity: 0, x: '100%' },
    },
  },
  theme: {
    ...espressive,
  },
};
