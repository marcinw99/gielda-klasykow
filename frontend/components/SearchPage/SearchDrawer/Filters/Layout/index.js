import React, { Component, Fragment } from "react";
import { Grid, FormControlLabel } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Query } from "react-apollo";
import PropTypes from "prop-types";
import { remove } from "lodash";

import {
  StyledClearFab,
  StyledSearchFab,
  StyledFilterTitle,
  StyledSwitch,
  StyledExtendedFab,
  StyledFormControl
} from "./styledComponents";
import { Autocomplete } from "../../../../universal/Autocompletes";
import DoubleInputs from "../../../../universal/DoubleInputs";
import displayedText from "../../../../../resources/displayedText";
import { AVAILABLE_MODELS_OF_BRAND } from "../../../../../src/Queries/searchQueries";
import EngineAndDriveModal from "./modals/EngineAndDriveModal";
import BodyAndAppereanceModal from "./modals/BodyAndAppereanceModal";
import AdditionalAccessoriesModal from "./modals/AdditionalAccessoriesModal";
import VehicleStatusModal from "./modals/VehicleStatusModal";

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

class Layout extends Component {
  state = {
    openedModal: false
  };

  openModal = name => {
    this.setState({
      openedModal: name
    });
  };

  closeModal = () => {
    this.setState({
      openedModal: false
    });
  };

  submitModal = () => {
    this.setState(
      {
        openedModal: false
      },
      () => {
        this.props.manualResultsRefetch();
      }
    );
  };

  handleMultiCheckboxChange = field => event => {
    var result;
    const prevValue = [...this.props.values[field]];
    const { value, checked } = event.target;
    if (checked && prevValue.indexOf(value) === -1) {
      result = [...prevValue, value];
    }
    if (!checked && prevValue.indexOf(value) !== -1) {
      result = remove(prevValue, item => item !== value);
    }
    this.props.handleChangeWithoutFiltering({
      name: field,
      value: result
    });
  };

