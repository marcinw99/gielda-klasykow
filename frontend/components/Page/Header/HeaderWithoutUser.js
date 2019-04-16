import React from "react";
import { Button, Grid, Fade } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    margin: theme.spacing.unit
  },
  contained: {
    background: theme.palette.primary.dark
  },
  outlined: {
    color: theme.palette.primary.dark,
    borderColor: theme.palette.primary.dark
  }
});

const HeaderWithoutUser = props => (
  <Fade
    in={Boolean(!props.thisUser)}
    mountOnEnter
    unmountOnExit
    timeout={{ enter: 1000, exit: 0 }}
  >
    <Grid
      justify="flex-end"
      container
      direction={props.mobile ? "column" : "row"}
    >
      <Button
        color="primary"
        variant="contained"
        classes={props.classes}
        aria-haspopup="true"
        onClick={props.openRegister}
      >
        Rejestracja
      </Button>
      <Button
        color="primary"
        variant="outlined"
        classes={props.classes}
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
