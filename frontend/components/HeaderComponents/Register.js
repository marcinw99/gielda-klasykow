import React, { Component } from "react";
import {
  Typography,
  FormControl,
  Input,
  InputLabel,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Mutation } from "react-apollo";

import StyledPopover from "./StyledPopover";
import { SIGNUP_MUTATION } from "../../src/Mutations/HeaderMutations";
import { CURRENT_USER_QUERY } from "./User";

const styles = theme => ({
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

const initialState = {
  name: "",
  email: "",
  password: "",
  passwordRepeat: ""
};

class Register extends Component {
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
        id="register-popper"
        open={this.props.open}
        anchorEl={this.props.anchorEl}
        handleClose={this.props.handleClose}
      >
        <Typography variant="h4" color="primary">
          Rejestracja
        </Typography>
        <Mutation
          mutation={SIGNUP_MUTATION}
          variables={{
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
          }}
          refetchQueries={[
            {
              query: CURRENT_USER_QUERY
            }
          ]}
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
                <InputLabel htmlFor="name">Nazwa konta</InputLabel>
                <Input
                  onChange={this.handleChange}
                  value={this.state.name}
                  id="name"
                  name="name"
                  autoFocus
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Adres email</InputLabel>
                <Input
                  onChange={this.handleChange}
                  value={this.state.email}
                  type="email"
                  id="email"
                  name="email"
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
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="passwordRepeat">Powtórz hasło</InputLabel>
                <Input
                  onChange={this.handleChange}
                  value={this.state.passwordRepeat}
                  type="password"
                  id="passwordRepeat"
                  name="passwordRepeat"
                />
              </FormControl>
              <Button
                className={this.props.classes.submit}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Zarejestruj się
              </Button>
            </form>
          )}
        </Mutation>
      </StyledPopover>
    );
  }
}
export default withStyles(styles)(Register);
