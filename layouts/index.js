import Head from 'next/head';
import { useRouter } from 'next/router';
import themeConfig from '../theme.config';
import splitMDX from '../shared/splitMdx';

const Slides = (frontMatter) => ({ children: content }) => {
  const pages = splitMDX(content);
  const router = useRouter();
  const { activeSlide } = router.query;
  const activeSlideIndex = activeSlide - 1;

  return (
    <>
      <Head>
        <title>{themeConfig.title || frontMatter.title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {pages[activeSlideIndex]}
    </>
  );
};
export default Slides;
