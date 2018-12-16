import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

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
          <MenuItem value="createdAt_DESC">Data dodania malejąco</MenuItem>
          <MenuItem value="createdAt_ASC">Data dodania rosnąco</MenuItem>
          <MenuItem value="price_DESC">Cena malejąco</MenuItem>
          <MenuItem value="price_ASC">Cena rosnąco</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default withStyles(styles)(Sorters);
