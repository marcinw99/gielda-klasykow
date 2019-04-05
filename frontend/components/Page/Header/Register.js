import React, { Component, Fragment } from "react";
import { Typography } from "@material-ui/core";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";

import getErrorMessage from "../../universal/getErrorMessage";
import FormField from "../../universal/FormField";
import StrengthLevelLabel from "../../universal/StrengthLevelLabel";
import { StyledPopover, StyledSubmit, StyledTitle } from "./styledComponents";
import { updatePasswordStrength } from "../../../src/dataValidation";
import { SIGNUP_MUTATION } from "../../../src/Mutations/Login";
import { CURRENT_USER_QUERY } from "../../../src/QueryComponents/User";
import { withSnackbar } from "../../Snackbar/Context";
import ConfirmationDialog from "../../universal/ConfirmationDialog";

const initialState = {
  name: "",
  email: "",
  password: "",
  repeatedPassword: "",
  canSubmit: false,
  passwordErrors: [],
  passwordStrengthLevel: "weak",
  dialogOpen: false,
  dialogAttributes: {
    action: "",
    title: "",
    content: ""
  }
};

const userInputsNames = ["name", "email", "password", "repeatedPassword"];

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
          repeatedPassword: this.state.repeatedPassword
        });
        const canSubmit = passwordErrors.length === 0 ? true : false;
        this.setState({ passwordErrors, canSubmit, passwordStrengthLevel });
      }
    );
  };

  confirmPopoverClose = () => {
    var changedFields = userInputsNames.map(
      name => this.state[name].length > 0
    );
    if (changedFields.includes(true)) {
      this.setState({
        dialogOpen: true,
        dialogAttributes: {
          action: "close",
          title: "Czy na pewno chcesz zamknąć okno rejestracji?",
          content:
            "Wprowadziłeś zmiany, a formularz zostanie zresetowany po zamknięciu."
        }
      });
    } else {
      this.handleConfirmedPopoverClose();
    }
  };

  confirmHandler = action => {
    switch (action) {
      case "close":
        this.handleConfirmedPopoverClose();
        break;
      default:
        break;
    }
  };

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  handleConfirmedPopoverClose = () => {
    this.setState(initialState, () => {
      this.props.handleClose();
    });
  };

  render() {
    return (
      <Fragment>
        <StyledPopover
          id="register-popper"
          open={this.props.open}
          anchorEl={this.props.anchorEl}
          handleClose={this.confirmPopoverClose}
        >
          <StyledTitle>Rejestracja</StyledTitle>
          <Mutation
            mutation={SIGNUP_MUTATION}
            variables={{
              name: this.state.name,
              email: this.state.email,
              password: this.state.password,
              repeatedPassword: this.state.repeatedPassword
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
                    this.props.manageSnackbar({
                      open: true,
                      message:
                        "Witaj, wysłaliśmy e-mail, sprawdź skrzynkę pocztową.",
                      variant: "success"
                    });
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
                  name="repeatedPassword"
                  type="password"
                  value={this.state.repeatedPassword}
                  onChange={this.handlePasswordChange}
                />
                <Typography color="error">
                  {this.state.passwordErrors.map(item => (
                    <span key={item}>
                      {item} <br />
                    </span>
                  ))}
                </Typography>
                <Typography color="secondary" gutterBottom>
                  {getErrorMessage(error)}
                </Typography>
                <StyledSubmit>Zarejestruj się</StyledSubmit>
              </form>
            )}
          </Mutation>
        </StyledPopover>
        <ConfirmationDialog
          open={this.state.dialogOpen}
          {...this.state.dialogAttributes}
          handleClose={this.handleDialogClose}
          confirmHandler={this.confirmHandler}
        />
      </Fragment>
    );
  }
}

Register.propTypes = {
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.object,
  handleClose: PropTypes.func.isRequired
};

export default withSnackbar(Register);
