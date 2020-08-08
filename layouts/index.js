import Head from 'next/head';
import { useRouter } from 'next/router';
import themeConfig from '../theme.config';
import splitMDX from '../shared/splitMdx';
import useKeyNavigate from '../shared/useKeyNavigate';

const Slides = (frontMatter) => {
  console.warn(frontMatter);

  const Page = ({ children: content }) => {
    const pages = splitMDX(content);
    const router = useRouter();
    const { activeSlide } = router.query;
    const activeSlideIndex = activeSlide - 1;
    useKeyNavigate(Number(activeSlide));

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

  return Page;
};
export default Slides;
