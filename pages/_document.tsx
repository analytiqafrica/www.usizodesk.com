import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import Script from "next/script";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Scripts that run before React */}
          <Script
            src="/assets/js/vendor/modernizr-3.7.1.min.js"
            strategy="beforeInteractive"
          />
          <Script
            src="/assets/js/vendor/jquery-3.4.1.min.js"
            strategy="beforeInteractive"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Scripts safe to load after hydration */}
          <Script src="/assets/js/jquery.easing.min.js" strategy="lazyOnload" />
          <Script src="/assets/js/popper.min.js" strategy="lazyOnload" />
          <Script src="/assets/js/bootstrap.min.js" strategy="lazyOnload" />
          <Script src="/assets/js/wow.min.js" strategy="lazyOnload" />
          <Script src="/assets/js/swiper.min.js" strategy="lazyOnload" />
          <Script
            src="/assets/js/imagesloaded.pkgd.min.js"
            strategy="lazyOnload"
          />
          <Script src="/assets/js/isotope.pkgd.min.js" strategy="lazyOnload" />
          <Script src="/assets/js/jarallax.min.js" strategy="lazyOnload" />
          <Script src="/assets/js/main.js" strategy="lazyOnload" />
        </body>
      </Html>
    );
  }
}
