import React from "react";
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

const Header = props => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography className={props.classes.grow}>
        <img
          src="/static/Baner.png"
          alt="Giełda klasyków"
          className={props.classes.logo}
        />
      </Typography>
      <Button color="inherit">Rejestracja</Button>
      <Button color="inherit">Zaloguj się</Button>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