  render() {
    const modalProps = {
      openedModal: this.state.openedModal,
      handleChangeWithoutFiltering: this.props.handleChangeWithoutFiltering,
      handleMultiCheckboxChange: this.handleMultiCheckboxChange,
      values: this.props.values,
      resetSpecificFiltersWithoutFiltering: this.props
        .resetSpecificFiltersWithoutFiltering,
      options: this.props.options,
      submitModal: this.submitModal,
      closeModal: this.closeModal
    };
    return (
      <Fragment>
        <form className={this.props.classes.root}>
          <FormActions {...this.props} />
          <div className={this.props.classes.basicFiltersRoot}>
            <StyledFilterTitle>Cena (zł)</StyledFilterTitle>
            <DoubleInputs
              className={this.props.classes.textField}
              canCreateOption
              unit="PLN"
              nameLeft="price_gte"
              nameRight="price_lte"
              labelLeft="Cena od"
              labelRight="Cena do"
              valueLeft={this.props.values.price_gte}
              valueRight={this.props.values.price_lte}
              handleChange={this.props.handleChange}
              options={this.props.options.Price.map(item => ({
                label: `${item} PLN`,
                value: item
              }))}
            />
            <StyledFilterTitle>Lokalizacja</StyledFilterTitle>
            <StyledFormControl>
              <Autocomplete
                className={this.props.classes.textField}
                options={this.props.options.Location.map(item => ({
                  label: item,
                  value: item
                }))}
                value={this.props.values.location}
                handleChange={this.props.handleChange}
                name="location"
                placeholder="Miejscowość"
              />
            </StyledFormControl>
            <StyledFormControl>
              <Autocomplete
                className={this.props.classes.textField}
                options={this.props.options.Location.map(item => ({
                  label: item,
                  value: item
                }))}
                value={this.props.values.location}
                handleChange={this.props.handleChange}
                name="location"
                placeholder="Zasięg"
              />
            </StyledFormControl>
            <StyledFilterTitle>Cechy pojazdu</StyledFilterTitle>
            <StyledFormControl>
              <Autocomplete
                className={this.props.classes.textField}
                value={this.props.values.type}
                options={this.props.options.Type.map(item => ({
                  label: displayedText("type", item),
                  value: item
                }))}
                handleChange={this.props.handleChange}
                name="type"
                placeholder="Rodzaj nadwozia"
              />
            </StyledFormControl>
            <StyledFormControl>
              <Autocomplete
                className={this.props.classes.textField}
                value={this.props.values.fuelType}
                options={this.props.options.FuelType.map(item => ({
                  label: displayedText("fuelType", item),
                  value: item
                }))}
                handleChange={this.props.handleChange}
                name="fuelType"
                placeholder="Rodzaj paliwa"
              />
            </StyledFormControl>
            <StyledFormControl>
              <Autocomplete
                className={this.props.classes.textField}
                value={this.props.values.brand}
                options={
                  this.props.options.Brand
                    ? this.props.options.Brand.map(item => ({
                        label: `${displayedText("brand", item.value)} (${
                          item.count
                        })`,
                        value: item.value
                      }))
                    : []
                }
                handleChange={this.props.handleChange}
                name="brand"
                placeholder="Marka pojazdu"
              />
            </StyledFormControl>
            {this.props.values.brand == null ? (
              <StyledFormControl>
                <Autocomplete
                  className={this.props.classes.textField}
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
                  brand: this.props.values.brand.value
                }}
              >
                {({ data, error, loading }) => {
                  return data ? (
                    <StyledFormControl>
                      <Autocomplete
                        className={this.props.classes.textField}
                        value={this.props.values.model}
                        options={
                          data.availableModelsOfBrand
                            ? data.availableModelsOfBrand.map(item => ({
                                label: `${item.value} (${item.count})`,
                                value: item.value
                              }))
                            : []
                        }
                        handleChange={this.props.handleChange}
                        name="model"
                        placeholder="Model pojazdu"
                      />
                    </StyledFormControl>
                  ) : null;
                }}
              </Query>
            )}
            <DoubleInputs
              className={this.props.classes.textField}
              canCreateOption
              unit=""
              nameLeft="productionYear_gte"
              nameRight="productionYear_lte"
              labelLeft="Rok produkcji od"
              labelRight="Rok produkcji do"
              valueLeft={this.props.values.productionYear_gte}
              valueRight={this.props.values.productionYear_lte}
              handleChange={this.props.handleChange}
              options={this.props.options.ProductionYear.map(item => ({
                label: item,
                value: item
              }))}
            />
            <DoubleInputs
              className={this.props.classes.textField}
              canCreateOption
              unit="km"
              nameLeft="mileage_gte"
              nameRight="mileage_lte"
              labelLeft="Przebieg od"
              labelRight="Przebieg do"
              valueLeft={this.props.values.mileage_gte}
              valueRight={this.props.values.mileage_lte}
              handleChange={this.props.handleChange}
              options={this.props.options.Mileage.map(item => ({
                label: `${item} km`,
                value: item
              }))}
            />
          </div>
          <StyledFilterTitle>Zaawansowane filtrowanie</StyledFilterTitle>
          <div className={this.props.classes.advancedFiltersRoot}>
            <StyledExtendedFab
              onClick={() => this.openModal("EngineAndDriveModal")}
            >
              Silnik i napęd
            </StyledExtendedFab>
            <StyledExtendedFab
              onClick={() => this.openModal("BodyAndAppereanceModal")}
            >
              Nadwozie i wygląd
            </StyledExtendedFab>
            <StyledExtendedFab
              onClick={() => this.openModal("AdditionalAccessoriesModal")}
            >
              Dodatkowe wyposażenie
            </StyledExtendedFab>
            <StyledExtendedFab
              onClick={() => this.openModal("VehicleStatusModal")}
            >
              Status pojazdu
            </StyledExtendedFab>
          </div>
        </form>
        <EngineAndDriveModal {...modalProps} />
        <BodyAndAppereanceModal {...modalProps} />
        <AdditionalAccessoriesModal {...modalProps} />
        <VehicleStatusModal {...modalProps} />
      </Fragment>
    );
  }
}

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
  options: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
