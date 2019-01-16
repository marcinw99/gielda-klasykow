import React, { Component, Fragment } from "react";
import { Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";

import FormField from "../../../universal/FormField";
import StrengthLevelLabel from "../../../universal/StrengthLevelLabel";
import StyledPopover from "../StyledPopover";
import { updatePasswordStrength } from "../../../../src/dataValidation";
import { SIGNUP_MUTATION } from "../../../../src/Mutations/Login";
import { CURRENT_USER_QUERY } from "../../../../src/QueryComponents/User";

const styles = theme => ({
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

const initialState = {
  name: "",
  email: "",
  password: "",
  passwordRepeat: "",
  canSubmit: false,
  passwordErrors: [],
  passwordStrengthLevel: "weak"
};

class Register extends Component {
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

  handlePasswordChange = event => {
    const { name, value } = event.target;
    event.preventDefault();
    if (value.length >= 30) {
      return null;
    }
    this.setState(
      {
        [name]: value
      },
      () => {
        const {
          passwordErrors,
          passwordStrengthLevel
        } = updatePasswordStrength({
          password: this.state.password,
          passwordRepeat: this.state.passwordRepeat
        });
        const canSubmit = passwordErrors.length === 0 ? true : false;
        this.setState({ passwordErrors, canSubmit, passwordStrengthLevel });
      }
    );
  };

  render() {
    return (
      <StyledPopover
        id="register-popper"
        open={this.props.open}
        anchorEl={this.props.anchorEl}
        handleClose={() =>
          this.setState(initialState, () => {
            this.props.handleClose();
          })
        }
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
                if (this.state.canSubmit) {
                  await send();
                  this.setState(initialState);
                  this.props.handleClose();
                }
              }}
            >
              <FormField
                label="Nazwa konta"
                name="name"
                value={this.state.name}
                autoFocus={true}
                onChange={this.handleChange}
                inputProps={{
                  minLength: 4
                }}
              />
              <FormField
                label="Adres email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <FormField
                label="Hasło"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <StrengthLevelLabel level={this.state.passwordStrengthLevel} />
              <FormField
                label="Powtórz hasło"
                name="passwordRepeat"
                type="password"
                value={this.state.passwordRepeat}
                onChange={this.handlePasswordChange}
              />
              <Typography color="error">
                {this.state.passwordErrors.map(item => (
                  <p key={item}>
                    {item} <br />
                  </p>
                ))}
              </Typography>
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

Register.propTypes = {
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.object,
  handleClose: PropTypes.func.isRequired
};

export default withStyles(styles)(Register);
