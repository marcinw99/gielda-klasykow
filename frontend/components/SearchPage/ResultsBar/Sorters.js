import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import { SortOptions } from "../config";

const styles = theme => ({
  formControl: {
    minWidth: 90,
    margin: theme.spacing.unit
  },
  InputLabel: {
    color: theme.palette.primary.main
  }
});

const Sorters = ({ classes, value, setValueInMainState }) => (
  <FormControl className={classes.formControl}>
    <InputLabel className={classes.InputLabel} htmlFor="sortBy">
      Sortuj według
    </InputLabel>
    <Select
      value={value}
      onChange={e => setValueInMainState({ querySorters: e.target.value })}
      inputProps={{
        name: "sortBy",
        id: "sortBy"
      }}
    >
      {SortOptions.map(item => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

Sorters.propTypes = {
  value: PropTypes.string.isRequired,
  setValueInMainState: PropTypes.func.isRequired
};

export default withStyles(styles)(Sorters);
