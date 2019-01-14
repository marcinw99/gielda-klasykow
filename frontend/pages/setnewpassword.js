import React, { Component } from "react";
import Router from "next/router";
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

import { SIGNOUT_MUTATION } from "../src/Mutations/HeaderMutations";
import { RESETPASSWORD_MUTATION } from "../src/Mutations/UserMutations";
import { CURRENT_USER_QUERY } from "../src/Queries/User";

const RootComponent = props => {
  if (props.thisUser) {
    return (
      <Mutation
        mutation={SIGNOUT_MUTATION}
        refetchQueries={[
          {
            query: CURRENT_USER_QUERY
          }
        ]}
      >
        {send => {
          send();
          return null;
        }}
      </Mutation>
    );
  }
  return <SetNewPassword token={props.token} />;
};

RootComponent.getInitialProps = async function(ctx) {
  if (shouldRedirect(ctx.query)) {
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: "/"
      });
      ctx.res.end();
    } else {
      Router.push("/");
    }
  }
  return { token: ctx.query.token };
};

function shouldRedirect(query) {
  if (!query.token || query.token.length !== 40) {
    return true;
  } else return false;
}

// Code above performs token validation and logs out when is user is logged in

// Code below handles password setting

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

const SetNewPassword = withStyles(styles)(
  class SetNewPassword extends Component {
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
);

export default RootComponent;
