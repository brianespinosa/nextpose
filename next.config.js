const withMdxEnhanced = require('next-mdx-enhanced');

const OPTIMIZE_SVG_OPTIONS = [
  { inlineStyles: false },
  { removeStyleElement: true },
  { removeScriptElement: true },
  { removeRasterImages: true },
  { removeDimensions: true },
  { removeAttrs: { attr: 'style' } },
  {
    addClassesToSVGElement: { className: 'mermaid' },
  },
];

const inlineSVG = () =>
  require('@jsdevtools/rehype-inline-svg')({
    optimize: { plugins: OPTIMIZE_SVG_OPTIONS },
  });

module.exports = withMdxEnhanced({
  layoutPath: 'src/layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [
    require('remark-emoji'),
    require('remark-mermaid'),
    require('remark-slug'),
  ],
  rehypePlugins: [require('@mapbox/rehype-prism'), inlineSVG],
})({
  devIndicators: {
    autoPrerender: false,
  },
  reactStrictMode: true,
});
