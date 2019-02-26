import React from "react";
import { Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4
  }
});

const MustBeLoggedIn = props => {
  if (props.thisUser) return props.children;
  return (
    <div className={props.classes.root}>
      <Typography align="center" variant="h5" color="secondary">
        Musisz być zalogowany aby móc dodać ogłoszenie
      </Typography>
    </div>
  );
};

export default withStyles(styles)(MustBeLoggedIn);
