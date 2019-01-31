import React from "react";
import {
  Fab,
  LinearProgress,
  Typography,
  Switch,
  FormControl
} from "@material-ui/core";
import { Search, Clear } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

// StyledFabs

const fabStyles = theme => ({
  root: {
    color: theme.palette.primary.dark,
    background: theme.palette.primary.contrastText,
    margin: theme.spacing.unit * 0.5
  }
});

const ClearFab = props => {
  const { classes, ...other } = props;
  return (
    <Fab color="default" classes={classes} {...other}>
      <Clear />
    </Fab>
  );
};

const SearchFab = props => {
  const { classes, ...other } = props;
  return (
    <Fab color="default" classes={classes} {...other}>
      <Search />
    </Fab>
  );
};

export const StyledClearFab = withStyles(fabStyles)(ClearFab);

export const StyledSearchFab = withStyles(fabStyles)(SearchFab);

// StyledSearchDrawerLoadingScreen

const searchDrawerStyles = theme => ({
  root: {
    textAlign: "center"
  }
});

const SearchDrawerLoadingScreen = ({ classes }) => (
  <div classes={classes}>
    <LinearProgress size={100} />
  </div>
);

export const StyledSearchDrawerLoadingScreen = withStyles(searchDrawerStyles)(
  SearchDrawerLoadingScreen
);

// SearchDrawerError

export const SearchDrawerError = () => (
  <Typography variant="h6" color="secondary">
    Błąd przy pobieraniu opcji filtrowania
  </Typography>
);

// StyledFilterTitle

const filterTitleStyles = theme => ({
  root: {
    color: theme.palette.primary.contrastText,
    fontSize: 18,
    marginTop: theme.spacing.unit
  }
});

const FilterTitle = props => {
  const { classes, ...other } = props;
  return <Typography align="left" variant="h6" classes={classes} {...other} />;
};

export const StyledFilterTitle = withStyles(filterTitleStyles)(FilterTitle);

// StyledSwitch

const switchStyles = theme => ({
  icon: {
    color: grey[500]
  },
  iconChecked: {
    color: grey[50]
  }
});

const SwitchComponent = props => {
  const { classes, ...other } = props;
  return <Switch color="default" classes={classes} {...other} />;
};

export const StyledSwitch = withStyles(switchStyles)(SwitchComponent);

// StyledExtendedFab

const extendedFabStyles = theme => ({
  root: {
    color: theme.palette.primary.dark,
    paddingLeft: theme.spacing.unit * 1.5,
    paddingRight: theme.spacing.unit * 1.5,
    margin: `${theme.spacing.unit * 0.8}px ${theme.spacing.unit * 0.5}px`
  }
});

const ExtendedFab = props => {
  const { classes, ...other } = props;
  return (
    <Fab classes={classes} variant="extended" color="default" {...other} />
  );
};

export const StyledExtendedFab = withStyles(extendedFabStyles)(ExtendedFab);

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
