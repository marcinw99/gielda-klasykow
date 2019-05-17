import React, { Component } from "react";
import { Mutation } from "react-apollo";
import {
  Button,
  Paper,
  FormControl,
  Input,
  InputLabel,
  Typography,
  withStyles,
  LinearProgress
} from "@material-ui/core";
import { compose } from "recompose";

import { withSnackbar } from "../Snackbar/Context";
import getErrorMessage from "../universal/getErrorMessage";
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

  onCompleted = () => {
    this.props.manageSnackbar({
      open: true,
      message: `Nowe hasło zostało zapisane poprawnie.`,
      variant: "success"
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.container}>
        <Paper square className={classes.paper}>
          <Title>Resetowanie hasła</Title>
          <Mutation
            mutation={RESETPASSWORD_MUTATION}
            variables={{
              resetToken: this.props.token,
              password: this.state.password,
              repeatedPassword: this.state.repeatedPassword
            }}
            onCompleted={this.onCompleted}
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
                  <Typography color="secondary" gutterBottom>
                    {getErrorMessage(error)}
                  </Typography>
                </Typography>
                {loading ? <LinearProgress /> : null}
                <Submit className={classes.submit}>Zmień hasło</Submit>
              </form>
            )}
          </Mutation>
        </Paper>
      </main>
    );
  }
}

const Title = props => <Typography variant="h4" color="primary" {...props} />;

const Submit = props => (
  <Button
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
    {...props}
  />
);

export default compose(
  withStyles(styles),
  withSnackbar
)(Layout);
