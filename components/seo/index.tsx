import Head from "next/head";
import ISeoProps from "./interface";

export default function Seo(props: Readonly<ISeoProps>) {
  const { font, pageTitle, keywords, description } = props;

  return (
    <Head>
      <title>{pageTitle ?? "I Am A Woman of Influence"}</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="robots" content="max-image-preview:large" />
      <meta
        name="keywords"
        content={
          keywords ??
          "I Am A Woman of Influence,woman,woman of influence,influence"
        }
      />
      <meta
        name="description"
        content={description ?? "I Am A Woman of Influence"}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {font && <link href={font} rel="stylesheet" />}

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="I Am A Woman of Influence" />
      <meta property="og:description" content="I Am A Woman of Influence" />
      <meta property="og:image" content="" />

      <link rel="stylesheet" href="/css/base.css" />
      <link rel="stylesheet" href="/css/custom.css" />
      <link rel="stylesheet" href="/css/menu.css" />
      <link rel="stylesheet" href="/css/responsive.css" />
      <link rel="stylesheet" href="/css/overrides.css" />
      <link rel="stylesheet" href="/css/disclosure.css" />

      <link rel="stylesheet" href="/css/pages/about.css" />

      {/* components */}
      <link rel="stylesheet" href="/css/components/mega-menu.css" />
      <link rel="stylesheet" href="/css/components/image-banner.css" />
      <link rel="stylesheet" href="/css/components/slider.css" />
      <link rel="stylesheet" href="/css/components/slideshow.css" />
      <link rel="stylesheet" href="/css/components/template-collection.css" />
      <link rel="stylesheet" href="/css/components/section-image-banner.css" />
      <link rel="stylesheet" href="/css/components/section-marquee.css" />
      <link rel="stylesheet" href="/css/components/section-grid-banner.css" />
      <link rel="stylesheet" href="/css/components/section-footer.css" />
      <link rel="stylesheet" href="/css/components/section-featured-blog.css" />
      <link rel="stylesheet" href="/css/components/section-team-section.css" />
      <link rel="stylesheet" href="/css/components/section-form-image.css" />
      <link
        rel="stylesheet"
        href="/css/components/section-product-recommendations.css"
      />
      <link rel="stylesheet" href="/css/components/section-main-blog.css" />
      <link rel="stylesheet" href="/css/components/component-newsletter.css" />
      <link rel="stylesheet" href="/css/components/component-list-menu.css" />
      <link
        rel="stylesheet"
        href="/css/components/component-list-payment.css"
      />
      <link rel="stylesheet" href="/css/components/component-list-social.css" />
      <link rel="stylesheet" href="/css/components/component-rte.css" />
      <link rel="stylesheet" href="/css/components/component-card.css" />
      <link
        rel="stylesheet"
        href="/css/components/component-article-card.css"
      />
      <link rel="stylesheet" href="/css/components/component-price.css" />
      <link rel="stylesheet" href="/css/components/component-menu-drawer.css" />
      <link rel="stylesheet" href="/css/components/component-cart-drawer.css" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
