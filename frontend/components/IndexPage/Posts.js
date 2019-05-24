import React from "react";
import { Grid } from "@material-ui/core";

import ResultCard from "../SearchPage/Results/ResultCard";

const Posts = ({ posts }) => (
  <Grid container align="center">
    {posts.map((item, key) => (
      <Grid item key={`${item.car.brand}${key}`}>
        <ResultCard {...item} />
      </Grid>
    ))}
  </Grid>
);

export default Posts;
