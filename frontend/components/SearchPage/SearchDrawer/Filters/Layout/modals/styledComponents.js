import React from "react";
import { Paper, Typography, withStyles, FormControl } from "@material-ui/core";

// ModalPaper

const modalPaperStyles = theme => ({
  root: {
    position: "absolute",
    padding: theme.spacing.unit * 4,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    maxHeight: "90vh",
    overflowY: "auto"
  },
  normal: {
    width: theme.spacing.unit * 80
  },
  wide: {
    width: theme.spacing.unit * 90
  }
});

const ModalPaperComponent = props => {
  const { classes, wide, ...other } = props;
  return (
    <Paper
      square
      className={`${classes.root} ${wide ? classes.wide : classes.normal}`}
      elevation={24}
      {...other}
    />
  );
};

export const ModalPaper = withStyles(modalPaperStyles)(ModalPaperComponent);

// ModalContent

const modalContentStyles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4
  }
});

const ModalContentComponent = props => {
  const { classes, ...other } = props;
  return <div className={classes.root} {...other} />;
};

export const ModalContent = withStyles(modalContentStyles)(
  ModalContentComponent
);

// StyledFilterTitle

const filterTitleStyles = theme => ({
  root: {
    color: theme.palette.primary.dark,
    fontSize: 16,
    marginTop: theme.spacing.unit * 2
  }
});

const FilterTitle = props => {
  const { classes, ...other } = props;
  return <Typography align="left" variant="h6" classes={classes} {...other} />;
};

export const StyledFilterTitle = withStyles(filterTitleStyles)(FilterTitle);

// StyledFormControl

const formControlStyles = theme => ({
  root: {
    minWidth: 150,
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
