import React, { Component } from "react";
import { Query } from "react-apollo";
import {
  Grid,
  Typography,
  CircularProgress,
  LinearProgress
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { initialSearchParameters } from "./config";
import SearchBar from "./SearchBar";
import Results from "./Results";
import {
  ALL_POSTS_QUERY,
  SEARCHAREA_QUERIES
} from "../../src/Queries/searchQueries";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  SearchareaGridItem: {
    margin: "0 auto",
    maxWidth: 1000
  },
  resultsGridItem: {
    margin: "0 auto",
    maxWidth: 1200,
    marginTop: theme.spacing.unit * 4
  },
  loadingScreen: {
    textAlign: "center"
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
      <Grid className={classes.root} container>
        <Grid className={classes.SearchareaGridItem} item xs={12}>
          <Query query={SEARCHAREA_QUERIES}>
            {({ data, error, loading }) => {
              if (loading) {
                return (
                  <SearchBarLoadingScreen rootCss={classes.loadingScreen} />
                );
              }
              if (error) return <SearchBarError />;
              return (
                <SearchBar
                  data={data}
                  setValueInMainState={this.setValueInState}
                />
              );
            }}
          </Query>
        </Grid>
        <Grid className={classes.resultsGridItem} item xs={12}>
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
              return <Results results={data.postsConnection.edges} />;
            }}
          </Query>
        </Grid>
      </Grid>
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

function SearchBarLoadingScreen({ rootCss }) {
  return (
    <div className={rootCss}>
      <LinearProgress size={100} />
    </div>
  );
}

function SearchBarError() {
  return (
    <Typography variant="h6" color="secondary">
      Błąd przy pobieraniu opcji filtrowania
    </Typography>
  );
}

export default withStyles(styles)(Search);
