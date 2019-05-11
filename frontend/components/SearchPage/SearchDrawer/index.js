import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import {
  Drawer,
  SwipeableDrawer,
  withWidth,
  withStyles,
  Fab
} from "@material-ui/core";
import { FilterList } from "@material-ui/icons";

import Filters from "./Filters";

const styles = theme => ({
  drawer: {
    width: theme.custom.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    paddingTop: theme.custom.headerHeight,
    width: theme.custom.drawerWidth,
    background: theme.palette.primary.main
  },
  swipeableDrawer: {
    maxWidth: theme.custom.drawerWidth,
    flexShrink: 0
  },
  swipeableDrawerPaper: {
    maxWidth: theme.custom.drawerWidth,
    background: theme.palette.primary.main
  },
  filterBtn: {
    position: "fixed",
    top: "50%",
    left: 8,
    transform: "translateY(-50%)",
    zIndex: 2000
  }
});

class SearchDrawer extends PureComponent {
  state = {
    open: false
  };

  onOpen = () => {
    this.setState({ open: true });
  };

  onClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, width, ...other } = this.props;
    return width === "xs" || width === "sm" ? (
      <Fragment>
        <Fab
          onClick={this.onOpen}
          color="primary"
          className={classes.filterBtn}
        >
          <FilterList />
        </Fab>
        <SwipeableDrawer
          className={classes.swipeableDrawer}
          classes={{
            paper: classes.swipeableDrawerPaper
          }}
          anchor="left"
          open={this.state.open}
          onOpen={this.onOpen}
          onClose={this.onClose}
        >
          <Filters {...other} />
        </SwipeableDrawer>
      </Fragment>
    ) : (
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

export default compose(
  withWidth(),
  withStyles(styles)
)(SearchDrawer);
