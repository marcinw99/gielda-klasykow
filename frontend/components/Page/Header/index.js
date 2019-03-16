import React, { Component } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import Logo from "./Logo";
import Register from "./Register";
import LoginAndResetPasswordRequest from "./LoginAndResetPasswordRequest";
import HeaderWithUser from "./HeaderWithUser";
import HeaderWithoutUser from "./HeaderWithoutUser";

const styles = theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
    height: theme.custom.headerHeight
  },
  grow: {
    flexGrow: 1
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
      <AppBar position="fixed" color="default" className={classes.root}>
        <Toolbar>
          <Logo />
          <HeaderWithUser thisUser={thisUser} />
          <HeaderWithoutUser
            thisUser={thisUser}
            openRegister={this.openRegister}
            openLogin={this.openLogin}
          />
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
    );
  }
}

Header.propTypes = {
  thisUser: PropTypes.object
};

export default withStyles(styles)(Header);
