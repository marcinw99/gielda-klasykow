import React from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

import Sorters from "./Sorters";
import ItemsLimit from "./ItemsLimit";

const ResultsBar = ({
  setValueInMainState,
  itemsLimitValue,
  querySortersValue
}) => {
  return (
    <Grid container justify="flex-end">
      <ItemsLimit
        value={itemsLimitValue}
        setValueInMainState={setValueInMainState}
      />
      <Sorters
        value={querySortersValue}
        setValueInMainState={setValueInMainState}
      />
    </Grid>
  );
};

export default ResultsBar;
