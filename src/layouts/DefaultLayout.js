import Head from 'next/head';
import { useRouter } from 'next/router';
import { googleFontsUrl } from '../../theme.config';
import { splitMdx, useKeyNavigate } from '../shared';
import { Header, Pagination, Slide } from '../components';
import { AnimatePresence } from 'framer-motion';

const DefaultLayout = (frontMatter) => {
  const Page = ({ children: content }) => {
    const pages = splitMdx(content);
    const router = useRouter();
    const { slide = 1 } = router.query;
    const activeSlideIndex = slide - 1;

    useKeyNavigate(Number(slide));

    return (
      <>
        <Head>
          <title>{frontMatter.title || 'Nextposé'}</title>
          <link rel='icon' href='/favicon.ico' />
          {googleFontsUrl && <link rel='stylesheet' href={googleFontsUrl} />}
        </Head>
        {frontMatter.title && <Header title={frontMatter.title} />}
        <AnimatePresence exitBeforeEnter>
          <Slide key={activeSlideIndex}>{pages[activeSlideIndex]}</Slide>
        </AnimatePresence>
        <Pagination pages={pages} activeSlideIndex={activeSlideIndex} />
      </>
    );
  };

  return Page;
};
export default DefaultLayout;
