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
import { theme, darkTheme } from "../src/customTheme";
import { SnackbarProvider } from "../components/Snackbar/Context";
import { defaults as snackbarDefaults } from "../components/Snackbar/config";

class MyApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
    this.state = {
      darkTheme: false,
      snackbar: { ...snackbarDefaults }
    };
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

  toggleTheme = () => {
    this.setState(prevProps => ({
      darkTheme: !prevProps.darkTheme
    }));
  };

  manageSnackbar = snackbar => {
    this.setState({ snackbar });
  };

  handleSnackbarClose = (e, reason) => {
    if (reason === "clickaway") {
      return null;
    }
    this.setState(prevState => ({
      snackbar: {
        ...prevState.snackbar,
        open: false
      }
    }));
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          <MuiThemeProvider
            theme={this.state.darkTheme ? darkTheme : theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            <CssBaseline />
            <ApolloProvider client={this.props.apollo}>
              <SnackbarProvider manageSnackbar={this.manageSnackbar}>
                <Page
                  toggleTheme={this.toggleTheme}
                  darkTheme={this.state.darkTheme}
                  handleSnackbarClose={this.handleSnackbarClose}
                  snackbar={this.state.snackbar}
                >
                  <Component pageContext={this.pageContext} {...pageProps} />
                </Page>
              </SnackbarProvider>
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
