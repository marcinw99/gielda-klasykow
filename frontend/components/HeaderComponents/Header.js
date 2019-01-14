import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Link from "next/link";
import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  Grid,
  Fade,
  Slide
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Register from "./Register";
import Login from "./Login";
import { SIGNOUT_MUTATION } from "../../src/Mutations/Login";
import { CURRENT_USER_QUERY } from "../../src/QueryComponents/User";

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  logo: {
    height: "60px",
    width: "auto",
    marginTop: theme.spacing.unit
  },
  buttons: {
    background: "rgba(1,1,1,0)",
    color: "white",
    borderColor: "white",
    margin: theme.spacing.unit
  }
});

class Header extends Component {
  state = {
    loginAnchorEl: null,
    registerAnchorEl: null
  };

  openRegister = event => {
    this.setState({
      registerAnchorEl: event.currentTarget
    });
  };

  openLogin = event => {
    this.setState({
      loginAnchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      loginAnchorEl: null,
      registerAnchorEl: null
    });
  };

  render() {
    const { classes, thisUser } = this.props;
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography className={classes.grow}>
            <Link href="/">
              <img
                src="/static/Baner.png"
                alt="Giełda klasyków"
                className={classes.logo}
              />
            </Link>
          </Typography>
          <HeaderWithUser thisUser={thisUser} />
          <HeaderWithoutUser
            thisUser={thisUser}
            classes={classes}
            openRegister={this.openRegister}
            openLogin={this.openLogin}
          />
          <Register
            open={Boolean(this.state.registerAnchorEl)}
            anchorEl={this.state.registerAnchorEl}
            handleClose={this.handleClose}
          />
          <Login
            open={Boolean(this.state.loginAnchorEl)}
            anchorEl={this.state.loginAnchorEl}
            handleClose={this.handleClose}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

const HeaderWithUser = props => (
  <Slide
    in={Boolean(props.thisUser)}
    direction="left"
    mountOnEnter
    unmountOnExit
    timeout={{ enter: 1200, exit: 0 }}
  >
    <Grid justify="flex-end" container direction="row">
      <Typography variant="h4">
        {props.thisUser && props.thisUser.name}
      </Typography>
      <SignOut />
    </Grid>
  </Slide>
);

const HeaderWithoutUser = props => (
  <Fade
    in={Boolean(!props.thisUser)}
    mountOnEnter
    unmountOnExit
    timeout={{ enter: 1000, exit: 0 }}
  >
    <Grid justify="flex-end" container direction="row">
      <Button
        variant="outlined"
        className={props.classes.buttons}
        aria-haspopup="true"
        onClick={props.openRegister}
      >
        Rejestracja
      </Button>
      <Button
        variant="outlined"
        className={props.classes.buttons}
        aria-haspopup="true"
        onClick={props.openLogin}
      >
        Zaloguj się
      </Button>
    </Grid>
  </Fade>
);

const SignOut = () => {
  return (
    <Mutation
      mutation={SIGNOUT_MUTATION}
      refetchQueries={[
        {
          query: CURRENT_USER_QUERY
        }
      ]}
    >
      {send => (
        <Button onClick={send} variant="outlined">
          Wyloguj się
        </Button>
      )}
    </Mutation>
  );
};

export default withStyles(styles)(Header);
