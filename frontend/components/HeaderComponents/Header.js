import React, { Component, Fragment } from "react";
import { AppBar, Typography, Button, Toolbar } from "@material-ui/core";
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
                {thisUser && (
                  <Fragment>
                    <Typography color="secondary" variant="h3">
                      {thisUser.name}
                    </Typography>
                    <SignOut />
                  </Fragment>
                )}
                {!thisUser && (
                  <Fragment>
                    <Button
                      variant="outlined"
                      className={props.classes.buttons}
                      aria-haspopup="true"
                      onClick={this.openRegister}
                    >
                      Rejestracja
                    </Button>
                    <Register
                      open={Boolean(this.state.registerAnchorEl)}
                      anchorEl={this.state.registerAnchorEl}
                      handleClose={this.handleClose}
                    />
                    <Button
                      variant="outlined"
                      className={props.classes.buttons}
                      aria-haspopup="true"
                      onClick={this.openLogin}
                    >
                      Zaloguj się
                    </Button>
                    <Login
                      open={Boolean(this.state.loginAnchorEl)}
                      anchorEl={this.state.loginAnchorEl}
                      handleClose={this.handleClose}
                    />
                  </Fragment>
                )}
              </Toolbar>
            </AppBar>
          </Fragment>
        )}
      </User>
    );
  }
}

export default withStyles(styles)(Header);
