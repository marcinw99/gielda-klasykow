import React, { Component } from "react";
import {
  Grid,
  Typography,
  CircularProgress,
  LinearProgress
} from "@material-ui/core";
import { Query } from "react-apollo";

import Searcharea from "../components/IndexComponents/Searcharea";
import Results from "../components/IndexComponents/Results";
import {
  ALL_POSTS_QUERY,
  POSSIBLE_ENUMS_VALUES
} from "../components/IndexComponents/indexQueries";

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
    filters: {}
  };

  handleFiltersChange = event => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        [event.target.name]: event.target.value
      }
    }));
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
                  handleChange={this.handleFiltersChange}
                  enums={data}
                />
              );
            }}
          </Query>
        </Grid>
        <Grid className={classes.resultsGridItem} item xs={12}>
          <Query query={ALL_POSTS_QUERY}>
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
