import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";

import Gallery from "./Gallery";

const styles = theme => ({
  root: {
    paddingBottom: theme.spacing.unit * 2
  },
  infoContainer: {
    padding: theme.spacing.unit * 1.5
  }
});

const Layout = props => {
  return (
    <Grid container className={props.classes.root}>
      <Grid item xs={6}>
        <Gallery avatar={props.post.avatar} photos={props.post.photos || []} />
      </Grid>
      <Grid item xs={6} className={props.classes.infoContainer}>
        <Typography>
          {props.post.car.brand} {props.post.car.model}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Layout);
