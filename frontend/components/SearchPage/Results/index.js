import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";

import ResultCard from "./ResultCard";

const Results = ({ results }) => (
  <Fragment>
    <Grid justify="center" container>
      {results.map((item, key) => (
        <Grid item key={`${item.node.car.brand}${key}`}>
          <ResultCard {...item.node} />
        </Grid>
      ))}
    </Grid>
  </Fragment>
);

Results.defaultProps = {
  results: []
};

export default Results;
