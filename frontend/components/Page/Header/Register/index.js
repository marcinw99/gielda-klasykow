import React, { Component, Fragment } from "react";
import { Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";

import FormField from "./FormField";
import StyledPopover from "../StyledPopover";
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
  errors: []
};

class Register extends Component {
  state = initialState;

  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handlePasswordChange = event => {
    const { name, value } = event.target;
    event.preventDefault();
    this.setState(
      {
        [name]: value
      },
      () => {
        this.updatePasswordStrength({ name, value });
      }
    );
  };

  updatePasswordStrength = ({ name, value }) => {
    let errors = [];
    // weak - can't submit
    // average - 6 chars, min 1 number, min 1 letter
    // strong - average with 8 chars and min 1 special character

    const regExpressions = [
      {
        regexp: new RegExp("\\d"),
        message: "Hasło nie zawiera minimum jednej cyfry."
      },
      {
        regexp: new RegExp("[a-z]", "i"),
        message: "Hasło nie zawiera minimum jednej litery."
      },
      {
        regexp: new RegExp(".{6,}"),
        message: "Hasło nie zawiera minimum 6 znaków."
      }
    ];

    regExpressions.map(item => {
      if (!item.regexp.test(value)) {
        errors.push(item.message);
      }
    });

    if (this.state.password !== this.state.passwordRepeat) {
      errors.push("Podane hasła nie som identyczne.");
    }

    const canSubmit = errors.length === 0 ? true : false;

    this.setState({
      errors,
      canSubmit
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
                if (this.state.canSubmit) {
                  await send();
                  this.setState(initialState);
                  this.props.handleClose();
                }
              }}
            >
              {[
                {
                  label: "Nazwa konta",
                  name: "name",
                  value: this.state.name,
                  autoFocus: true,
                  onChange: this.handleChange
                },
                {
                  label: "Adres email",
                  name: "email",
                  type: "email",
                  value: this.state.email,
                  onChange: this.handleChange
                },
                {
                  label: "Hasło",
                  name: "password",
                  type: "password",
                  value: this.state.password,
                  onChange: this.handlePasswordChange
                },
                {
                  label: "Powtórz hasło",
                  name: "passwordRepeat",
                  type: "password",
                  value: this.state.passwordRepeat,
                  onChange: this.handlePasswordChange
                }
              ].map(item => (
                <FormField key={item.id} {...item} />
              ))}

              {this.state.errors && (
                <Typography color="error">
                  {this.state.errors.map(item => (
                    <Fragment>
                      {item} <br />
                    </Fragment>
                  ))}
                </Typography>
              )}
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
