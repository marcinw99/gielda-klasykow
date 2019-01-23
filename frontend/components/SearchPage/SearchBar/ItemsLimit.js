import React, { Component } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import { initialSearchParameters, itemsLimitOptions } from "../config";

const styles = theme => ({
  formControl: {
    minWidth: 200,
    margin: theme.spacing.unit
  },
  InputLabel: {
    color: theme.palette.primary.main
  }
});

class ItemsLimit extends Component {
  state = {
    itemsLimit: initialSearchParameters.itemsLimit
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        this.props.setValueInMainState({ itemsLimit: this.state.itemsLimit });
      }
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.InputLabel} htmlFor="itemsLimit">
          Ogranicz ilość wyników do:
        </InputLabel>
        <Select
          value={this.state.itemsLimit}
          onChange={this.handleChange}
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
  }
}

ItemsLimit.propTypes = {
  setValueInMainState: PropTypes.func.isRequired
};

export default withStyles(styles)(ItemsLimit);
