import React, { Component, Fragment } from "react";
import {
  Typography,
  FormControlLabel,
  Button,
  Checkbox,
  Grid
} from "@material-ui/core";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";

import FormField from "../../../universal/FormField";
import { SIGNIN_MUTATION } from "../../../../src/Mutations/Login";
import { CURRENT_USER_QUERY } from "../../../../src/QueryComponents/User";

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
              <FormField
                label="Adres email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                autoFocus={true}
                inputProps={{
                  maxLength: 30
                }}
              />
              <FormField
                label="Hasło"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                inputProps={{
                  maxLength: 30
                }}
              />
              <Grid container justify="space-between">
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Zapamiętaj mnie"
                />
                <Button
                  onClick={this.props.switchView}
                  variant="outlined"
                  className={this.props.switchViewBtnCss}
                >
                  Nie pamiętam hasła
                </Button>
              </Grid>

              <Button
                className={this.props.submitBtnCss}
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
    );
  }
}

Login.propTypes = {
  handleClose: PropTypes.func.isRequired,
  switchView: PropTypes.func.isRequired,
  submitBtnCss: PropTypes.string.isRequired,
  switchViewBtnCss: PropTypes.string.isRequired
};

export default Login;
