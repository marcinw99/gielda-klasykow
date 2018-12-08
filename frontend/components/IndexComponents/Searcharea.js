import React, { Component } from "react";

import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  TextField,
  InputAdornment
} from "@material-ui/core";
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
  state = { segment: "", brand: "", model: "", priceFrom: null, priceTo: null };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="segment">Segment</InputLabel>
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
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="brand">Marka pojazdu</InputLabel>
          <Select
            value={this.state.brand}
            onChange={this.handleChange}
            inputProps={{
              name: "brand",
              id: "brand"
            }}
          >
            <MenuItem value="">
              <em>Wszystkie</em>
            </MenuItem>
            <MenuItem value="Audi">Audi</MenuItem>
            <MenuItem value="BMW">BMW</MenuItem>
            <MenuItem value="Mercedes-benz">Mercedes-benz</MenuItem>
            <MenuItem value="Saab">Saab</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="model">Model pojazdu</InputLabel>
          <Select
            value={this.state.model}
            onChange={this.handleChange}
            inputProps={{
              name: "model",
              id: "model"
            }}
          >
            <MenuItem value="">
              <em>Wszystkie</em>
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            name="priceFrom"
            label="Cena od"
            value={this.state.priceFrom}
            onChange={this.handleChange}
            type="number"
            InputProps={{
              endAdornment: <InputAdornment position="end">zł</InputAdornment>
            }}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            name="priceTo"
            label="Cena do"
            value={this.state.priceTo}
            onChange={this.handleChange}
            type="number"
            InputProps={{
              endAdornment: <InputAdornment position="end">zł</InputAdornment>
            }}
          />
        </FormControl>
      </form>
    );
  }
}

export default withStyles(styles)(Searcharea);
