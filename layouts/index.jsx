import Head from 'next/head';
import themeConfig from '../theme.config';
import splitMDX from '../shared/splitMdx';

const Slides = (frontMatter) => ({ children: content }) => {
  const pages = splitMDX(content);

  return (
    <>
      <Head>
        <title>{themeConfig.title || frontMatter.title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {pages.map((page, i) => {
        return <div key={i}>{page}</div>;
      })}
    </>
  );
};
export default Slides;
