import React, { Component } from "react";
import PropTypes from "prop-types";

import { blankFiltersState, initialSearchParameters } from "../../config";
import { prepareOptions, getFormattedPayload } from "../../helpers";
import {
  getTypesFields,
  assignValuesToProperDataType
} from "../../../../src/globalMethods";

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
    const formattedPayload = getFormattedPayload({
      ...this.state.filters
    });
    const queryFilters = assignValuesToProperDataType({
      values: formattedPayload,
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

  handleChangeWithoutFiltering = ({ name, value }) => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        // reset model if brand is changed
        model: name === "brand" ? null : prevState.filters.model,
        [name]: value
      }
    }));
  };

  resetFilters = () => {
    this.setState({ filters: blankFiltersState }, () => {
      this.submitFilters();
    });
  };

  resetSpecificFiltersWithoutFiltering = blankFilters => {
    this.setState(prevState => ({
      filters: { ...prevState.filters, ...blankFilters }
    }));
  };

  toggleAutomaticFiltering = () => {
    this.setState(prevState => ({
      automaticFiltering: !prevState.automaticFiltering
    }));
  };

  render() {
    const options = prepareOptions(this.props.data);
    return React.cloneElement(this.props.children, {
      values: this.state.filters,
      handleChange: this.handleChange,
      handleChangeWithoutFiltering: this.handleChangeWithoutFiltering,
      resetFilters: this.resetFilters,
      resetSpecificFiltersWithoutFiltering: this
        .resetSpecificFiltersWithoutFiltering,
      options,
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
