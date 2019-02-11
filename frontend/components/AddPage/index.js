import React, { Component } from "react";
import { Typography, Grid } from "@material-ui/core";
import { Query, Mutation } from "react-apollo";

import { Content, StyledPaper, StyledPageTitle } from "./styledComponents";
import Steps from "./Steps";
import Form from "./Form";
import AfterSubmit from "./AfterSubmit";
import { ADD_POST_QUERIES } from "../../src/Queries/searchQueries";
import { ADD_POST_MUTATION } from "../../src/Mutations/AddPost";

const initialState = {
  activeStep: 0,
  submitData: {}
};

class AddPage extends Component {
  state = initialState;

  setValueInState = value => {
    this.setState({ ...value });
  };

  setValueInStateAsync = value => {
    return new Promise(resolve => {
      this.setState({ ...value }, () => {
        resolve();
      });
    });
  };

  render() {
    if (!this.props.thisUser) {
      return (
        <Content>
          <Typography align="center" variant="h5" color="secondary">
            Musisz być zalogowany aby móc dodać ogłoszenie
          </Typography>
        </Content>
      );
    }
    return (
      <Query query={ADD_POST_QUERIES}>
        {({ data, error, loading }) => {
          if (loading) {
            return <Typography>Pobieranie danych...</Typography>;
          }
          if (error) return <Typography>Błąd pobierania danych</Typography>;
          if (data)
            return (
              <Content>
                <StyledPageTitle>Dodawanie ogłoszenia</StyledPageTitle>
                <Grid container justify="flex-start">
                  <Grid item xs={3}>
                    <Steps
                      activeStep={this.state.activeStep}
                      setValueInMainState={this.setValueInState}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <StyledPaper>
                      <Mutation
                        mutation={ADD_POST_MUTATION}
                        variables={{ data: this.state.submitData }}
                      >
                        {(submit, feedback) => {
                          if (feedback.data)
                            return (
                              <AfterSubmit data={feedback.data.createPost} />
                            );
                          return (
                            <Form
                              data={data}
                              activeStep={this.state.activeStep}
                              setValueInMainState={this.setValueInState}
                              setValueInMainStateAsync={
                                this.setValueInStateAsync
                              }
                              submit={submit}
                            />
                          );
                        }}
                      </Mutation>
                    </StyledPaper>
                  </Grid>
                </Grid>
              </Content>
            );
          return <Typography>Błąd pobierania danych</Typography>;
        }}
      </Query>
    );
  }
}

export default AddPage;
