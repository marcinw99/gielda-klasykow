import React, { Component, Fragment } from "react";
import Head from "next/head";
import { Typography, Grid, Hidden } from "@material-ui/core";
import { Query, Mutation } from "react-apollo";
import isEqual from "react-fast-compare";

import { Content, StyledPaper, StyledPageTitle } from "./styledComponents";
import Steps from "./Steps";
import Form from "./Form";
import AfterSubmit from "./AfterSubmit";
import {
  ADD_POST_QUERIES,
  ALL_POSTS_QUERY,
  USER_POSTS_QUERY
} from "../../src/Queries/searchQueries";
import { ADD_POST_MUTATION } from "../../src/Mutations/AddPost";
import MustBeLoggedIn from "../universal/MustBeLoggedIn";
import { withSnackbar } from "../Snackbar/Context";

const initialState = {
  activeStep: 0,
  disableSteps: false,
  submitData: {}
};

class AddPage extends Component {
  state = initialState;

  componentDidMount() {
    this.displayWarningIfNotEnoughPermissionsToAddPost();
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.thisUser, this.props.thisUser)) {
      this.displayWarningIfNotEnoughPermissionsToAddPost();
    }
  }

  displayWarningIfNotEnoughPermissionsToAddPost = () => {
    if (this.props.thisUser && this.props.thisUser.emailConfirmed !== true) {
      this.props.manageSnackbar({
        open: true,
        message: "Musisz potwierdzić adres e-mail aby móć dodawać ogłoszenia.",
        variant: "warning"
      });
    }
  };

  setValueInState = value => {
    if (
      this.state.disableSteps === true &&
      Object.keys(value).indexOf("activeStep") !== -1
    ) {
      return null;
    } else {
      this.setState({ ...value });
    }
  };

  setValueInStateAsync = value => {
    if (
      this.state.disableSteps === true &&
      Object.keys(value).indexOf("activeStep") !== -1
    ) {
      return null;
    } else {
      return new Promise(resolve => {
        this.setState({ ...value }, () => {
          resolve();
        });
      });
    }
  };

  handleDisableSteps = () => {
    this.setState({ disableSteps: true });
  };

  render() {
    return (
      <Fragment>
        <Head>
          <title>Dodaj klasyka - Giełda klasyków</title>
        </Head>
        <MustBeLoggedIn
          thisUser={this.props.thisUser}
          errorMessage="Musisz być zalogowany aby móć dodawać ogłoszenia."
        >
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
                    <Grid container justify="center">
                      <Mutation
                        mutation={ADD_POST_MUTATION}
                        refetchQueries={[
                          {
                            query: ALL_POSTS_QUERY
                          },
                          {
                            query: USER_POSTS_QUERY,
                            variables: { userId: this.props.thisUser.id }
                          }
                        ]}
                        variables={{ data: this.state.submitData }}
                      >
                        {(submit, feedback) => {
                          if (feedback.data) {
                            return (
                              <Grid item xs={6}>
                                <StyledPaper>
                                  <AfterSubmit
                                    data={feedback.data.createPost}
                                  />
                                </StyledPaper>
                              </Grid>
                            );
                          }
                          return (
                            <Fragment>
                              <Hidden smDown>
                                <Grid item xs={4} md={3}>
                                  <Steps
                                    activeStep={this.state.activeStep}
                                    setValueInMainState={this.setValueInState}
                                    loading={feedback.loading}
                                  />
                                </Grid>
                              </Hidden>
                              <Hidden mdUp>
                                <Grid item xs={12}>
                                  <Steps
                                    mobile
                                    activeStep={this.state.activeStep}
                                    setValueInMainState={this.setValueInState}
                                    loading={feedback.loading}
                                  />
                                </Grid>
                              </Hidden>
                              <Grid item xs={9} lg={6}>
                                <StyledPaper>
                                  <Form
                                    data={data}
                                    activeStep={this.state.activeStep}
                                    setValueInMainState={this.setValueInState}
                                    setValueInMainStateAsync={
                                      this.setValueInStateAsync
                                    }
                                    loading={feedback.loading}
                                    error={feedback.error}
                                    submit={submit}
                                  />
                                </StyledPaper>
                              </Grid>
                            </Fragment>
                          );
                        }}
                      </Mutation>
                    </Grid>
                  </Content>
                );
              return <Typography>Błąd pobierania danych</Typography>;
            }}
          </Query>
        </MustBeLoggedIn>
      </Fragment>
    );
  }
}

export default withSnackbar(AddPage);
