import React, { Component, Fragment } from "react";
import Head from "next/head";
import { Grid, Typography, withStyles } from "@material-ui/core";
import { Error as ErrorIcon } from "@material-ui/icons";

const styles = theme => ({
  root: {
    marginTop: "20vh"
  },
  icon: {
    height: "50px",
    width: "auto",
    marginLeft: theme.spacing.unit * 1.5
  },
  message: {
    marginTop: theme.spacing.unit * 2
  }
});

const StyledError = withStyles(styles)(props => (
  <Fragment>
    <Head>
      <title>Wystąpił błąd</title>
    </Head>
    <Grid
      className={props.classes.root}
      container
      justify="center"
      spacing={24}
    >
      <Grid item>
        <Grid container alignItems="center">
          <Typography variant="h3" color="primary">
            Błąd
          </Typography>
          <ErrorIcon className={props.classes.icon} color="primary" />
        </Grid>

        <Typography className={props.classes.message} variant="h5">
          {props.message}
        </Typography>
      </Grid>
    </Grid>
  </Fragment>
));

class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    if (this.props.statusCode === 404)
      return <StyledError message="Podana strona nie istnieje" />;
    return (
      <StyledError
        message={
          this.props.statusCode
            ? `Wystąpił błąd ${this.props.statusCode} po stronie serwera.`
            : "Wystąpił błąd w przeglądarce."
        }
      />
    );
  }
}

export default Error;
