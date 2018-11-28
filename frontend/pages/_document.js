import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

class MyDocument extends Document {
  render() {
    const { pageContext } = this.props;
    return (
      <html lang="pl" dir="ltr">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          <link rel="manifest" href="static/favicons/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta
            name="theme-color"
            content={pageContext.theme.palette.primary.main}
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = ctx => {
  let pageContext;
  const page = ctx.renderPage(Component => {
    const WrappedComponent = props => {
      pageContext = props.pageContext;
      return <Component {...props} />;
    };

    // prop types
    return WrappedComponent;
  });

  return {
    ...page,
    pageContext,
    styles: (
      <React.Fragment>
        <style
          id="jss-server-side"
          dangerouslySetInnerHTML={{
            __html: pageContext.sheetsRegistry.toString()
          }}
        />
        {flush() || null}
      </React.Fragment>
    )
  };
};

export default MyDocument;
