import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Drawer, Hidden, withStyles } from "@material-ui/core";

import Filters from "./Filters";

const styles = theme => ({
  drawer: {
    width: theme.custom.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    marginTop: theme.custom.headerHeight,
    width: theme.custom.drawerWidth,
    background: theme.palette.primary.main
  }
});

class SearchDrawer extends PureComponent {
  render() {
    const { classes, ...other } = this.props;
    return (
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper
        }}
        variant="permanent"
        anchor="left"
      >
        <Filters {...other} />
      </Drawer>
    );
  }
}

SearchDrawer.propTypes = {
  setValueInMainState: PropTypes.func.isRequired
};

export default withStyles(styles)(SearchDrawer);
