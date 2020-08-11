import './_app.css';
// import 'prism-themes/themes/prism-darcula.css';

import { ThemeProvider } from 'theme-ui';

// NOTE: For now we do not need a custom MDX provider to keep things simple
// import CustomMDXProvider from '../components/CustomMDXProvider';
import { theme } from '../../theme.config';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
