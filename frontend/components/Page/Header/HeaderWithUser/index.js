import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { Grid, Fade, Menu, IconButton } from "@material-ui/core";
import {
  Menu as MenuIcon,
  ArrowBack as ArrowBackIcon,
  AccessTime as AccessTimeIcon,
  LocalOffer as LocalOfferIcon,
  Create as CreateIcon
} from "@material-ui/icons";
import PropTypes from "prop-types";
import Router from "next/router";

import { StyledMenuItem, StyledName } from "./styledComponents";
import { SIGNOUT_MUTATION } from "../../../../src/Mutations/Login";
import { CURRENT_USER_QUERY } from "../../../../src/QueryComponents/User";

class HeaderWithUser extends Component {
  state = {
    anchorEl: null
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
    Router.push("/add");
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

export default HeaderWithUser;
