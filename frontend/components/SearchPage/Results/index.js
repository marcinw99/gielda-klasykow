import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";

import ResultCard from "./ResultCard";

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 2
  }
});

const NoResultsMessage = withStyles(styles)(props => (
  <Typography className={props.classes.root} variant="h5">
    Nie znaleziono żadnych ogłoszeń.
  </Typography>
));

const Results = ({ results }) =>
  results.length === 0 ? (
    <NoResultsMessage />
  ) : (
    <Grid justify="center" container>
      {results.map((item, key) => (
        <Grid item key={`${item.node.car.brand}${key}`}>
          <ResultCard {...item.node} />
        </Grid>
      ))}
    </Grid>
  );

Results.defaultProps = {
  results: []
};

export default Results;
