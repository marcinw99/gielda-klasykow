import React, { Component } from "react";

import { AppBar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  logo: {
    height: "80px",
    width: "auto"
  }
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" color="default">
        <Typography variant="h1">Giełda klasyków</Typography>
      </AppBar>
    );
  }
}
export default withStyles(styles)(Header);
