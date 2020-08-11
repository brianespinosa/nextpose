import { espressive } from './presets/themes';
import { fade } from './presets/animations';

module.exports = {
  mdxFile: 'fds.mdx',
  googleFontsUrl:
    'https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@300;500&display=swap',
  animations: fade,
  theme: {
    ...espressive,
  },
};
