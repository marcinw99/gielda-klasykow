import React from "react";
import { withStyles, MenuItem } from "@material-ui/core";

// StyledMenuItem

const menuItemStyles = theme => ({
  root: {
    minWidth: 200
  }
});

const MenuItemComponent = props => {
  return <MenuItem {...props} />;
};

export const StyledMenuItem = withStyles(menuItemStyles)(MenuItemComponent);
