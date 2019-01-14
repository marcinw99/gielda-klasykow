import React from "react";
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Fab
} from "@material-ui/core";
import { Search, Clear } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

import NumberInputs from "./NumberInputs";
import enumDisplayedText from "../../../resources/enumsDisplayedText";

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

const Filters = ({
  classes,
  selectsOptions,
  filters,
  handleChange,
  resetFilters
}) => (
  <form className={classes.form}>
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.InputLabel} htmlFor="segment">
        Segment
      </InputLabel>
      <Select
        value={filters.segment}
        onChange={handleChange}
        inputProps={{
          name: "segment",
          id: "segment"
        }}
      >
        <MenuItem value="deleteFromFilters">
          <em>Wszystkie</em>
        </MenuItem>
        {selectsOptions.segment.map((item, key) => (
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
        value={filters.brand}
        onChange={handleChange}
        inputProps={{
          name: "brand",
          id: "brand"
        }}
      >
        <MenuItem value="deleteFromFilters">
          <em>Wszystkie</em>
        </MenuItem>
        {selectsOptions.brand.map((item, key) => (
          <MenuItem key={`${item}${key}`} value={item}>
            {enumDisplayedText("Car", "brand", item)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.InputLabel} htmlFor="model">
        Model pojazdu
      </InputLabel>
      <Select
        value={filters.model}
        onChange={handleChange}
        inputProps={{
          name: "model",
          id: "model"
        }}
      >
        <MenuItem value="deleteFromFilters">
          <em>Wszystkie</em>
        </MenuItem>
      </Select>
    </FormControl>

    <NumberInputs
      classes={classes}
      nameLeft="productionYear_gt"
      nameRight="productionYear_lt"
      labelLeft="Rok produkcji od"
      labelRight="Rok produkcji do"
      valueLeft={filters.productionYear_gt}
      valueRight={filters.productionYear_lt}
      handleChange={handleChange}
    />
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.InputLabel} htmlFor="fuelType">
        Rodzaj paliwa
      </InputLabel>
      <Select
        value={filters.fuelType}
        onChange={handleChange}
        inputProps={{
          name: "fuelType",
          id: "fuelType"
        }}
      >
        <MenuItem value="deleteFromFilters">
          <em>Wszystkie</em>
        </MenuItem>
        {selectsOptions.fuelType.map((item, key) => (
          <MenuItem key={`${item}${key}`} value={item}>
            {enumDisplayedText("Car", "fuelType", item)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <NumberInputs
      classes={classes}
      nameLeft="price_gt"
      nameRight="price_lt"
      labelLeft="Cena od"
      labelRight="Cena do"
      valueLeft={filters.price_gt}
      valueRight={filters.price_lt}
      handleChange={handleChange}
      endAdornment="zł"
    />
    <NumberInputs
      classes={classes}
      nameLeft="mileage_gt"
      nameRight="mileage_lt"
      labelLeft="Przebieg od"
      labelRight="Przebieg do"
      valueLeft={filters.mileage_gt}
      valueRight={filters.mileage_lt}
      handleChange={handleChange}
      endAdornment="km"
    />
    {[
      "Silnik i napęd",
      "Nadwozie",
      "Dodatkowe wyposażenie",
      "Status pojazdu",
      "Informacje finansowe"
    ].map(item => (
      <Button
        key={item}
        className={classes.button}
        variant="outlined"
        color="primary"
      >
        {item}
      </Button>
    ))}
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.InputLabel} htmlFor="localization">
          Miejscowość
        </InputLabel>
        <Select
          value={filters.localization}
          onChange={handleChange}
          inputProps={{
            name: "localization",
            id: "localization"
          }}
        >
          <MenuItem value="deleteFromFilters">
            <em>Wszystkie</em>
          </MenuItem>
          <MenuItem value="Dębica">Dębica</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField
          name="keywords"
          label="Słowa kluczowe"
          value={filters.keywords}
          onChange={handleChange}
        />
      </FormControl>
    </div>
    <div>
      <Fab
        onClick={resetFilters}
        color="secondary"
        className={classes.fabButton}
      >
        <Clear />
      </Fab>
      <Fab color="primary" className={classes.fabButton}>
        <Search />
      </Fab>
    </div>
  </form>
);

export default withStyles(styles)(Filters);
