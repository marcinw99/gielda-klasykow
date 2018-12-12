import React from "react";
import { Grid } from "@material-ui/core";

import ResultCard from "./ResultCard";

const Results = props => (
  <Grid justify="center" container>
    {props.results &&
      props.results.map((item, key) => (
        <Grid item key={`${item.car.brand}${key}`}>
          <ResultCard {...item} />
        </Grid>
      ))}
  </Grid>
);

export default Results;
