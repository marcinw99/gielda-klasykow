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
import { Query } from "react-apollo";
import PropTypes from "prop-types";

import NumberInputs from "./NumberInputs";
import enumDisplayedText from "../../../../resources/enumsDisplayedText";
import { AVAILABLE_MODELS_OF_BRAND } from "../../../../src/Queries/searchQueries";

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
  },
  loadingScreen: {
    textAlign: "center"
  }
});

const Layout = ({
  classes,
  values,
  handleChange,
  resetFilters,
  selectsOptions
}) => (
  <form className={classes.form}>
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.InputLabel} htmlFor="segment">
        Segment
      </InputLabel>
      <Select
        value={values.segment}
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
        value={values.brand}
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
    {values.brand && values.brand.length !== 0 ? (
      <Query
        query={AVAILABLE_MODELS_OF_BRAND}
        variables={{
          brand: values.brand
        }}
      >
        {({ data, error, loading }) => (
          <FormControl className={classes.formControl}>
            <InputLabel className={classes.InputLabel} htmlFor="model">
              Model pojazdu
            </InputLabel>
            <Select
              value={values.model}
              onChange={handleChange}
              inputProps={{
                name: "model",
                id: "model"
              }}
            >
              <MenuItem value="deleteFromFilters">
                <em>Wszystkie</em>
              </MenuItem>
              {data.availableModelsOfBrand
                ? data.availableModelsOfBrand.map(item => (
                    <MenuItem key={item.value} value={item.value}>
                      {`${item.value} (${item.count})`}
                    </MenuItem>
                  ))
                : null}
            </Select>
          </FormControl>
        )}
      </Query>
    ) : null}
    <NumberInputs
      classes={classes}
      nameLeft="productionYear_gt"
      nameRight="productionYear_lt"
      labelLeft="Rok produkcji od"
      labelRight="Rok produkcji do"
      valueLeft={values.productionYear_gt}
      valueRight={values.productionYear_lt}
      handleChange={e => handleChange(e, true)}
    />
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.InputLabel} htmlFor="fuelType">
        Rodzaj paliwa
      </InputLabel>
      <Select
        value={values.fuelType}
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
      valueLeft={values.price_gt}
      valueRight={values.price_lt}
      handleChange={e => handleChange(e, true)}
      endAdornment="zł"
    />
    <NumberInputs
      classes={classes}
      nameLeft="mileage_gt"
      nameRight="mileage_lt"
      labelLeft="Przebieg od"
      labelRight="Przebieg do"
      valueLeft={values.mileage_gt}
      valueRight={values.mileage_lt}
      handleChange={e => handleChange(e, true)}
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
          value={values.localization}
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
          value={values.keywords}
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

function SearchBarLoadingScreenComponent({ rootCss }) {
  return (
    <div className={rootCss}>
      <LinearProgress size={100} />
    </div>
  );
}

const SearchBarLoadingScreen = withStyles(styles)(
  SearchBarLoadingScreenComponent
);

function SearchBarError() {
  return (
    <Typography variant="h6" color="secondary">
      Błąd przy pobieraniu opcji filtrowania
    </Typography>
  );
}

Layout.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  selectsOptions: PropTypes.object.isRequired
};

export { SearchBarError, SearchBarLoadingScreen };
export default withStyles(styles)(Layout);
