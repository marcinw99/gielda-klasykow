import React from "react";
import { Button, withStyles, Grid, Typography } from "@material-ui/core";

import PhotoPreviews from "./PhotoPreviews";

const styles = theme => ({
  error: {
    fontSize: 18
  }
});

const Photos = props => (
  <div>
    <Grid container justify="space-between">
      <Grid item>
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="input-upload-photos"
          multiple
          type="file"
          onChange={props.handleNewPhotos}
        />
        <label htmlFor="input-upload-photos">
          <Button variant="contained" color="primary" component="span">
            Dodaj kilka zdjęć
          </Button>
        </label>
      </Grid>
      <Grid item>
        {props.values.photos.length > 0 && !props.values.avatar ? (
          <Typography
            color="secondary"
            variant="h6"
            className={props.classes.error}
          >
            Kliknij na zdjęcie aby ustawić je jako miniaturkę ogłoszenia
          </Typography>
        ) : null}
      </Grid>
    </Grid>
    <PhotoPreviews
      loading={props.loadingPhotos}
      photos={props.values.photos}
      avatar={props.values.avatar}
      handleChange={props.handleChange}
    />
  </div>
);

export default withStyles(styles)(Photos);
