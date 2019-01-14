import React, { Component } from "react";
import Link from "next/link";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Register from "./Register";
import Login from "./Login";
import HeaderWithUser from "./HeaderWithUser";
import HeaderWithoutUser from "./HeaderWithoutUser";

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

export default withStyles(styles)(Header);
