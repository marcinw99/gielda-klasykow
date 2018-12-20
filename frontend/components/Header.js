import React, { Component } from "react";
import { AppBar, Typography, Button, Toolbar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Register from "./HeaderComponents/Register";
import Login from "./HeaderComponents/Login";

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
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography className={props.classes.grow}>
            <img
              src="/static/Baner.png"
              alt="Giełda klasyków"
              className={props.classes.logo}
            />
          </Typography>
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
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
