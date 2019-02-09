import React from "react";
import { withStyles, Grid, CircularProgress } from "@material-ui/core";

import Photo from "./Photo";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit,
    width: "100%",
    height: "400px",
    overflowY: "auto"
  },
  item: {
    margin: theme.spacing.unit
  },
  loadingRoot: {
    width: 250,
    textAlign: "center"
  },
  loading: {
    marginTop: theme.spacing.unit * 1.5
  }
});

const PhotoPreviews = props => {
  const handleRemove = photo => {
    var prevPhotos = [...props.photos];
    const newPhotos = prevPhotos.filter(item => item.preview !== photo.preview);
    props.handleChange({
      name: "photos",
      value: newPhotos
    });
  };

  return (
    <Grid
      container
      justify="flex-start"
      alignContent="flex-start"
      className={props.classes.root}
    >
      {props.photos.map(item => (
        <Grid item className={props.classes.item} key={item.preview}>
          <Photo
            item={item}
            avatar={props.avatar}
            handleChange={props.handleChange}
            handleRemove={handleRemove}
          />
        </Grid>
      ))}
      {props.loading ? (
        <Grid item className={props.classes.item}>
          <div className={props.classes.loadingRoot}>
            <CircularProgress size={60} className={props.classes.loading} />
          </div>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default withStyles(styles)(PhotoPreviews);
