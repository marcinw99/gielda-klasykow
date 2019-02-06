import React from "react";
import { withStyles, MenuItem, Typography } from "@material-ui/core";

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

// StyledName

const nameStyles = theme => ({
  root: {
    color: theme.palette.primary.dark
  }
});

const Name = props => {
  return <Typography variant="h5" {...props} />;
};

export const StyledName = withStyles(nameStyles)(Name);
