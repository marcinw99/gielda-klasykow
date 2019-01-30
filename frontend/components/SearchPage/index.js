import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { Typography, CircularProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { initialSearchParameters } from "./config";
import ResultsBar from "./ResultsBar";
import SearchDrawer from "./SearchDrawer";
import Results from "./Results";
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
  itemsLimit: initialSearchParameters.itemsLimit
};

class Search extends Component {
  state = initialState;

  setValueInState = value => {
    this.setState({ ...value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <SearchDrawer setValueInMainState={this.setValueInState} />
        <div className={classes.content}>
          <Query
            query={ALL_POSTS_QUERY}
            variables={{
              filters: this.state.queryFilters,
              sorters: this.state.querySorters
            }}
          >
            {({ data, error, loading }) => {
              if (loading)
                return <ResultsLoadingScreen rootCss={classes.loadingScreen} />;
              if (error) return <ResultsError />;
              return (
                <Fragment>
                  <ResultsBar
                    setValueInMainState={this.setValueInState}
                    itemsLimitValue={this.state.itemsLimit}
                    querySortersValue={this.state.querySorters}
                  />
                  <Results results={data.postsConnection.edges} />
                </Fragment>
              );
            }}
          </Query>
        </div>
      </div>
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
