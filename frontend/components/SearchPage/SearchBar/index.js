import React from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

import Filters from "./Filters";
import Sorters from "./Sorters";
import ItemsLimit from "./ItemsLimit";

const SearchBar = ({
  data,
  setValueInMainState,
  itemsLimitValue,
  querySortersValue
}) => (
  <Grid container direction="column">
    <Grid item>
      <Filters data={data} setValueInMainState={setValueInMainState} />
    </Grid>
    <Grid item>
      <Grid container justify="space-between">
        <ItemsLimit
          value={itemsLimitValue}
          setValueInMainState={setValueInMainState}
        />
        <Sorters
          value={querySortersValue}
          setValueInMainState={setValueInMainState}
        />
      </Grid>
    </Grid>
  </Grid>
);

SearchBar.propTypes = {
  data: PropTypes.object.isRequired,
  setValueInMainState: PropTypes.func.isRequired
};

export default SearchBar;
