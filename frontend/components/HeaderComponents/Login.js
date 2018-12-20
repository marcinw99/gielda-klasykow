import React from "react";
import {
  Typography,
  FormControl,
  Input,
  InputLabel,
  FormControlLabel,
  Button,
  Checkbox
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import StyledPopover from "./StyledPopover";

const styles = theme => ({
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

const Login = props => (
  <StyledPopover
    id="login-popper"
    open={props.open}
    anchorEl={props.anchorEl}
    handleClose={props.handleClose}
  >
    <Typography variant="h4" color="primary">
      Zaloguj się
    </Typography>
    <form>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="email">Adres email</InputLabel>
        <Input id="email" name="email" autoComplete="email" autoFocus />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="password">Hasło</InputLabel>
        <Input id="password" name="password" autoComplete="password" />
      </FormControl>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Zapamiętaj mnie"
      />
      <Button
        className={props.classes.submit}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Zaloguj się
      </Button>
    </form>
  </StyledPopover>
);

export default withStyles(styles)(Login);
