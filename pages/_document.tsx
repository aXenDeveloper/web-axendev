import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const test123 = 1;
    return { ...initialProps, test123 };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:site_name" content="aXenDev" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pl_PL" />
          <meta name="robots" content="index" />
          <link rel="alternate" href="https://axendev.net/" hrefLang="x-default" />
        </Head>

        <body>
          <script src="/initialTheme.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
