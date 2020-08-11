/* eslint-disable prefer-arrow/prefer-arrow-functions  */

const withMdxEnhanced = require('next-mdx-enhanced');
const rehypePrism = require('@mapbox/rehype-prism');

module.exports = withMdxEnhanced({
  layoutPath: 'src/layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [],
  rehypePlugins: [rehypePrism],
  // extendFrontMatter: {
  //   process: (mdxContent, frontMatter) => {},
  //   phase: 'prebuild|loader|both',
  // },
})({
  devIndicators: {
    autoPrerender: false,
  },
  reactStrictMode: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/deck',
  //       permanent: true,
  //     },
  //   ];
  // },
});
