import React from "react";
import { Grid, Fab, Button } from "@material-ui/core";

const Footer = props => {
  return (
    <Grid container justify="space-between">
      <Button variant="text" onClick={props.handleReset}>
        Wyczyść filtry
      </Button>
      <Fab variant="extended" color="secondary" onClick={props.handleSubmit}>
        Zapisz
      </Fab>
    </Grid>
  );
};

export default Footer;
