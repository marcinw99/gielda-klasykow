import React from "react";
import { FormControl, Grid, Fab } from "@material-ui/core";
import { Search, Clear } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { Query } from "react-apollo";
import PropTypes from "prop-types";

import Autocomplete from "./Autocomplete";
import DoubleInputs from "./DoubleInputs";
import enumDisplayedText from "../../../../../resources/enumsDisplayedText";
import { AVAILABLE_MODELS_OF_BRAND } from "../../../../../src/Queries/searchQueries";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit
  },
  basicFiltersRoot: {
    textAlign: "center"
  },
  doubleInputsContainer: { display: "inline-flex" },
  formControl: {
    minWidth: 160,
    margin: theme.spacing.unit
  },
  InputLabel: {
    color: theme.palette.primary.main
  },
  button: {
    color: theme.palette.primary.dark,
    minWidth: 140,
    margin: `${theme.spacing.unit * 0.8}px ${theme.spacing.unit * 0.5}px`
  },
  formButtonsRoot: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  fabButton: {
    color: theme.palette.primary.dark,
    background: "#fafafa",
    margin: theme.spacing.unit
  },
  advancedFiltersRoot: {
    marginTop: theme.spacing.unit,
    textAlign: "center"
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
  <form className={classes.root}>
    <FormActionButtons clearFunc={resetFilters} classes={classes} />
    <div className={classes.basicFiltersRoot}>
      <FormControl className={classes.formControl}>
        <Autocomplete
          value={values.segment}
          options={selectsOptions.segment.map(item => ({
            label: item,
            value: item
          }))}
          handleChange={handleChange}
          name="segment"
          placeholder="Segment"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <Autocomplete
          value={values.fuelType}
          options={selectsOptions.fuelType.map(item => ({
            label: enumDisplayedText("Car", "fuelType", item),
            value: item
          }))}
          handleChange={handleChange}
          name="fuelType"
          placeholder="Rodzaj paliwa"
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <Autocomplete
          value={values.brand}
          options={selectsOptions.brand.map(item => ({
            label: enumDisplayedText("Car", "brand", item),
            value: item
          }))}
          handleChange={handleChange}
          name="brand"
          placeholder="Marka pojazdu"
        />
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
              <Autocomplete
                value={values.model}
                options={
                  data.availableModelsOfBrand
                    ? data.availableModelsOfBrand.map(item => ({
                        label: `${item.value} (${item.count})`,
                        value: item.value
                      }))
                    : []
                }
                handleChange={handleChange}
                name="model"
                placeholder="Model pojazdu"
              />
            </FormControl>
          )}
        </Query>
      ) : null}
      <FormControl className={classes.formControl}>
        <Autocomplete
          options={selectsOptions.localization.map(item => ({
            label: item,
            value: item
          }))}
          value={values.localization}
          handleChange={handleChange}
          name="localization"
          placeholder="Miejscowość"
        />
      </FormControl>
      <DoubleInputs
        classes={classes}
        nameLeft="productionYear_gt"
        nameRight="productionYear_lt"
        labelLeft="Rok produkcji od"
        labelRight="Rok produkcji do"
        valueLeft={values.productionYear_gt}
        valueRight={values.productionYear_lt}
        handleChange={e => handleChange(e, true)}
        options={selectsOptions.productionYear.map(item => ({
          label: item,
          value: item
        }))}
      />
      <DoubleInputs
        classes={classes}
        nameLeft="price_gt"
        nameRight="price_lt"
        labelLeft="Cena od"
        labelRight="Cena do"
        valueLeft={values.price_gt}
        valueRight={values.price_lt}
        handleChange={e => handleChange(e, true)}
        options={selectsOptions.price.map(item => ({
          label: `${item} PLN`,
          value: item
        }))}
      />
      <DoubleInputs
        classes={classes}
        nameLeft="mileage_gt"
        nameRight="mileage_lt"
        labelLeft="Przebieg od"
        labelRight="Przebieg do"
        valueLeft={values.mileage_gt}
        valueRight={values.mileage_lt}
        handleChange={e => handleChange(e, true)}
        options={selectsOptions.mileage.map(item => ({
          label: `${item} km`,
          value: item
        }))}
      />
    </div>
    <div className={classes.advancedFiltersRoot}>
      {[
        "Silnik i napęd",
        "Nadwozie",
        "Dodatkowe wyposażenie",
        "Status pojazdu",
        "Informacje finansowe"
      ].map(item => (
        <Fab
          key={item}
          className={classes.button}
          variant="extended"
          color="default"
        >
          {item}
        </Fab>
      ))}
    </div>
  </form>
);

const FormActionButtons = ({ clearFunc, classes }) => {
  return (
    <Grid className={classes.formButtonsRoot} container justify="flex-end">
      <Fab onClick={clearFunc} color="default" className={classes.fabButton}>
        <Clear />
      </Fab>
      <Fab color="default" className={classes.fabButton}>
        <Search />
      </Fab>
    </Grid>
  );
};

function SearchBarLoadingScreenComponent({ rootCss }) {
  return (
    <div className={rootCss}>
      <LinearProgress size={100} />
    </div>
  );
}

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

const SearchBarLoadingScreen = withStyles(styles)(
  SearchBarLoadingScreenComponent
);

export { SearchBarError, SearchBarLoadingScreen };
export default withStyles(styles)(Layout);
