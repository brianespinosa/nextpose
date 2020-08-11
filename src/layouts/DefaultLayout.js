import Head from 'next/head';
import { useRouter } from 'next/router';
import { googleFontsUrl, title } from '../../theme.config';
import splitMDX from '../shared/splitMdx';
import useKeyNavigate from '../shared/useKeyNavigate';
import Slide from '../components/Slide';
import Header from '../components/Header';
import { AnimatePresence } from 'framer-motion';

const DefaultLayout = (frontMatter) => {
  const Page = ({ children: content }) => {
    const pages = splitMDX(content);
    const router = useRouter();
    const { slide = 1 } = router.query;
    const activeSlideIndex = slide - 1;

    useKeyNavigate(Number(slide));

    return (
      <>
        <Head>
          <title>{title || frontMatter.title}</title>
          <link rel='icon' href='/favicon.ico' />
          {googleFontsUrl && <link rel='stylesheet' href={googleFontsUrl} />}
        </Head>
        {frontMatter.title && <Header title={frontMatter.title} />}
        <AnimatePresence exitBeforeEnter>
          <Slide key={activeSlideIndex}>{pages[activeSlideIndex]}</Slide>
        </AnimatePresence>
      </>
    );
  };

  return Page;
};
export default DefaultLayout;
