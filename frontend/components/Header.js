import React, { Component } from "react";

import { AppBar, Typography, Button, Toolbar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  logo: {
    height: "60px",
    width: "auto",
    marginTop: theme.spacing.unit
  }
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography className={classes.grow}>
            <img
              src="/static/Baner.png"
              alt="Giełda klasyków"
              className={classes.logo}
            />
          </Typography>
          <Button color="inherit">Rejestracja</Button>
          <Button color="inherit">Zaloguj się</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
