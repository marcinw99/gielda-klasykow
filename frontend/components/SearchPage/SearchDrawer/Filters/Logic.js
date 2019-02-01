import React, { Component } from "react";
import PropTypes from "prop-types";

import { blankFiltersState, initialSearchParameters } from "../../config";
import {
  getTypesFields,
  prepareSelectsOptions,
  formatObjectValuesToStrings,
  shouldBeInQueryObject,
  typeAcceptsValue
} from "./helpers";

const initialState = {
  filters: { ...blankFiltersState, ...initialSearchParameters.filters },
  automaticFiltering: true
};

class Logic extends Component {
  state = initialState;

  componentDidMount() {
    const { Post, Car } = getTypesFields(this.props.data);
    this.setState({
      typesFields: { Post, Car }
    });
  }

  submitFilters = () => {
    var queryObject = { car: {} };
    Object.keys(this.state.filters).map(name => {
      if (!shouldBeInQueryObject(this.state.filters[name])) {
        return false;
      }
      if (typeAcceptsValue(this.state.typesFields.Post, name)) {
        queryObject[name] = this.state.filters[name];
      }
      if (typeAcceptsValue(this.state.typesFields.Car, name)) {
        queryObject.car[name] = this.state.filters[name];
      }
    });
    this.props.setValueInMainState({ queryFilters: queryObject });
  };

  handleChange = (event, shouldParseToNumber) => {
    const { name } = event.target;
    const value =
      shouldParseToNumber === true
        ? Number(event.target.value)
        : event.target.value;

    this.setState(
      prevState => ({
        filters: {
          ...prevState.filters,
          // reset model if brand is changed
          model: name === "brand" ? "" : prevState.filters.model || "",
          [name]: value
        }
      }),
      () => {
        if (this.state.automaticFiltering) {
          this.submitFilters();
        }
      }
    );
  };

  resetFilters = () => {
    this.setState({ filters: blankFiltersState }, () => {
      this.submitFilters();
    });
  };

  toggleAutomaticFiltering = () => {
    this.setState(prevState => ({
      automaticFiltering: !prevState.automaticFiltering
    }));
  };

  render() {
    const selectsOptions = prepareSelectsOptions(this.props.data.Enums.fields);
    return React.cloneElement(this.props.children, {
      values: formatObjectValuesToStrings(this.state.filters),
      handleChange: this.handleChange,
      resetFilters: this.resetFilters,
      selectsOptions: selectsOptions,
      automaticFiltering: this.state.automaticFiltering,
      toggleAutomaticFiltering: this.toggleAutomaticFiltering,
      manualResultsRefetch: this.submitFilters
    });
  }
}

Logic.propTypes = {
  children: PropTypes.element.isRequired,
  data: PropTypes.object,
  setValueInMainState: PropTypes.func.isRequired
};

export default Logic;
