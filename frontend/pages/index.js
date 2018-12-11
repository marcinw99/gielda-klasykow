import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Searcharea from "../components/IndexComponents/Searcharea";
import Results from "../components/IndexComponents/Results";
import sampleResults from "../resources/sampleResults";

import { withStyles } from "@material-ui/core/styles";

const ALL_POSTS_QUERY = gql`
  query ALL_POSTS_QUERY {
    posts {
      price
      avatar
      car {
        segment
        brand
        model
        version
        fuelType
        productionYear
        mileage
        engineSize
        power
        torque
      }
    }
  }
`;

const styles = theme => ({
  root: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: theme.spacing.unit * 2
  },
  resultsGridItem: {
    marginTop: theme.spacing.unit * 4
  }
});

class Index extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.root} container>
        <Grid item xs={12}>
          <Searcharea />
        </Grid>
        <Grid className={classes.resultsGridItem} item xs={12}>
          <Query query={ALL_POSTS_QUERY}>
            {({ data, error, loading }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error: {error.message}</p>;
              return <Results results={data.posts} />;
            }}
          </Query>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Index);
