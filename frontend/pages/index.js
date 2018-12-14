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

class Index extends Component {
  state = {
    queryFilters: {}
  };

  refreshFiltersQuery = filters => {
    var queryFilters = { car: {} };
    Object.keys(filters).map(name => {
      if (filters[name] != null && filters[name].length !== 0) {
        queryFilters.car[name] = filters[name];
      }
    });
    this.setState({ queryFilters });
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
                />
              );
            }}
          </Query>
        </Grid>
        <Grid className={classes.resultsGridItem} item xs={12}>
          <Query
            query={ALL_POSTS_QUERY}
            variables={{ filters: this.state.queryFilters }}
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
