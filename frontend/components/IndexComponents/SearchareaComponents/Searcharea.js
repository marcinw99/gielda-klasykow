import React, { Component } from "react";
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Button
} from "@material-ui/core";
import { Search, Clear } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

import { prepareSelectsOptions } from "../../../src/helpers";

const styles = theme => ({
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  formControl: {
    minWidth: 160,
    margin: theme.spacing.unit
  },
  formControlSmallLeft: {
    marginRight: theme.spacing.unit * 0.5
  },
  formControlSmallRight: {
    marginLeft: theme.spacing.unit * 0.5
  },
  InputLabel: {
    color: theme.palette.primary.main
  },
  button: {
    minWidth: 140,
    margin: theme.spacing.unit
  },
  fabButton: {
    margin: theme.spacing.unit
  }
});

class Searcharea extends Component {
  constructor(props) {
    super(props);
    this.selectsOptions = prepareSelectsOptions(this.props.enums.__type.fields);
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.form}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.InputLabel} htmlFor="segment">
            Segment
          </InputLabel>
          <Select
            value={this.props.filters.segment}
            onChange={this.props.handleChange}
            inputProps={{
              name: "segment",
              id: "segment"
            }}
          >
            <MenuItem value="">
              <em>Wszystkie</em>
            </MenuItem>
            {this.selectsOptions.segment.map((item, key) => (
              <MenuItem key={`${item}${key}`} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.InputLabel} htmlFor="brand">
            Marka pojazdu
          </InputLabel>
          <Select
            value={this.props.filters.brand}
            onChange={this.props.handleChange}
            inputProps={{
              name: "brand",
              id: "brand"
            }}
          >
            <MenuItem value="">
              <em>Wszystkie</em>
            </MenuItem>
            {this.selectsOptions.brand.map((item, key) => (
              <MenuItem key={`${item}${key}`} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.InputLabel} htmlFor="model">
            Model pojazdu
          </InputLabel>
          <Select
            value={this.props.filters.model}
            onChange={this.props.handleChange}
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
        <div>
          <FormControl
            className={`${classes.formControlSmallLeft} ${classes.formControl}`}
          >
            <TextField
              name="productionYearFrom"
              label="Rok produkcji od"
              value={this.props.filters.productionYearFrom}
              onChange={this.props.handleChange}
              type="number"
              inputProps={{
                min: 0,
                max: 10000000
              }}
            />
          </FormControl>
          <FormControl
            className={`${classes.formControlSmallRight} ${
              classes.formControl
            }`}
          >
            <TextField
              name="productionYearTo"
              label="Rok produkcji do"
              value={this.props.filters.productionYearTo}
              onChange={this.props.handleChange}
              type="number"
              inputProps={{
                min: 0,
                max: 10000000
              }}
            />
          </FormControl>
        </div>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.InputLabel} htmlFor="fuelType">
            Rodzaj paliwa
          </InputLabel>
          <Select
            value={this.props.filters.fuelType}
            onChange={this.props.handleChange}
            inputProps={{
              name: "fuelType",
              id: "fuelType"
            }}
          >
            <MenuItem value="">
              <em>Wszystkie</em>
            </MenuItem>
            {this.selectsOptions.fuelType.map((item, key) => (
              <MenuItem key={`${item}${key}`} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div>
          <FormControl
            className={`${classes.formControlSmallLeft} ${classes.formControl}`}
          >
            <TextField
              name="priceFrom"
              label="Cena od"
              value={this.props.filters.priceFrom}
              onChange={this.props.handleChange}
              type="number"
              inputProps={{
                min: 0,
                max: 10000000
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">zł</InputAdornment>
              }}
            />
          </FormControl>
          <FormControl
            className={`${classes.formControlSmallRight} ${
              classes.formControl
            }`}
          >
            <TextField
              name="priceTo"
              label="Cena do"
              value={this.props.filters.priceTo}
              onChange={this.props.handleChange}
              type="number"
              inputProps={{
                min: 0,
                max: 10000000
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">zł</InputAdornment>
              }}
            />
          </FormControl>
        </div>
        <div>
          <FormControl
            className={`${classes.formControlSmallLeft} ${classes.formControl}`}
          >
            <TextField
              name="mileageFrom"
              label="Przebieg od"
              value={this.props.filters.mileageFrom}
              onChange={this.props.handleChange}
              type="number"
              inputProps={{
                min: 0,
                max: 10000000
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">km</InputAdornment>
              }}
            />
          </FormControl>
          <FormControl
            className={`${classes.formControlSmallRight} ${
              classes.formControl
            }`}
          >
            <TextField
              name="mileageTo"
              label="Przebieg do"
              value={this.props.filters.mileageTo}
              onChange={this.props.handleChange}
              type="number"
              inputProps={{
                min: 0,
                max: 10000000
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">km</InputAdornment>
              }}
            />
          </FormControl>
        </div>
        <Button className={classes.button} variant="outlined" color="primary">
          Silnik i napęd
        </Button>
        <Button className={classes.button} variant="outlined" color="primary">
          Nadwozie
        </Button>
        <Button className={classes.button} variant="outlined" color="primary">
          Dodatkowe wyposażenie
        </Button>
        <Button className={classes.button} variant="outlined" color="primary">
          Status pojazdu
        </Button>
        <Button className={classes.button} variant="outlined" color="primary">
          Informacje finansowe
        </Button>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel className={classes.InputLabel} htmlFor="localization">
              Miejscowość
            </InputLabel>
            <Select
              value={this.props.filters.localization}
              onChange={this.props.handleChange}
              inputProps={{
                name: "localization",
                id: "localization"
              }}
            >
              <MenuItem value="">
                <em>Wszystkie</em>
              </MenuItem>
              <MenuItem value="Dębica">Dębica</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              name="keywords"
              label="Słowa kluczowe"
              value={this.props.filters.keywords}
              onChange={this.props.handleChange}
            />
          </FormControl>
        </div>
        <div>
          <Button color="secondary" variant="fab" className={classes.fabButton}>
            <Clear />
          </Button>
          <Button color="primary" variant="fab" className={classes.fabButton}>
            <Search />
          </Button>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(Searcharea);
