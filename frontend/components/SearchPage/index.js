import React, { Component, Fragment } from "react";
import Head from "next/head";
import { Query } from "react-apollo";
import { Typography, CircularProgress, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { initialSearchParameters } from "./config";
import SearchDrawer from "./SearchDrawer";
import ResultsBar from "./ResultsBar";
import Results from "./Results";
import ResultsPagination from "./ResultsPagination";
import { ALL_POSTS_QUERY } from "../../src/Queries/searchQueries";

const styles = theme => ({
  root: {
    display: "flex"
  },
  loadingScreen: {
    paddingTop: "30vh",
    textAlign: "center"
  },
  content: {
    flexGrow: 1
  }
});

const initialState = {
  queryFilters: initialSearchParameters.filters,
  querySorters: initialSearchParameters.sortBy,
  itemsLimit: initialSearchParameters.itemsLimit,
  activePage: 1
};

class Search extends Component {
  state = initialState;

  setValueInState = value => {
    this.setState({ ...value });
  };

  render() {
    const { classes } = this.props;
    const pagination = {
      first: this.state.itemsLimit,
      skip: (this.state.activePage - 1) * this.state.itemsLimit
    };
    return (
      <Fragment>
        <Head>
          <title>Giełda klasyków - wyszukiwarka ogłoszeń</title>
        </Head>
        <div className={classes.root}>
          <SearchDrawer setValueInMainState={this.setValueInState} />
          <div className={classes.content}>
            <Query
              query={ALL_POSTS_QUERY}
              variables={{
                filters: this.state.queryFilters,
                sorters: this.state.querySorters,
                ...pagination
              }}
            >
              {({ data, error, loading }) => {
                if (loading)
                  return (
                    <ResultsLoadingScreen rootCss={classes.loadingScreen} />
                  );
                if (error) return <ResultsError />;
                return (
                  <Fragment>
                    <ResultsBar
                      setValueInMainState={this.setValueInState}
                      itemsLimitValue={this.state.itemsLimit}
                      querySortersValue={this.state.querySorters}
                    />
                    <Results results={data.postsConnection.edges} />
                    <Grid container justify="center">
                      <ResultsPagination
                        setValueInMainState={this.setValueInState}
                        pageInfo={data.postsConnection.pageInfo}
                        activePage={this.state.activePage}
                      />
                    </Grid>
                  </Fragment>
                );
              }}
            </Query>
          </div>
        </div>
      </Fragment>
    );
  }
}

function ResultsLoadingScreen({ rootCss }) {
  return (
    <div className={rootCss}>
      <CircularProgress size={100} />
    </div>
  );
}

function ResultsError() {
  return (
    <Typography variant="h6" color="secondary">
      Błąd przy pobieraniu wyników
    </Typography>
  );
}

export default withStyles(styles)(Search);
