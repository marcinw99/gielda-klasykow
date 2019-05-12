import React from "react";
import { Grid, Typography, Fab } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const Header = props => {
  return (
    <Grid container justify="space-between">
      <Typography variant="h4" color="primary">
        {props.title}
      </Typography>
      <Fab size="small" onClick={props.handleClose}>
        <Close />
      </Fab>
    </Grid>
  );
};

export default Header;
