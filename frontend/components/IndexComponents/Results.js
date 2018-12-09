import React, { Component } from "react";

import ResultCard from "./ResultCard";

import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({});

class Results extends Component {
  render() {
    return (
      <Grid justify="center" container>
        {this.props.results &&
          this.props.results.map((item, key) => (
            <Grid item key={`${item.label}${key}`}>
              <ResultCard {...item} />
            </Grid>
          ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(Results);
