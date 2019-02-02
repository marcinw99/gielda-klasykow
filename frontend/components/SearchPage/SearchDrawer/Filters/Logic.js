import React, { Component } from "react";
import PropTypes from "prop-types";

import { blankFiltersState, initialSearchParameters } from "../../config";
import {
  getTypesFields,
  prepareSelectsOptions,
  getFormattedFiltersData,
  assignFiltersToProperQueryObject
} from "../../helpers";

const initialState = {
  filters: { ...blankFiltersState, ...initialSearchParameters.filters },
  automaticFiltering: true
};

class Logic extends Component {
  state = initialState;

  componentDidMount() {
    const typesFields = getTypesFields({
      Car: this.props.data.Car.fields,
      Post: this.props.data.Post.fields
    });
    this.setState({
      typesFields
    });
  }

  submitFilters = () => {
    const formattedFiltersData = getFormattedFiltersData({
      ...this.state.filters
    });
    const queryFilters = assignFiltersToProperQueryObject({
      filters: formattedFiltersData,
      typesFields: this.state.typesFields
    });
    this.props.setValueInMainState({ queryFilters });
  };

  handleChange = ({ name, value }) => {
    this.setState(
      prevState => ({
        filters: {
          ...prevState.filters,
          // reset model if brand is changed
          model: name === "brand" ? null : prevState.filters.model,
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
      values: this.state.filters,
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
