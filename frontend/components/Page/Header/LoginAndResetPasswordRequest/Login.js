import React, { Component, Fragment } from "react";
import { FormControlLabel, Checkbox, Grid } from "@material-ui/core";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";

import {
  StyledSubmit,
  StyledTitle,
  StyledSwitchView
} from "../styledComponents";
import Error from "../../../universal/Error";
import FormField from "../../../universal/FormField";
import { SIGNIN_MUTATION } from "../../../../src/Mutations/Login";
import { CURRENT_USER_QUERY } from "../../../../src/QueryComponents/User";

const initialState = {
  email: "",
  password: "",
  rememberMe: false
};

class Login extends Component {
  state = initialState;

  handleChange = event => {
    event.preventDefault();
    if (event.target.value.length >= 30) {
      return null;
    }
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCheckboxChange = name => event => {
    this.setState({
      [name]: event.target.checked
    });
  };

  render() {
    return (
      <Fragment>
        <StyledTitle>Zaloguj się</StyledTitle>
        <Mutation
          mutation={SIGNIN_MUTATION}
          variables={{ ...this.state }}
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
              />
              <FormField
                label="Hasło"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <Error error={error} />
              <Grid container justify="space-between">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.rememberMe}
                      onChange={this.handleCheckboxChange("rememberMe")}
                      value="rememberMe"
                      color="primary"
                    />
                  }
                  label="Zapamiętaj mnie"
                />{" "}
                <StyledSwitchView onClick={this.props.switchView}>
                  Nie pamiętam hasła
                </StyledSwitchView>
              </Grid>
              <StyledSubmit>Zaloguj się</StyledSubmit>
            </form>
          )}
        </Mutation>
      </Fragment>
    );
  }
}

Login.propTypes = {
  handleClose: PropTypes.func.isRequired,
  switchView: PropTypes.func.isRequired
};

export default Login;
