import React, { Component } from "react";
import { Typography, Grid } from "@material-ui/core";
import { Query } from "react-apollo";

import { Content, StyledPaper } from "./styledComponents";
import Steps from "./Steps";
import Form from "./Form";
import Navigation from "./Navigation";
import { ADD_POST_QUERIES } from "../../src/Queries/searchQueries";

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
      <Query query={ADD_POST_QUERIES}>
        {({ data, error, loading }) => {
          if (loading) {
            return <Typography>Ładowanie w tłoku</Typography>;
          }
          if (error) return <Typography>Błond</Typography>;
          if (data)
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
                  <Grid item xs={6}>
                    <StyledPaper>
                      <Form
                        data={data}
                        activeStep={this.state.activeStep}
                        setValueInMainState={this.setValueInState}
                      />
                      <Navigation
                        activeStep={this.state.activeStep}
                        setValueInMainState={this.setValueInState}
                      />
                    </StyledPaper>
                  </Grid>
                </Grid>
              </Content>
            );
          return <Typography>Błond</Typography>;
        }}
      </Query>
    );
  }
}

export default AddPage;
