import React from "react";
import { Grid, FormControlLabel } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Query } from "react-apollo";
import PropTypes from "prop-types";

import {
  StyledClearFab,
  StyledSearchFab,
  StyledFilterTitle,
  StyledSwitch,
  StyledExtendedFab,
  StyledFormControl
} from "./styledComponents";
import Autocomplete from "./Autocomplete";
import DoubleInputs from "./DoubleInputs";
import enumDisplayedText from "../../../../../resources/enumsDisplayedText";
import { AVAILABLE_MODELS_OF_BRAND } from "../../../../../src/Queries/searchQueries";

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
  }
});

const Layout = props => (
  <form className={props.classes.root}>
    <FormActions {...props} />
    <div className={props.classes.basicFiltersRoot}>
      <StyledFilterTitle>Cena (zł)</StyledFilterTitle>
      <DoubleInputs
        nameLeft="price_gt"
        nameRight="price_lt"
        labelLeft="Cena od"
        labelRight="Cena do"
        valueLeft={props.values.price_gt}
        valueRight={props.values.price_lt}
        handleChange={props.handleChange}
        options={props.selectsOptions.price.map(item => ({
          label: `${item} PLN`,
          value: item
        }))}
      />
      <StyledFilterTitle>Lokalizacja</StyledFilterTitle>
      <StyledFormControl>
        <Autocomplete
          options={props.selectsOptions.localization.map(item => ({
            label: item,
            value: item
          }))}
          value={props.values.localization}
          handleChange={props.handleChange}
          name="localization"
          placeholder="Miejscowość"
        />
      </StyledFormControl>
      <StyledFormControl>
        <Autocomplete
          options={props.selectsOptions.localization.map(item => ({
            label: item,
            value: item
          }))}
          value={props.values.localization}
          handleChange={props.handleChange}
          name="localization"
          placeholder="Zasięg"
        />
      </StyledFormControl>
      <StyledFilterTitle>Cechy pojazdu</StyledFilterTitle>
      <StyledFormControl>
        <Autocomplete
          value={props.values.segment}
          options={props.selectsOptions.segment.map(item => ({
            label: item,
            value: item
          }))}
          handleChange={props.handleChange}
          name="segment"
          placeholder="Segment"
        />
      </StyledFormControl>
      <StyledFormControl>
        <Autocomplete
          value={props.values.fuelType}
          options={props.selectsOptions.fuelType.map(item => ({
            label: enumDisplayedText("Car", "fuelType", item),
            value: item
          }))}
          handleChange={props.handleChange}
          name="fuelType"
          placeholder="Rodzaj paliwa"
        />
      </StyledFormControl>
      <StyledFormControl>
        <Autocomplete
          value={props.values.brand}
          options={props.selectsOptions.brand.map(item => ({
            label: enumDisplayedText("Car", "brand", item),
            value: item
          }))}
          handleChange={props.handleChange}
          name="brand"
          placeholder="Marka pojazdu"
        />
      </StyledFormControl>
      {props.values.brand == null ? (
        <StyledFormControl>
          <Autocomplete
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
        nameLeft="productionYear_gt"
        nameRight="productionYear_lt"
        labelLeft="Rok produkcji od"
        labelRight="Rok produkcji do"
        valueLeft={props.values.productionYear_gt}
        valueRight={props.values.productionYear_lt}
        handleChange={props.handleChange}
        options={props.selectsOptions.productionYear.map(item => ({
          label: item,
          value: item
        }))}
      />
      <DoubleInputs
        nameLeft="mileage_gt"
        nameRight="mileage_lt"
        labelLeft="Przebieg od"
        labelRight="Przebieg do"
        valueLeft={props.values.mileage_gt}
        valueRight={props.values.mileage_lt}
        handleChange={props.handleChange}
        options={props.selectsOptions.mileage.map(item => ({
          label: `${item} km`,
          value: item
        }))}
      />
    </div>
    <StyledFilterTitle>Zaawansowane filtrowanie</StyledFilterTitle>
    <div className={props.classes.advancedFiltersRoot}>
      {[
        "Silnik i napęd",
        "Nadwozie",
        "Dodatkowe wyposażenie",
        "Status pojazdu",
        "Informacje finansowe"
      ].map(item => (
        <StyledExtendedFab key={item}>{item}</StyledExtendedFab>
      ))}
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

Layout.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  selectsOptions: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
