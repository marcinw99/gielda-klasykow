import React from "react";
import {
  Typography,
  FormControl,
  Input,
  InputLabel,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import StyledPopover from "./StyledPopover";

const styles = theme => ({
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

const Register = props => (
  <StyledPopover
    id="register-popper"
    open={props.open}
    anchorEl={props.anchorEl}
    handleClose={props.handleClose}
  >
    <Typography variant="h4" color="primary">
      Rejestracja
    </Typography>
    <form>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="name">Nazwa konta</InputLabel>
        <Input id="name" name="name" autoFocus />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="email">Adres email</InputLabel>
        <Input id="email" name="email" />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="password">Hasło</InputLabel>
        <Input id="password" name="password" />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="passwordRepeat">Powtórz hasło</InputLabel>
        <Input id="passwordRepeat" name="passwordRepeat" />
      </FormControl>
      <Button
        className={props.classes.submit}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Zarejestruj się
      </Button>
    </form>
  </StyledPopover>
);

export default withStyles(styles)(Register);
