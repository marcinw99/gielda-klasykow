import React, { Component } from "react";
import { Mutation } from "react-apollo";
import {
  Grid,
  Fade,
  Menu,
  IconButton,
  Typography,
  NoSsr
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  ArrowBack as ArrowBackIcon,
  AccessTime as AccessTimeIcon,
  LocalOffer as LocalOfferIcon,
  Create as CreateIcon
} from "@material-ui/icons";
import PropTypes from "prop-types";
import Router from "next/router";
import gql from "graphql-tag";

import { StyledMenuItem, StyledName } from "./styledComponents";
import { SIGNOUT_MUTATION } from "../../../../src/Mutations/Login";
import { CURRENT_USER_QUERY } from "../../../../src/QueryComponents/User";
import { withSnackbar } from "../../../Snackbar/Context";

const REPEAT_CONFIRMATION_EMAIL = gql`
  mutation REPEAT_CONFIRMATION_EMAIL($email: String!) {
    repeatEmailWithConfirmationToken(email: $email) {
      code
    }
  }
`;

class HeaderWithUser extends Component {
  state = {
    anchorEl: null,
    confirmationEmailSent: false
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  handleAddPost = () => {
    this.handleClose();
    Router.push("/dodajklasyka");
  };

  handleConfirmationEmailResult = ({ error, data }) => {
    if (data) {
      this.props.manageSnackbar({
        open: true,
        message: "Wysłaliśmy e-mail, sprawdź skrzynkę pocztową.",
        variant: "success"
      });
      this.setState({ confirmationEmailSent: true, anchorEl: null });
    } else if (error) {
      this.props.manageSnackbar({
        open: true,
        message: "Wystąpił problem podczas wysyłania e-maila.",
        variant: "error"
      });
    }
  };

  render() {
    const menuOptions = [
      { label: "Obserwowane oferty", icon: <AccessTimeIcon /> },
      { label: "Moje ogłoszenia", icon: <LocalOfferIcon /> },
      {
        label: "Dodaj ogłoszenie",
        icon: <CreateIcon />,
        handleClick: this.handleAddPost
      }
    ];
    return (
      <Fade
        in={Boolean(this.props.thisUser)}
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 1200, exit: 0 }}
      >
        <Grid justify="flex-end" alignItems="center" container direction="row">
          <StyledName>
            {this.props.thisUser && this.props.thisUser.name}
          </StyledName>
          <IconButton onClick={this.handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={this.state.anchorEl}
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
          >
            {menuOptions.map(item => (
              <StyledMenuItem
                key={item.label}
                onClick={item.handleClick ? item.handleClick : this.handleClose}
              >
                <Grid container justify="space-between">
                  {item.icon}
                  {item.label}
                </Grid>
              </StyledMenuItem>
            ))}
            {this.state.confirmationEmailSent === false &&
            this.props.thisUser &&
            this.props.thisUser.emailConfirmed !== true ? (
              <Mutation
                mutation={REPEAT_CONFIRMATION_EMAIL}
                variables={{ email: this.props.thisUser.email }}
              >
                {(send, payload) => {
                  this.handleConfirmationEmailResult(payload);
                  return (
                    <StyledMenuItem onClick={send}>
                      <Typography color="secondary">
                        Wyślij link aktywujący konto jeszcze raz
                      </Typography>
                    </StyledMenuItem>
                  );
                }}
              </Mutation>
            ) : null}
            <SignOut onClick={this.handleClose}>
              <Grid container justify="space-between">
                <ArrowBackIcon /> Wyloguj się
              </Grid>
            </SignOut>
          </Menu>
        </Grid>
      </Fade>
    );
  }
}

const SignOut = ({ onClick, children }) => {
  return (
    <Mutation
      mutation={SIGNOUT_MUTATION}
      refetchQueries={[
        {
          query: CURRENT_USER_QUERY
        }
      ]}
    >
      {send => (
        <StyledMenuItem
          onClick={() => {
            onClick();
            send();
          }}
        >
          {children}
        </StyledMenuItem>
      )}
    </Mutation>
  );
};

HeaderWithUser.propTypes = {
  thisUser: PropTypes.object
};

export default withSnackbar(HeaderWithUser);
