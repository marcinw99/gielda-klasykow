import React, { Component, Fragment } from "react";
import {
  Drawer,
  Button,
  AppBar,
  Toolbar,
  withWidth,
  withStyles
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { compose } from "recompose";
import PropTypes from "prop-types";

import Logo from "./Logo";
import Register from "./Register";
import LoginAndResetPasswordRequest from "./LoginAndResetPasswordRequest";
import HeaderWithUser from "./HeaderWithUser";
import HeaderWithoutUser from "./HeaderWithoutUser";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
});

class Header extends Component {
  state = {
    loginAnchorEl: null,
    registerAnchorEl: null,
    drawerOpen: false
  };

  toggleDrawer = open => {
    this.setState({
      drawerOpen: open
    });
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
    const { classes, thisUser, width } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Logo />
            {width === "xs" || width === "sm" ? (
              <Fragment>
                <Button onClick={() => this.toggleDrawer(true)}>
                  <Menu />
                </Button>
                <Drawer
                  anchor="right"
                  open={this.state.drawerOpen}
                  onClose={() => this.toggleDrawer(false)}
                >
                  <HeaderWithUser mobile thisUser={thisUser} />
                  <HeaderWithoutUser
                    mobile
                    thisUser={thisUser}
                    openRegister={this.openRegister}
                    openLogin={this.openLogin}
                  />
                </Drawer>
              </Fragment>
            ) : (
              <Fragment>
                <HeaderWithUser thisUser={thisUser} />
                <HeaderWithoutUser
                  thisUser={thisUser}
                  openRegister={this.openRegister}
                  openLogin={this.openLogin}
                />
              </Fragment>
            )}
            <Register
              open={Boolean(this.state.registerAnchorEl)}
              anchorEl={this.state.registerAnchorEl}
              handleClose={this.handleClose}
            />
            <LoginAndResetPasswordRequest
              open={Boolean(this.state.loginAnchorEl)}
              anchorEl={this.state.loginAnchorEl}
              handleClose={this.handleClose}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  thisUser: PropTypes.object
};

export default compose(
  withWidth(),
  withStyles(styles)
)(Header);
