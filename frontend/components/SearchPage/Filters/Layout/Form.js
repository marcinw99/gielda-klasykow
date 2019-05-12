import React from "react";
import {
  Grid,
  Hidden,
  Fab,
  FormControlLabel,
  withStyles
} from "@material-ui/core";
import { Query } from "react-apollo";
import PropTypes from "prop-types";

import {
  StyledFilterTitle,
  StyledExtendedFab,
  StyledFormControl,
  StyledClearFab,
  StyledSearchFab,
  StyledSwitch
} from "./styledComponents";
import { Autocomplete } from "../../../universal/Autocompletes";
import DoubleInputs from "../../../universal/DoubleInputs";
import { AVAILABLE_MODELS_OF_BRAND } from "../../../../src/Queries/searchQueries";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 1.5
  },
  formActionsRoot: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  basicFiltersRoot: {
    textAlign: "center"
  },
  advancedFiltersRoot: {
    marginTop: theme.spacing.unit,
    textAlign: "center"
  },
  switchLabel: {
    color: theme.palette.primary.contrastText
  },
  textField: {
    width: 160
  }
});

const Form = props => (
  <form className={props.classes.root}>
    <Hidden mdUp>
      <Grid container justify="flex-end">
        <Fab
          variant="extended"
          className={props.classes.closeFiltersBtn}
          onClick={props.closeDrawer}
        >
          Zamknij panel filtrów
        </Fab>
      </Grid>
    </Hidden>
    <FormActions {...props} />
    <div className={props.classes.basicFiltersRoot}>
      <StyledFilterTitle>Cena (zł)</StyledFilterTitle>
      <DoubleInputs
        className={props.classes.textField}
        canCreateOption
        unit="PLN"
        nameLeft="price_gte"
        nameRight="price_lte"
        labelLeft="Cena od"
        labelRight="Cena do"
        valueLeft={props.values.price_gte}
        valueRight={props.values.price_lte}
        handleChange={props.handleChange}
        options={props.options.Price}
      />
      <StyledFilterTitle>Lokalizacja</StyledFilterTitle>
      <StyledFormControl>
        <Autocomplete
          className={props.classes.textField}
          options={props.options.Location}
          value={props.values.location}
          handleChange={props.handleChange}
          name="location"
          placeholder="Miejscowość"
        />
      </StyledFormControl>
      <StyledFormControl>
        <Autocomplete
          className={props.classes.textField}
          options={props.options.Location}
          value={props.values.location}
          handleChange={props.handleChange}
          name="location"
          placeholder="Zasięg"
        />
      </StyledFormControl>
      <StyledFilterTitle>Cechy pojazdu</StyledFilterTitle>
      <StyledFormControl>
        <Autocomplete
          className={props.classes.textField}
          value={props.values.type}
          options={props.options.Type}
          handleChange={props.handleChange}
          name="type"
          placeholder="Rodzaj nadwozia"
        />
      </StyledFormControl>
      <StyledFormControl>
        <Autocomplete
          className={props.classes.textField}
          value={props.values.fuelType}
          options={props.options.FuelType}
          handleChange={props.handleChange}
          name="fuelType"
          placeholder="Rodzaj paliwa"
        />
      </StyledFormControl>
      <StyledFormControl>
        <Autocomplete
          className={props.classes.textField}
          value={props.values.brand}
          options={props.options.Brand}
          handleChange={props.handleChange}
          name="brand"
          placeholder="Marka pojazdu"
        />
      </StyledFormControl>
      {props.values.brand == null ? (
        <StyledFormControl>
          <Autocomplete
            className={props.classes.textField}
            options={[]}
            handleChange={() => null}
            placeholder="Model pojazdu"
            name="model"
          />
        </StyledFormControl>
      ) : (
        <Query
          query={AVAILABLE_MODELS_OF_BRAND}
          variables={{
            brand: props.values.brand.value
          }}
        >
          {({ data, error, loading }) => {
            return data ? (
              <StyledFormControl>
                <Autocomplete
                  className={props.classes.textField}
                  value={props.values.model}
                  options={
                    data.availableModelsOfBrand
                      ? data.availableModelsOfBrand.map(item => ({
                          label: `${item.value} (${item.count})`,
                          value: item.value
                        }))
                      : []
                  }
                  handleChange={props.handleChange}
                  name="model"
                  placeholder="Model pojazdu"
                />
              </StyledFormControl>
            ) : null;
          }}
        </Query>
      )}
      <DoubleInputs
        className={props.classes.textField}
        canCreateOption
        unit=""
        nameLeft="productionYear_gte"
        nameRight="productionYear_lte"
        labelLeft="Rok produkcji od"
        labelRight="Rok produkcji do"
        valueLeft={props.values.productionYear_gte}
        valueRight={props.values.productionYear_lte}
        handleChange={props.handleChange}
        options={props.options.ProductionYear}
      />
      <DoubleInputs
        className={props.classes.textField}
        canCreateOption
        unit="km"
        nameLeft="mileage_gte"
        nameRight="mileage_lte"
        labelLeft="Przebieg od"
        labelRight="Przebieg do"
        valueLeft={props.values.mileage_gte}
        valueRight={props.values.mileage_lte}
        handleChange={props.handleChange}
        options={props.options.Mileage}
      />
    </div>
    <StyledFilterTitle>Zaawansowane filtrowanie</StyledFilterTitle>
    <div className={props.classes.advancedFiltersRoot}>
      <StyledExtendedFab onClick={() => props.openModal("EngineAndDriveModal")}>
        Silnik i napęd
      </StyledExtendedFab>
      <StyledExtendedFab
        onClick={() => props.openModal("BodyAndAppereanceModal")}
      >
        Nadwozie i wygląd
      </StyledExtendedFab>
      <StyledExtendedFab
        onClick={() => props.openModal("AdditionalAccessoriesModal")}
      >
        Dodatkowe wyposażenie
      </StyledExtendedFab>
      <StyledExtendedFab onClick={() => props.openModal("VehicleStatusModal")}>
        Status pojazdu
      </StyledExtendedFab>
    </div>
  </form>
);

const FormActions = props => (
  <Grid
    className={props.classes.formActionsRoot}
    container
    justify="space-between"
    alignItems="center"
  >
    <Grid item>
      <FormControlLabel
        classes={{ label: props.classes.switchLabel }}
        control={
          <StyledSwitch
            checked={props.automaticFiltering}
            onChange={props.toggleAutomaticFiltering}
          />
        }
        label="Filtruj po zmianie"
      />
    </Grid>
    <Grid item>
      <StyledClearFab onClick={props.resetFilters} />
      <StyledSearchFab
        disabled={props.automaticFiltering}
        onClick={props.manualResultsRefetch}
      />
    </Grid>
  </Grid>
);

Form.PropTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
