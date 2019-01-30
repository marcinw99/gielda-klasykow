import React from "react";
import { Fab, LinearProgress, Typography } from "@material-ui/core";
import { Search, Clear } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

// StyledFabs

const fabStyles = theme => ({
  root: {
    color: theme.palette.primary.dark,
    background: "#fafafa",
    margin: theme.spacing.unit * 0.5
  }
});

const ClearFab = ({ classes, rootProps }) => (
  <Fab color="default" className={classes.root} {...rootProps}>
    <Clear />
  </Fab>
);

const SearchFab = ({ classes, rootProps }) => (
  <Fab color="default" className={classes.root} {...rootProps}>
    <Search />
  </Fab>
);

export const StyledClearFab = withStyles(fabStyles)(ClearFab);

export const StyledSearchFab = withStyles(fabStyles)(SearchFab);

// StyledSearchDrawerLoadingScreen

const searchDrawerStyles = theme => ({
  root: {
    textAlign: "center"
  }
});

const SearchDrawerLoadingScreen = ({ classes }) => (
  <div className={classes.root}>
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
