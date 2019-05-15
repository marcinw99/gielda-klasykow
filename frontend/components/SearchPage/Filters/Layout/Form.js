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
  StyledClearFab,
  StyledSearchFab,
  StyledSwitch
} from "./styledComponents";
import { Autocomplete, Creatable } from "../../../universal/Autocompletes";
import { AVAILABLE_MODELS_OF_BRAND } from "../../../../src/Queries/searchQueries";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 1.5
  },
  formActionsRoot: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  switchLabel: {
    color: theme.palette.primary.contrastText
  },
  closeFiltersBtn: {
    color: theme.palette.primary.dark,
    background: theme.palette.primary.contrastText,
    marginRight: theme.spacing.unit * 2
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
    <div>
      <StyledFilterTitle>Cena (zł)</StyledFilterTitle>
      <Creatable
        unit="PLN"
        name="price_gte"
        placeholder="Cena od"
        value={props.values.price_gte}
        handleChange={props.handleChange}
        options={props.options.Price}
      />
      <Creatable
        unit="PLN"
        name="price_lte"
        placeholder="Cena do"
        value={props.values.price_lte}
        handleChange={props.handleChange}
        options={props.options.Price}
      />
      <StyledFilterTitle>Lokalizacja</StyledFilterTitle>
      <Autocomplete
        options={props.options.Location}
        value={props.values.location}
        handleChange={props.handleChange}
        name="location"
        placeholder="Miejscowość"
      />
      <Autocomplete
        options={props.options.Location}
        value={props.values.location}
        handleChange={props.handleChange}
        name="location"
        placeholder="Zasięg"
      />
      <StyledFilterTitle>Cechy pojazdu</StyledFilterTitle>
      <Autocomplete
        value={props.values.type}
        options={props.options.Type}
        handleChange={props.handleChange}
        name="type"
        placeholder="Rodzaj nadwozia"
      />
      <Autocomplete
        value={props.values.fuelType}
        options={props.options.FuelType}
        handleChange={props.handleChange}
        name="fuelType"
        placeholder="Rodzaj paliwa"
      />
      <Autocomplete
        value={props.values.brand}
        options={props.options.Brand}
        handleChange={props.handleChange}
        name="brand"
        placeholder="Marka pojazdu"
      />
      {props.values.brand == null ? (
        <Autocomplete
          options={[]}
          handleChange={() => null}
          placeholder="Model pojazdu"
          name="model"
        />
      ) : (
        <Query
          query={AVAILABLE_MODELS_OF_BRAND}
          variables={{
            brand: props.values.brand.value
          }}
        >
          {({ data, error, loading }) => {
            return data ? (
              <Autocomplete
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
            ) : null;
          }}
        </Query>
      )}
      <Creatable
        unit=""
        name="productionYear_gte"
        placeholder="Rok produkcji od"
        value={props.values.productionYear_gte}
        handleChange={props.handleChange}
        options={props.options.ProductionYear}
      />
      <Creatable
        unit=""
        name="productionYear_lte"
        placeholder="Rok produkcji do"
        value={props.values.productionYear_lte}
        handleChange={props.handleChange}
        options={props.options.ProductionYear}
      />
      <Creatable
        unit="km"
        name="mileage_gte"
        placeholder="Przebieg od"
        value={props.values.mileage_gte}
        handleChange={props.handleChange}
        options={props.options.Mileage}
      />
      <Creatable
        unit="km"
        name="mileage_lte"
        placeholder="Przebieg do"
        value={props.values.mileage_lte}
        handleChange={props.handleChange}
        options={props.options.Mileage}
      />
    </div>
    <StyledFilterTitle>Zaawansowane filtrowanie</StyledFilterTitle>
    <div>
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
