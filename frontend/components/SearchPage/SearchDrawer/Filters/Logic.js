import React, { Component } from "react";
import PropTypes from "prop-types";

import { blankFiltersState, initialSearchParameters } from "../../config";
import {
  prepareOptions,
  addLabelsForOptions,
  getFormattedPayload,
  filterValueIsInvalid
} from "../../helpers";
import {
  getTypesFields,
  assignValuesToProperDataType
} from "../../../../src/globalMethods";
import { withSnackbar } from "../../../Snackbar/Context";
import displayedText from "../../../../resources/displayedText";

const initialState = {
  filters: { ...blankFiltersState, ...initialSearchParameters.filters },
  automaticFiltering: true
};

class Logic extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.options = addLabelsForOptions(prepareOptions(this.props.data));
  }

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
    this.setFilterInState({
      name,
      value,
      callback: () => {
        if (this.state.automaticFiltering) {
          this.submitFilters();
        }
      }
    });
  };

  handleChangeWithoutFiltering = ({ name, value }) => {
    this.setFilterInState({ name, value });
  };

  setFilterInState = ({ name, value, callback }) => {
    if (filterValueIsInvalid({ name, value })) {
      this.props.manageSnackbar({
        open: true,
        message: `Nie można filtrować takiej wartości w polu: ${displayedText(
          "attributesNames",
          name
        )}`,
        variant: "error"
      });
      return null;
    }
    this.setState(
      prevState => ({
        filters: {
          ...prevState.filters,
          // reset model if brand is changed
          model: name === "brand" ? null : prevState.filters.model,
          [name]: value
        }
      }),
      callback
    );
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
    return React.cloneElement(this.props.children, {
      values: this.state.filters,
      handleChange: this.handleChange,
      handleChangeWithoutFiltering: this.handleChangeWithoutFiltering,
      resetFilters: this.resetFilters,
      resetSpecificFiltersWithoutFiltering: this
        .resetSpecificFiltersWithoutFiltering,
      options: this.options,
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

export default withSnackbar(Logic);
