import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

const prefixer = postcss([autoprefixer]);
const minifier = postcss([cssnano]);

class MyDocument extends Document {
  render() {
    return (
      <html lang="pl" dir="ltr">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=0, maximum-scale=1, minimum-scale=1"
          />
          <meta charSet="utf-8" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="static/favicons/favicon-16x16.png"
          />
          <link rel="shortcut icon" href="static/favicons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#3e2723" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <script src="/static/nprogress.js" />
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  let pageContext;
  const page = ctx.renderPage(Component => {
    const WrappedComponent = props => {
      pageContext = props.pageContext;
      return <Component {...props} />;
    };

    // prop types
    return WrappedComponent;
  });
  let css = pageContext.sheetsRegistry.toString();
  const result1 = await prefixer.process(css);
  css = result1.css;
  const result2 = await minifier.process(css);
  css = result2.css;
  return {
    ...page,
    pageContext,
    styles: <style id="jss-server-side">{css}</style>
  };
};

export default MyDocument;
