import React, { Component } from "react";
import PropTypes from "prop-types";

import Login from "./Login";
import ResetPasswordRequest from "./ResetPasswordRequest";
import { StyledPopover } from "../styles";

class LoginAndResetPasswordRequest extends Component {
  state = { forgotPasswordLayout: false };

  switchView = () => {
    this.setState(prevState => ({
      forgotPasswordLayout: !prevState.forgotPasswordLayout
    }));
  };

  render() {
    return (
      <StyledPopover
        id="login-popper"
        open={this.props.open}
        anchorEl={this.props.anchorEl}
        handleClose={this.props.handleClose}
      >
        {this.state.forgotPasswordLayout ? (
          <ResetPasswordRequest
            handleClose={this.props.handleClose}
            switchView={this.switchView}
          />
        ) : (
          <Login
            handleClose={this.props.handleClose}
            switchView={this.switchView}
          />
        )}
      </StyledPopover>
    );
  }
}

LoginAndResetPasswordRequest.propTypes = {
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.object,
  handleClose: PropTypes.func.isRequired
};

export default LoginAndResetPasswordRequest;
