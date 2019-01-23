import React, { Component } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import { initialSearchParameters, SortOptions } from "../config";

const styles = theme => ({
  formControl: {
    minWidth: 160,
    margin: theme.spacing.unit
  },
  InputLabel: {
    color: theme.palette.primary.main
  }
});

class Sorters extends Component {
  state = {
    sortBy: initialSearchParameters.sortBy
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        this.props.setValueInMainState({ querySorters: this.state.sortBy });
      }
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.InputLabel} htmlFor="sortBy">
          Sortuj według
        </InputLabel>
        <Select
          value={this.state.sortBy}
          onChange={this.handleChange}
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
  }
}

Sorters.propTypes = {
  setValueInMainState: PropTypes.func.isRequired
};

export default withStyles(styles)(Sorters);
