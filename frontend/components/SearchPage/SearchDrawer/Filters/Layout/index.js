import React from "react";
import {
  FormControl,
  Grid,
  Fab,
  Switch,
  FormControlLabel
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Query } from "react-apollo";
import PropTypes from "prop-types";

import { StyledClearFab, StyledSearchFab } from "./styledComponents";
import Autocomplete from "./Autocomplete";
import DoubleInputs from "./DoubleInputs";
import enumDisplayedText from "../../../../../resources/enumsDisplayedText";
import { AVAILABLE_MODELS_OF_BRAND } from "../../../../../src/Queries/searchQueries";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit
  },
  switchLabel: {
    color: "#fafafa"
  },
  basicFiltersRoot: {
    textAlign: "center"
  },
  doubleInputsContainer: {
    display: "inline-flex"
  },
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
  formActionsRoot: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  advancedFiltersRoot: {
    marginTop: theme.spacing.unit,
    textAlign: "center"
  }
});

const Layout = props => (
  <form className={props.classes.root}>
    <FormActions {...props} />
    <div className={props.classes.basicFiltersRoot}>
      <FormControl className={props.classes.formControl}>
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
      </FormControl>
      <FormControl className={props.classes.formControl}>
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
      </FormControl>
      <FormControl className={props.classes.formControl}>
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
      </FormControl>
      {props.values.brand && props.values.brand.length !== 0 ? (
        <Query
          query={AVAILABLE_MODELS_OF_BRAND}
          variables={{
            brand: props.values.brand
          }}
        >
          {({ data, error, loading }) => (
            <FormControl className={props.classes.formControl}>
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
            </FormControl>
          )}
        </Query>
      ) : null}
      <FormControl className={props.classes.formControl}>
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
      </FormControl>
      <DoubleInputs
        classes={props.classes}
        nameLeft="productionYear_gt"
        nameRight="productionYear_lt"
        labelLeft="Rok produkcji od"
        labelRight="Rok produkcji do"
        valueLeft={props.values.productionYear_gt}
        valueRight={props.values.productionYear_lt}
        handleChange={e => handleChange(e, true)}
        options={props.selectsOptions.productionYear.map(item => ({
          label: item,
          value: item
        }))}
      />
      <DoubleInputs
        classes={props.classes}
        nameLeft="price_gt"
        nameRight="price_lt"
        labelLeft="Cena od"
        labelRight="Cena do"
        valueLeft={props.values.price_gt}
        valueRight={props.values.price_lt}
        handleChange={e => handleChange(e, true)}
        options={props.selectsOptions.price.map(item => ({
          label: `${item} PLN`,
          value: item
        }))}
      />
      <DoubleInputs
        classes={props.classes}
        nameLeft="mileage_gt"
        nameRight="mileage_lt"
        labelLeft="Przebieg od"
        labelRight="Przebieg do"
        valueLeft={props.values.mileage_gt}
        valueRight={props.values.mileage_lt}
        handleChange={e => handleChange(e, true)}
        options={props.selectsOptions.mileage.map(item => ({
          label: `${item} km`,
          value: item
        }))}
      />
    </div>
    <div className={props.classes.advancedFiltersRoot}>
      {[
        "Silnik i napęd",
        "Nadwozie",
        "Dodatkowe wyposażenie",
        "Status pojazdu",
        "Informacje finansowe"
      ].map(item => (
        <Fab
          key={item}
          className={props.classes.button}
          variant="extended"
          color="default"
        >
          {item}
        </Fab>
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
        classes={{
          label: props.classes.switchLabel
        }}
        control={
          <Switch
            checked={props.automaticFiltering}
            onChange={props.toggleAutomaticFiltering}
          />
        }
        label="Automatyczne filtrowanie"
      />
    </Grid>
    <Grid item>
      <StyledClearFab onClick={props.resetFilters} />
      <StyledSearchFab disabled={props.automaticFiltering} />
    </Grid>
  </Grid>
);

Layout.propTypes = {
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  selectsOptions: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
