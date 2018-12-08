import React, { Component } from "react";

import { InputLabel, FormControl, Select, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    minWidth: 120,
    margin: theme.spacing.unit
  }
});

class Searcharea extends Component {
  state = { segment: "" };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="segment">Typ</InputLabel>
          <Select
            value={this.state.segment}
            onChange={this.handleChange}
            inputProps={{
              name: "segment",
              id: "segment"
            }}
          >
            <MenuItem value="">
              <em>Wszystkie</em>
            </MenuItem>
            <MenuItem value="A">A</MenuItem>
            <MenuItem value="B">B</MenuItem>
            <MenuItem value="C">C</MenuItem>
            <MenuItem value="D">D</MenuItem>
            <MenuItem value="E">E</MenuItem>
            <MenuItem value="F">F</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

export default withStyles(styles)(Searcharea);
