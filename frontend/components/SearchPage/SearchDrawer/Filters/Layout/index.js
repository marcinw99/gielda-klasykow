import React, { Component, Fragment } from "react";
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
import { Autocomplete } from "./Autocompletes";
import DoubleInputs from "./DoubleInputs";
import enumDisplayedText from "../../../../../resources/enumsDisplayedText";
import { AVAILABLE_MODELS_OF_BRAND } from "../../../../../src/Queries/searchQueries";
import EngineAndDriveModal from "./modals/EngineAndDriveModal";
import BodyModal from "./modals/BodyModal";
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

  render() {
    const modalProps = {
      openedModal: this.state.openedModal,
      handleChange: this.props.handleChangeWithoutFiltering,
      values: this.props.values,
      resetSpecificFiltersWithoutFiltering: this.props
        .resetSpecificFiltersWithoutFiltering,
      selectsOptions: this.props.selectsOptions,
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
              canCreateOption
              unit="PLN"
              nameLeft="price_gt"
              nameRight="price_lt"
              labelLeft="Cena od"
              labelRight="Cena do"
              valueLeft={this.props.values.price_gt}
              valueRight={this.props.values.price_lt}
              handleChange={this.props.handleChange}
              options={this.props.selectsOptions.price.map(item => ({
                label: `${item} PLN`,
                value: item
              }))}
            />
            <StyledFilterTitle>Lokalizacja</StyledFilterTitle>
            <StyledFormControl>
              <Autocomplete
                options={this.props.selectsOptions.localization.map(item => ({
                  label: item,
                  value: item
                }))}
                value={this.props.values.localization}
                handleChange={this.props.handleChange}
                name="localization"
                placeholder="Miejscowość"
              />
            </StyledFormControl>
            <StyledFormControl>
              <Autocomplete
                options={this.props.selectsOptions.localization.map(item => ({
                  label: item,
                  value: item
                }))}
                value={this.props.values.localization}
                handleChange={this.props.handleChange}
                name="localization"
                placeholder="Zasięg"
              />
            </StyledFormControl>
            <StyledFilterTitle>Cechy pojazdu</StyledFilterTitle>
            <StyledFormControl>
              <Autocomplete
                value={this.props.values.segment}
                options={this.props.selectsOptions.segment.map(item => ({
                  label: item,
                  value: item
                }))}
                handleChange={this.props.handleChange}
                name="segment"
                placeholder="Segment"
              />
            </StyledFormControl>
            <StyledFormControl>
              <Autocomplete
                value={this.props.values.fuelType}
                options={this.props.selectsOptions.fuelType.map(item => ({
                  label: enumDisplayedText("fuelType", item),
                  value: item
                }))}
                handleChange={this.props.handleChange}
                name="fuelType"
                placeholder="Rodzaj paliwa"
              />
            </StyledFormControl>
            <StyledFormControl>
              <Autocomplete
                value={this.props.values.brand}
                options={
                  this.props.selectsOptions.brand
                    ? this.props.selectsOptions.brand.map(item => ({
                        label: `${enumDisplayedText("brand", item.value)} (${
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
              canCreateOption
              unit=""
              nameLeft="productionYear_gt"
              nameRight="productionYear_lt"
              labelLeft="Rok produkcji od"
              labelRight="Rok produkcji do"
              valueLeft={this.props.values.productionYear_gt}
              valueRight={this.props.values.productionYear_lt}
              handleChange={this.props.handleChange}
              options={this.props.selectsOptions.productionYear.map(item => ({
                label: item,
                value: item
              }))}
            />
            <DoubleInputs
              canCreateOption
              unit="km"
              nameLeft="mileage_gt"
              nameRight="mileage_lt"
              labelLeft="Przebieg od"
              labelRight="Przebieg do"
              valueLeft={this.props.values.mileage_gt}
              valueRight={this.props.values.mileage_lt}
              handleChange={this.props.handleChange}
              options={this.props.selectsOptions.mileage.map(item => ({
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
            <StyledExtendedFab onClick={() => this.openModal("BodyModal")}>
              Nadwozie
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
        <BodyModal {...modalProps} />
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
  selectsOptions: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
