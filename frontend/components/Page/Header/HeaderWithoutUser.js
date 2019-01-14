import React from "react";
import { Button, Grid, Fade } from "@material-ui/core";

export default props => (
  <Fade
    in={Boolean(!props.thisUser)}
    mountOnEnter
    unmountOnExit
    timeout={{ enter: 1000, exit: 0 }}
  >
    <Grid justify="flex-end" container direction="row">
      <Button
        variant="outlined"
        className={props.classes.buttons}
        aria-haspopup="true"
        onClick={props.openRegister}
      >
        Rejestracja
      </Button>
      <Button
        variant="outlined"
        className={props.classes.buttons}
        aria-haspopup="true"
        onClick={props.openLogin}
      >
        Zaloguj się
      </Button>
    </Grid>
  </Fade>
);
