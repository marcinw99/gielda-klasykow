import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import SortOptions from "./SortOptions";

const styles = theme => ({
  root: {
    textAlign: "right"
  },
  formControl: {
    minWidth: 160,
    margin: theme.spacing.unit
  },
  InputLabel: {
    color: theme.palette.primary.main
  }
});

const Sorters = ({ classes, value, handleChange }) => {
  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.InputLabel} htmlFor="sortBy">
          Sortuj według
        </InputLabel>
        <Select
          value={value}
          onChange={handleChange}
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
    </div>
  );
};

Sorters.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default withStyles(styles)(Sorters);
