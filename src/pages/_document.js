import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      // TODO: Add keyboard shortcuts to change this size.
      <Html lang='en' style={{ fontSize: '1.75vmax' }}>
        <Head>
          <style>
            {`/* Nextpose always needs these */ html, body, #__next { padding: 0; margin: 0; height: 100%; } * { box-sizing: border-box; }`}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
