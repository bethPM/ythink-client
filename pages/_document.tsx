import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <body>
          <Head>
            <title>YTHINK</title>
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <meta property="og:title" content="YTHINK" />
            <meta
              property="og:description"
              content="당신의 YTHINK 다이어리를 만나보세요!"
            />
            <meta property="og:url" content="ythink.com" />
            <meta property="twitter:title" content="YTHINK" />
            <meta
              property="twitter:description"
              content="당신의 YTHINK 다이어리를 만나보세요!"
            />
            <meta property="twitter:url" content="ythink.com" />
          </Head>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const materialSheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        materialSheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: <>{initialProps.styles}</>,
  };
};
