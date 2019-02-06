import React from "react";
import { withStyles } from "@material-ui/core";
// Content

const contentStyles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3
  }
});

const ContentComponent = props => {
  const { classes, ...other } = props;
  return <div className={classes.root} {...other} />;
};

export const Content = withStyles(contentStyles)(ContentComponent);
