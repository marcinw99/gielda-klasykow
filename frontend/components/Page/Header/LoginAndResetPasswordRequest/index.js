import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import Login from "./Login";
import ResetPasswordRequest from "./ResetPasswordRequest";
import StyledPopover from "../StyledPopover";

const styles = theme => ({
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  switchViewBtn: {
    textTransform: "none"
  }
});

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
            submitBtnCss={this.props.classes.submit}
            switchViewBtnCss={this.props.classes.switchViewBtn}
          />
        ) : (
          <Login
            handleClose={this.props.handleClose}
            switchView={this.switchView}
            submitBtnCss={this.props.classes.submit}
            switchViewBtnCss={this.props.classes.switchViewBtn}
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

export default withStyles(styles)(LoginAndResetPasswordRequest);
