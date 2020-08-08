import './_app.css';
import CustomMDXProvider from '../components/CustomMDXProvider';

const MyApp = ({ Component, pageProps }) => {
  return (
    <CustomMDXProvider>
      <Component {...pageProps} />
    </CustomMDXProvider>
  );
};

export default MyApp;
