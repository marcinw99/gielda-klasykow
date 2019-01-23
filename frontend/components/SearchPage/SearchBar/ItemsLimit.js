import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  formControl: {
    minWidth: 200,
    margin: theme.spacing.unit
  },
  InputLabel: {
    color: theme.palette.primary.main
  }
});

const ItemsLimit = ({ classes, value, handleChange }) => {
  return (
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.InputLabel} htmlFor="itemsLimit">
        Ogranicz ilość wyników do:
      </InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        inputProps={{
          name: "itemsLimit",
          id: "itemsLimit"
        }}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </Select>
    </FormControl>
  );
};

export default withStyles(styles)(ItemsLimit);
