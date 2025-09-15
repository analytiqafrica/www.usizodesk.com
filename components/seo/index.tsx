import Head from "next/head";
import ISeoProps from "./interface";

export default function Seo(props: Readonly<ISeoProps>) {
  const { font, pageTitle, keywords, description } = props;

  return (
    <Head>
      <title>{pageTitle ?? "Usizo Support Desk"}</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="robots" content="max-image-preview:large" />
      <meta
        name="keywords"
        content={keywords ?? "Usizo Support Desk,support,help desk,desk,Usizo"}
      />
      <meta name="description" content={description ?? "Usizo Support Desk"} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {font && <link href={font} rel="stylesheet" />}

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Usizo Support Desk" />
      <meta property="og:description" content="Usizo Support Desk" />
      <meta property="og:image" content="" />

      <link rel="icon" href="/favicon.ico" />

      <link rel="stylesheet" href="/assets/css/normalize.css" />
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/fontawesome-all.css" />
      <link rel="stylesheet" href="/assets/css/swiper.min.css" />
      <link rel="stylesheet" href="/assets/css/animate.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}
