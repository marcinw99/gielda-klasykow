import React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import Sorters from "./Sorters";
import ItemsLimit from "./ItemsLimit";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit
  }
});

const ResultsBar = ({
  setValueInMainState,
  itemsLimitValue,
  querySortersValue,
  classes
}) => {
  return (
    <Grid className={classes.root} container wrap="nowrap" justify="flex-end">
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

ResultsBar.propTypes = {
  setValueInMainState: PropTypes.func.isRequired,
  itemsLimitValue: PropTypes.number.isRequired,
  querySortersValue: PropTypes.string.isRequired
};

export default withStyles(styles)(ResultsBar);
