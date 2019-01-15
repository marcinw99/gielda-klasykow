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
    passwordRepeat: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
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
              passwordRepeat: this.state.passwordRepeat
            }}
          >
            {send => (
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
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="passwordRepeat">
                    Potwierdź hasło
                  </InputLabel>
                  <Input
                    type="password"
                    id="passwordRepeat"
                    name="passwordRepeat"
                    value={this.state.passwordRepeat}
                    onChange={this.handleChange}
                  />
                </FormControl>
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
