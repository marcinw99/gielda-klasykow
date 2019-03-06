import React, { Component } from "react";
import {
  Paper,
  Grid,
  Typography,
  Button,
  withStyles,
  NoSsr
} from "@material-ui/core";
import cookie from "js-cookie";
import Link from "next/link";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    position: "fixed",
    bottom: 0,
    left: "5%",
    right: "5%",
    background: theme.palette.primary.main
  },
  button: {
    marginLeft: theme.spacing.unit * 2,
    color: theme.palette.primary.main,
    background: theme.palette.primary.contrastText
  },
  typography: {
    fontSize: 18,
    color: theme.palette.primary.contrastText
  }
});

function Layout({ classes, acceptCookies }) {
  return (
    <Paper square elevation={24} className={classes.paper}>
      <Grid container spacing={16} alignItems="center" justify="center">
        <Typography color="primary" variant="h6" className={classes.typography}>
          Używamy ciasteczek
        </Typography>
        <Link href="/policies">
          <Button variant="contained" className={classes.button}>
            Dowiedz się więcej
          </Button>
        </Link>
        <Button
          variant="contained"
          className={classes.button}
          onClick={acceptCookies}
        >
          Akceptuję ciasteczka
        </Button>
      </Grid>
    </Paper>
  );
}

const StyledLayout = withStyles(styles)(Layout);

export default class CookiesConsentBanner extends Component {
  state = {
    cookieConsent: cookie.get("cookie-consent")
  };
  acceptCookies = () => {
    cookie.set("cookie-consent", "accepted");
    this.setState({ cookieConsent: "accepted" });
  };
  render() {
    return this.state.cookieConsent === "accepted" ? null : (
      <NoSsr>
        <StyledLayout acceptCookies={this.acceptCookies} />
      </NoSsr>
    );
  }
}
