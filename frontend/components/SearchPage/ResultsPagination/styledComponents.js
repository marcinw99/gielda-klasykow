import React from "react";
import { Fab, withStyles } from "@material-ui/core";

const styles = theme => ({
  disabled: {
    color: `${theme.palette.primary.contrastText} !important`,
    boxShadow: theme.shadows[0],
    backgroundColor: `${theme.palette.primary.main} !important`
  }
});

const PageNumber = props => {
  const { classes, ...other } = props;
  return <Fab size="small" classes={classes} {...other} />;
};

export const StyledPageNumber = withStyles(styles)(PageNumber);
