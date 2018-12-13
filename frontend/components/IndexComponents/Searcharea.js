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

import { prepareSelectsOptions } from "../../src/helpers";

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
  state = {
    segment: "",
    brand: "",
    model: "",
    priceFrom: "",
    priceTo: "",
    mileageFrom: "",
    mileageTo: "",
    productionYearFrom: "",
    productionYearTo: "",
    fuelType: "",
    localization: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const selectsOptions = prepareSelectsOptions(
      this.props.enums.__type.fields
    );
    console.log(selectsOptions);
    const { classes } = this.props;
    return (
      <form className={classes.form}>
        <FormControl className={classes.formControl}>
          <InputLabel className={classes.InputLabel} htmlFor="segment">
            Segment
          </InputLabel>
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
          <InputLabel className={classes.InputLabel} htmlFor="brand">
            Marka pojazdu
          </InputLabel>
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
          <InputLabel className={classes.InputLabel} htmlFor="model">
            Model pojazdu
          </InputLabel>
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
        <div>
          <FormControl
            className={`${classes.formControlSmallLeft} ${classes.formControl}`}
          >
            <TextField
              name="productionYearFrom"
              label="Rok produkcji od"
              value={this.state.productionYearFrom}
              onChange={this.handleChange}
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
              value={this.state.productionYearTo}
              onChange={this.handleChange}
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
            value={this.state.fuelType}
            onChange={this.handleChange}
            inputProps={{
              name: "fuelType",
              id: "fuelType"
            }}
          >
            <MenuItem value="">
              <em>Wszystkie</em>
            </MenuItem>
            <MenuItem value="Benzyna">Benzyna</MenuItem>
            <MenuItem value="Benzyna + LPG">Benzyna + LPG</MenuItem>
            <MenuItem value="Benzyna + CNG">Benzyna + CNG</MenuItem>
            <MenuItem value="Diesel">Diesel</MenuItem>
            <MenuItem value="Hybryda">Hybryda</MenuItem>
            <MenuItem value="Elektryczny">Elektryczny</MenuItem>
          </Select>
        </FormControl>
        <div>
          <FormControl
            className={`${classes.formControlSmallLeft} ${classes.formControl}`}
          >
            <TextField
              name="priceFrom"
              label="Cena od"
              value={this.state.priceFrom}
              onChange={this.handleChange}
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
              value={this.state.priceTo}
              onChange={this.handleChange}
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
              value={this.state.mileageFrom}
              onChange={this.handleChange}
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
              value={this.state.mileageTo}
              onChange={this.handleChange}
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
              value={this.state.localization}
              onChange={this.handleChange}
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
              value={this.state.keywords}
              onChange={this.handleChange}
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
