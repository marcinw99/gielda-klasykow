import React from "react";
import {
  withStyles,
  Stepper,
  Paper,
  Typography,
  FormControl
} from "@material-ui/core";

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

// StyledStepper

const stepperStyles = theme => ({
  root: {
    background: "rgba(0,0,0,0)"
  }
});

const StepperComponent = props => <Stepper {...props} />;

export const StyledStepper = withStyles(stepperStyles)(StepperComponent);

// StyledPaper

const paperStyles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 3
  }
});

const PaperComponent = props => <Paper elevation={4} {...props} />;

export const StyledPaper = withStyles(paperStyles)(PaperComponent);

// FormContent

const formContentStyles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3
  }
});

const FormContentComponent = props => {
  const { classes, ...other } = props;
  return <div className={classes.root} {...other} />;
};

export const FormContent = withStyles(formContentStyles)(FormContentComponent);

// StyledValueTitle

const valueTitleStyles = theme => ({
  root: {
    color: theme.palette.primary.dark,
    fontSize: 16,
    marginTop: theme.spacing.unit * 2
  }
});

const ValueTitle = props => {
  const { classes, ...other } = props;
  return <Typography align="left" variant="h6" classes={classes} {...other} />;
};

export const StyledValueTitle = withStyles(valueTitleStyles)(ValueTitle);

// StyledFormControl

const formControlStyles = theme => ({
  root: {
    minWidth: 200,
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
