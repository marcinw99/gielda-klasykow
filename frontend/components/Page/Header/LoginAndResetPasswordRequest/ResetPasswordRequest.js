import React, { Component, Fragment } from "react";
import { Typography, Button } from "@material-ui/core";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";

import Error from "../../../universal/Error";
import FormField from "../../../universal/FormField";
import { REQUESTPASSWORDRESET_MUTATION } from "../../../../src/Mutations/PasswordReset";

const initialState = {
  emailReset: ""
};

class ResetPasswordRequest extends Component {
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

  render() {
    return (
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
              <FormField
                label="Adres email"
                name="emailReset"
                type="email"
                value={this.state.emailReset}
                onChange={this.handleChange}
                autoFocus={true}
              />
              <Button
                onClick={this.props.switchView}
                variant="outlined"
                className={this.props.switchViewBtnCss}
              >
                Dobra przypomniałem sobie
              </Button>
              <Error error={error} />
              <Button
                className={this.props.submitBtnCss}
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
    );
  }
}

ResetPasswordRequest.propTypes = {
  handleClose: PropTypes.func.isRequired,
  switchView: PropTypes.func.isRequired,
  submitBtnCss: PropTypes.string.isRequired,
  switchViewBtnCss: PropTypes.string.isRequired
};

export default ResetPasswordRequest;
