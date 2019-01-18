import React, { Component } from "react";
import { Mutation } from "react-apollo";
import {
  Button,
  Paper,
  FormControl,
  Input,
  InputLabel,
  Typography,
  withStyles
} from "@material-ui/core";

import Error from "../universal/Error";
import StrengthLevelLabel from "../universal/StrengthLevelLabel";
import { updatePasswordStrength } from "../../src/dataValidation";
import { RESETPASSWORD_MUTATION } from "../../src/Mutations/PasswordReset";

const styles = theme => ({
  container: {
    width: "auto",
    display: "block",
    margin: `${theme.spacing.unit * 3} auto 0 auto`,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  form: {
    width: "100%"
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class Layout extends Component {
  state = {
    password: "",
    repeatedPassword: "",
    passwordStrengthLevel: "weak",
    passwordErrors: []
  };

  handleChange = event => {
    event.preventDefault();
    if (event.target.value.length >= 30) {
      return null;
    }
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        const {
          passwordErrors,
          passwordStrengthLevel
        } = updatePasswordStrength({
          password: this.state.password,
          repeatedPassword: this.state.repeatedPassword
        });
        const canSubmit = passwordErrors.length === 0 ? true : false;
        this.setState({ passwordErrors, canSubmit, passwordStrengthLevel });
      }
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.container}>
        <Paper className={classes.paper}>
          <Typography variant="h4" color="primary">
            Resetowanie hasła
          </Typography>
          <Mutation
            mutation={RESETPASSWORD_MUTATION}
            variables={{
              resetToken: this.props.token,
              password: this.state.password,
              repeatedPassword: this.state.repeatedPassword
            }}
          >
            {(send, { error, loading }) => (
              <form
                method="post"
                className={classes.form}
                onSubmit={async event => {
                  event.preventDefault();
                  await send();
                }}
              >
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Wpisz nowe hasło</InputLabel>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    autoFocus
                  />
                </FormControl>
                <StrengthLevelLabel level={this.state.passwordStrengthLevel} />
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="repeatedPassword">
                    Potwierdź hasło
                  </InputLabel>
                  <Input
                    type="password"
                    id="repeatedPassword"
                    name="repeatedPassword"
                    value={this.state.repeatedPassword}
                    onChange={this.handleChange}
                  />
                </FormControl>
                <Typography color="error">
                  {this.state.passwordErrors.map(item => (
                    <span key={item}>
                      {item} <br />
                    </span>
                  ))}
                  <Error error={error} />
                </Typography>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Zmień hasło
                </Button>
              </form>
            )}
          </Mutation>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Layout);
