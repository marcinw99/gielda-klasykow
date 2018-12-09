import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";

import Searcharea from "../components/IndexComponents/Searcharea";
import Results from "../components/IndexComponents/Results";
import sampleResults from "../resources/sampleResults";

import { withStyles } from "@material-ui/core/styles";

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
          <Results results={sampleResults} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Index);
