import React from "react";

import { Typography, withStyles, Grid, Paper } from "@material-ui/core";
import displayedText from "../../resources/displayedText";

const styles = theme => ({
  root: {
    width: 400,
    height: 300,
    position: "relative"
  },
  img: {
    height: 300,
    width: "auto",
    maxWidth: 400
  },
  infoContainer: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: 0,
    right: 0,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 1.5}px`,
    background: "rgba(78,52,46,0.9)"
  },
  leftTypography: {
    color: theme.palette.primary.contrastText
  }
});

function Post({ classes, data }) {
  return (
    <Paper square elevation={6} className={classes.root}>
      <img
        className={classes.img}
        src={data.avatar || "/static/noImageAvailable.jpg"}
        alt="Photo"
      />
      <Grid container justify="space-between" className={classes.infoContainer}>
        <Typography
          variant="h6"
          className={classes.leftTypography}
        >{`${displayedText("brand", data.car.brand)} ${data.car.model ||
          ""}`}</Typography>
        <Typography variant="h6" color="secondary">
          {data.price} PLN
        </Typography>
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(Post);
