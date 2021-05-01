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
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="icons/favicon.ico" />
          <meta property="og:site_name" content="aXenDev" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="pl_PL" />
          <meta name="robots" content="index" />
          <link rel="alternate" href="https://axendev.net/" hrefLang="x-default" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#c72c20" />

          <link rel="icon" sizes="36x36" href="/icons/icon-36x36.png" />
          <link rel="icon" sizes="48x48" href="/icons/icon-48x48.png" />
          <link rel="icon" sizes="72x72" href="/icons/icon-72x72.png" />
          <link rel="icon" sizes="96x96" href="/icons/icon-96x96.png" />
          <link rel="icon" sizes="144x144" href="/icons/icon-144x144.png" />
          <link rel="icon" sizes="192x192" href="/icons/icon-192x192.png" />
          <link rel="icon" sizes="256x256" href="/icons/icon-256x256.png" />
          <link rel="icon" sizes="384x384" href="/icons/icon-384x384.png" />
          <link rel="icon" sizes="512x512" href="/icons/icon-512x512.png" />

          <meta name="apple-mobile-web-app-title" content="aXenDev" />
          <link rel="apple-touch-icon" href="/icons/icon-180x180.png" />
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
