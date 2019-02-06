import React from "react";
import { FormControl } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
// StyledFormControl

const formControlStyles = theme => ({
  root: {
    minWidth: 160,
    margin: theme.spacing.unit
  }
});

const FormControlComponent = props => {
  const { classes, ...other } = props;
  return <FormControl classes={classes} {...other} />;
};

export const StyledFormControl = withStyles(formControlStyles)(
  FormControlComponent
);
