import React from "react";
import App, { Container } from "next/app";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import JssProvider from "react-jss/lib/JssProvider";
import { ApolloProvider } from "react-apollo";
import PropTypes from "prop-types";

import withData from "../src/withData";
import Page from "../components/Page";
import getPageContext from "../src/getPageContext";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // exposes query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            <CssBaseline />
            <ApolloProvider client={this.props.apollo}>
              <Page>
                <Component pageContext={this.pageContext} {...pageProps} />
              </Page>
            </ApolloProvider>
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object
};

MyApp.defaultProps = {
  pageProps: {}
};

export default withData(MyApp);
