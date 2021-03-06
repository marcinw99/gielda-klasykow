import React, { Component, Fragment } from "react";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";
import { Typography, LinearProgress } from "@material-ui/core";

import { withSnackbar } from "../../../Snackbar/Context";
import {
  StyledSubmit,
  StyledTitle,
  StyledSwitchView
} from "../styledComponents";
import getErrorMessage from "../../../universal/getErrorMessage";
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

  onCompleted = () => {
    this.props.manageSnackbar({
      open: true,
      message: `Wiadomość z kodem została wysłana na podany adres e-mail.`,
      variant: "success"
    });
  };

  render() {
    return (
      <Fragment>
        <StyledTitle>Zresetuj hasło</StyledTitle>
        <Mutation
          mutation={REQUESTPASSWORDRESET_MUTATION}
          variables={{
            email: this.state.emailReset
          }}
          onCompleted={this.onCompleted}
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
              <StyledSwitchView onClick={this.props.switchView}>
                Dobra przypomniałem sobie
              </StyledSwitchView>
              <Typography color="secondary" gutterBottom>
                {getErrorMessage(error)}
              </Typography>
              {loading ? <LinearProgress /> : null}
              <StyledSubmit>Zresetuj hasło</StyledSubmit>
            </form>
          )}
        </Mutation>
      </Fragment>
    );
  }
}

ResetPasswordRequest.propTypes = {
  handleClose: PropTypes.func.isRequired,
  switchView: PropTypes.func.isRequired
};

export default withSnackbar(ResetPasswordRequest);
