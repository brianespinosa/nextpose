import '../styles/globals.css';
import CustomMDXProvider from '../components/CustomMDXProvider';

function MyApp({ Component, pageProps }) {
  return (
    <CustomMDXProvider>
      <Component {...pageProps} />
    </CustomMDXProvider>
  );
}

export default MyApp;
