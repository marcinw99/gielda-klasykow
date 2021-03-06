import React from "react";
import { Fab, Grid } from "@material-ui/core";
import { Brightness3, Brightness7 } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const themeTogglerStyles = () => ({
  root: {
    position: "fixed",
    bottom: 20,
    right: 20
  }
});

const ThemeTogglerComponent = props => {
  const { classes, darkTheme, ...other } = props;
  return (
    <Fab size="small" color="primary" classes={classes} {...other}>
      {darkTheme ? <Brightness7 /> : <Brightness3 />}
    </Fab>
  );
};

export const ThemeToggler = withStyles(themeTogglerStyles)(
  ThemeTogglerComponent
);

// StyledContentContainer

const contentContainerStyles = theme => ({
  root: {
    minHeight: "100vh"
  }
});

const ContentContainer = ({ classes, ...other }) => (
  <Grid
    container
    direction="column"
    justify="space-between"
    className={classes.root}
    {...other}
  />
);

export const StyledContentContainer = withStyles(contentContainerStyles)(
  ContentContainer
);

// StyledContent

const contentStyles = theme => ({
  root: {
    flex: 1,
    paddingBottom: theme.spacing.unit * 3
  }
});

const Content = ({ classes, ...other }) => (
  <Grid item className={classes.root} {...other} />
);

export const StyledContent = withStyles(contentStyles)(Content);
