import React, { Component } from "react";
import { withSnackbar } from "../Snackbar/Context";

class AfterLoginActions extends Component {
  componentDidMount() {
    if (
      this.props.data.thisUser &&
      this.props.data.thisUser.emailConfirmed !== true
    ) {
      this.props.manageSnackbar({
        open: true,
        message: `Twoje konto nie jest aktywowane i zostanie usunięte w czasie 24 godzin po rejestracji.`,
        variant: "warning"
      });
    }
  }
  render() {
    return null;
  }
}

export default withSnackbar(AfterLoginActions);
