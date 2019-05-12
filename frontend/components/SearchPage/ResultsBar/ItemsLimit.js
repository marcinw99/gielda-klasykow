import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import { itemsLimitOptions } from "../config";

const styles = theme => ({
  formControl: {
    minWidth: 110,
    margin: theme.spacing.unit
  },
  InputLabel: {
    color: theme.palette.primary.main
  }
});

const ItemsLimit = ({ classes, value, setValueInMainState }) => (
  <FormControl className={classes.formControl}>
    <InputLabel className={classes.InputLabel} htmlFor="itemsLimit">
      Ogranicz ilość wyników do:
    </InputLabel>
    <Select
      value={value}
      onChange={e => setValueInMainState({ itemsLimit: e.target.value })}
      inputProps={{
        name: "itemsLimit",
        id: "itemsLimit"
      }}
    >
      {itemsLimitOptions.map(item => (
        <MenuItem value={item} key={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

ItemsLimit.propTypes = {
  setValueInMainState: PropTypes.func.isRequired
};

export default withStyles(styles)(ItemsLimit);
