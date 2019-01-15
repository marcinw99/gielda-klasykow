import React from "react";
import { Grid } from "@material-ui/core";

import ResultCard from "./ResultCard";

const Results = ({ results }) => (
  <Grid justify="center" container>
    {results.map((item, key) => (
      <Grid item key={`${item.car.brand}${key}`}>
        <ResultCard {...item} />
      </Grid>
    ))}
  </Grid>
);

Results.defaultProps = {
  results: []
};

export default Results;
