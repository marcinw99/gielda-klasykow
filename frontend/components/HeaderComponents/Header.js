import React, { Component, Fragment } from "react";
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
import SignOut from "./SignOut";
import User from "./User";

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
    const props = this.props;
    return (
      <User>
        {({ data: { thisUser } }) => (
          <Fragment>
            <AppBar position="static" color="primary">
              <Toolbar>
                <Typography className={props.classes.grow}>
                  <img
                    src="/static/Baner.png"
                    alt="Giełda klasyków"
                    className={props.classes.logo}
                  />
                </Typography>
                <Slide
                  in={Boolean(thisUser)}
                  direction="left"
                  mountOnEnter
                  unmountOnExit
                  timeout={{ enter: 1200, exit: 0 }}
                >
                  <Grid justify="flex-end" container direction="row">
                    <Typography variant="h4">
                      {thisUser && thisUser.name}
                    </Typography>
                    <SignOut />
                  </Grid>
                </Slide>
                <Fade
                  in={Boolean(!thisUser)}
                  mountOnEnter
                  unmountOnExit
                  timeout={{ enter: 1000, exit: 0 }}
                >
                  <Grid justify="flex-end" container direction="row">
                    <Button
                      variant="outlined"
                      className={props.classes.buttons}
                      aria-haspopup="true"
                      onClick={this.openRegister}
                    >
                      Rejestracja
                    </Button>
                    <Button
                      variant="outlined"
                      className={props.classes.buttons}
                      aria-haspopup="true"
                      onClick={this.openLogin}
                    >
                      Zaloguj się
                    </Button>
                  </Grid>
                </Fade>
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
          </Fragment>
        )}
      </User>
    );
  }
}

export default withStyles(styles)(Header);
