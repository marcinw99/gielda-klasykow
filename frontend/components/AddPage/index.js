import React, { Component } from "react";
import { Typography, Grid } from "@material-ui/core";

import { Content } from "./styledComponents";
import Steps from "./Steps";
import Navigation from "./Navigation";

const initialState = {
  activeStep: 0
};

class AddPage extends Component {
  state = initialState;

  setValueInState = value => {
    this.setState({ ...value });
  };

  render() {
    if (!this.props.thisUser) {
      return (
        <Content>
          <Typography>
            Musisz być zalogowany aby muc dodać ogłoszenie
          </Typography>
        </Content>
      );
    }
    return (
      <Content>
        <Typography variant="h3" color="primary" align="center">
          Dodawanie ogłoszenia
        </Typography>
        <Grid container justify="flex-start">
          <Grid item xs={3}>
            <Steps
              activeStep={this.state.activeStep}
              setValueInMainState={this.setValueInState}
            />
          </Grid>
          <Grid item xs={7}>
            Formulasz
            <Navigation
              activeStep={this.state.activeStep}
              setValueInMainState={this.setValueInState}
            />
          </Grid>
        </Grid>
      </Content>
    );
  }
}

export default AddPage;
