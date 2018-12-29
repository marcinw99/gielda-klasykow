import React, { Component } from "react";
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
import { Mutation } from "react-apollo";

import StyledPopover from "./StyledPopover";
import { SIGNIN_MUTATION } from "../../src/Mutations/HeaderMutations";

const styles = theme => ({
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

const initialState = {
  email: "",
  password: ""
};

class Login extends Component {
  state = initialState;

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <StyledPopover
        id="login-popper"
        open={this.props.open}
        anchorEl={this.props.anchorEl}
        handleClose={this.props.handleClose}
      >
        <Typography variant="h4" color="primary">
          Zaloguj się
        </Typography>
        <Mutation
          mutation={SIGNIN_MUTATION}
          variables={{
            email: this.state.email,
            password: this.state.password
          }}
        >
          {(send, { error, loading }) => (
            <form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await send();
                this.setState(initialState);
                this.props.handleClose();
              }}
            >
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Adres email</InputLabel>
                <Input
                  onChange={this.handleChange}
                  value={this.state.email}
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Hasło</InputLabel>
                <Input
                  onChange={this.handleChange}
                  value={this.state.password}
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="password"
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Zapamiętaj mnie"
              />
              <Button
                className={this.props.classes.submit}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Zaloguj się
              </Button>
            </form>
          )}
        </Mutation>
      </StyledPopover>
    );
  }
}

export default withStyles(styles)(Login);
