import React from "react";
import { Button, Grid, Fade } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  buttons: {
    borderRadius: 0,
    margin: theme.spacing.unit
  }
});

const HeaderWithoutUser = props => (
  <Fade
    in={Boolean(!props.thisUser)}
    mountOnEnter
    unmountOnExit
    timeout={{ enter: 1000, exit: 0 }}
  >
    <Grid justify="flex-end" container direction="row">
      <Button
        color="primary"
        variant="contained"
        className={props.classes.buttons}
        aria-haspopup="true"
        onClick={props.openRegister}
      >
        Rejestracja
      </Button>
      <Button
        color="primary"
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

HeaderWithoutUser.propTypes = {
  thisUser: PropTypes.object,
  openRegister: PropTypes.func.isRequired,
  openLogin: PropTypes.func.isRequired
};

export default withStyles(styles)(HeaderWithoutUser);
