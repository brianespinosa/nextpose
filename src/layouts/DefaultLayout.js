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
    const { activeSlide = 0 } = router.query;

    const { title, author, authorUrl } = frontMatter;

    useKeyNavigate(Number(activeSlide), pages.length);

    return (
      <>
        <Head>
          <title>{frontMatter.title || 'Nextposé'}</title>
          <link rel='icon' href='/favicon.ico' />
          {googleFontsUrl && <link rel='stylesheet' href={googleFontsUrl} />}
        </Head>
        {frontMatter && (
          <Header title={title} author={author} authorUrl={authorUrl} />
        )}
        <AnimatePresence exitBeforeEnter>
          <Slide key={activeSlide}>{pages[activeSlide]}</Slide>
        </AnimatePresence>
        <Pagination pages={pages} activeSlide={activeSlide} />
      </>
    );
  };

  return Page;
};
export default DefaultLayout;
