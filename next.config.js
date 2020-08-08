const withMdxEnhanced = require('next-mdx-enhanced');

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [],
  rehypePlugins: [],
  // extendFrontMatter: {
  //   process: (mdxContent, frontMatter) => {},
  //   phase: 'prebuild|loader|both',
  // },
})({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/1',
        permanent: true,
      },
    ];
  },
});
