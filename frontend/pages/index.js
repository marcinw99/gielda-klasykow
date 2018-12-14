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
  POSSIBLE_ENUMS_VALUES
} from "../src/Queries/indexQueries";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: theme.spacing.unit * 2
  },
  resultsGridItem: {
    marginTop: theme.spacing.unit * 4
  },
  loadingScreen: {
    textAlign: "center"
  }
});

class Index extends Component {
  state = {
    filters: {
      segment: "",
      brand: "",
      model: "",
      fuelType: "",
      localization: ""
    },
    queryFilters: {}
  };

  handleFiltersChange = event => {
    this.setState(
      prevState => ({
        filters: {
          ...prevState.filters,
          [event.target.name]: event.target.value
        }
      }),
      () => {
        this.refreshFiltersQuery();
      }
    );
  };

  refreshFiltersQuery = () => {
    const { filters } = this.state;
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
        <Grid item xs={12}>
          <Query query={POSSIBLE_ENUMS_VALUES}>
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
                  filters={this.state.filters}
                  handleFiltersChange={this.handleFiltersChange}
                  enums={data}
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
