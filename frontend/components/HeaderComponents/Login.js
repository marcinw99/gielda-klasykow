import React, { Component, Fragment } from "react";
import {
  Typography,
  FormControl,
  Input,
  InputLabel,
  FormControlLabel,
  Button,
  Checkbox,
  Grid
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Mutation } from "react-apollo";

import StyledPopover from "./StyledPopover";
import { SIGNIN_MUTATION } from "../../src/Mutations/Login";
import { REQUESTPASSWORDRESET_MUTATION } from "../../src/Mutations/PasswordReset";
import { CURRENT_USER_QUERY } from "../../src/QueryComponents/User";

const styles = theme => ({
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  forgotPasswordBtn: {
    textTransform: "none"
  }
});

const initialState = {
  email: "",
  emailReset: "",
  password: ""
};

class Login extends Component {
  state = { ...initialState, forgotPasswordLayout: false };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  switchView = () => {
    this.setState(prevState => ({
      forgotPasswordLayout: !prevState.forgotPasswordLayout
    }));
  };

  render() {
    return (
      <StyledPopover
        id="login-popper"
        open={this.props.open}
        anchorEl={this.props.anchorEl}
        handleClose={this.props.handleClose}
      >
        {this.state.forgotPasswordLayout ? (
          <Fragment>
            <Typography variant="h4" color="primary">
              Zresetuj hasło
            </Typography>
            <Mutation
              mutation={REQUESTPASSWORDRESET_MUTATION}
              variables={{
                email: this.state.emailReset
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
                      value={this.state.emailReset}
                      id="email"
                      name="emailReset"
                      autoComplete="email"
                      autoFocus
                    />
                  </FormControl>
                  <Button
                    onClick={this.switchView}
                    variant="outlined"
                    className={this.props.classes.forgotPasswordBtn}
                  >
                    Dobra przypomniałem sobie
                  </Button>
                  <Button
                    className={this.props.classes.submit}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Zresetuj hasło
                  </Button>
                </form>
              )}
            </Mutation>
          </Fragment>
        ) : (
          <Fragment>
            <Typography variant="h4" color="primary">
              Zaloguj się
            </Typography>
            <Mutation
              mutation={SIGNIN_MUTATION}
              variables={{
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
                  <Grid container justify="space-between">
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Zapamiętaj mnie"
                    />
                    <Button
                      onClick={this.switchView}
                      variant="outlined"
                      className={this.props.classes.forgotPasswordBtn}
                    >
                      Nie pamiętam hasła
                    </Button>
                  </Grid>

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
          </Fragment>
        )}
      </StyledPopover>
    );
  }
}

export default withStyles(styles)(Login);
