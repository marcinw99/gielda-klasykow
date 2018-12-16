import React, { Component } from "react";
import {
  Grid,
  Typography,
  CircularProgress,
  LinearProgress
} from "@material-ui/core";
import { Query } from "react-apollo";

import Searcharea from "../components/IndexComponents/SearchareaComponents/Searcharea";
import Results from "../components/IndexComponents/Results";
import {
  ALL_POSTS_QUERY,
  SEARCHAREA_QUERIES
} from "../src/Queries/indexQueries";

import { withStyles } from "@material-ui/core/styles";

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

const initialSortBy = "createdAt_DESC";

class Index extends Component {
  state = {
    queryFilters: {},
    querySorters: initialSortBy
  };

  refreshFiltersQuery = queryFilters => {
    this.setState({ queryFilters });
  };

  refreshSortersQuery = querySorters => {
    this.setState({ querySorters });
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
                  <div className={classes.loadingScreen}>
                    <LinearProgress size={100} />
                  </div>
                );
              }
              if (error)
                return (
                  <Typography variant="h6" color="secondary">
                    Błąd przy pobieraniu opcji filtrowania
                  </Typography>
                );
              return (
                <Searcharea
                  data={data}
                  refreshFiltersQuery={this.refreshFiltersQuery}
                  refreshSortersQuery={this.refreshSortersQuery}
                  initialSortBy={initialSortBy}
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
                return (
                  <div className={classes.loadingScreen}>
                    <CircularProgress size={100} />
                  </div>
                );
              if (error)
                return (
                  <Typography variant="h6" color="secondary">
                    Błąd przy pobieraniu wyników
                  </Typography>
                );
              return <Results results={data.posts} />;
            }}
          </Query>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Index);
