import React from "react";
import { withStyles, Stepper, Paper } from "@material-ui/core";

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

const PaperComponent = props => <Paper {...props} />;

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
