import React, { Component } from "react";
import PropTypes from "prop-types";

import { blankFiltersState, initialSearchParameters } from "../../config";

const initialState = {
  filters: { ...blankFiltersState, ...initialSearchParameters.filters }
};

class Logic extends Component {
  state = initialState;

  componentDidMount() {
    const { Post, Car } = getFormattedQueryAttributes(this.props.data);
    this.setState({
      queryAttributes: { Post, Car }
    });
  }

  sendFiltersQueryObject = () => {
    var queryObject = { car: {} };
    Object.keys(this.state.filters).map(name => {
      if (!shouldBeInQueryObject(this.state.filters[name])) {
        return false;
      }
      if (typeAcceptsValue(this.state.queryAttributes.Post, name)) {
        queryObject[name] = this.state.filters[name];
      }
      if (typeAcceptsValue(this.state.queryAttributes.Car, name)) {
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
        this.sendFiltersQueryObject();
      }
    );
  };

  resetFilters = () => {
    this.setState({ filters: blankFiltersState }, () => {
      this.sendFiltersQueryObject();
    });
  };

  render() {
    const selectsOptions = prepareSelectsOptions(this.props.data.Enums.fields);
    return React.cloneElement(this.props.children, {
      values: formatObjectValuesToStrings(this.state.filters),
      handleChange: this.handleChange,
      resetFilters: this.resetFilters,
      selectsOptions: selectsOptions
    });
  }
}

function getFormattedQueryAttributes(data) {
  const Post = data.Post.fields.map(item => item.name);
  const Car = data.Car.fields.map(item => item.name);
  return { Post, Car };
}

function prepareSelectsOptions(input) {
  // returns possible values of enum types in db
  // sometimes (when value is required in db) enumValues and typename are in type.ofType instead of type
  var values = input.filter(item => {
    if (item.type.kind === "ENUM") {
      return true;
    }
    if (item.type.ofType != null) {
      if (item.type.ofType.kind === "ENUM") {
        return true;
      }
    }
    return false;
  });
  var results = {};
  for (let item in values) {
    results[values[item].name] = (values[item].type.enumValues == null
      ? values[item].type.ofType.enumValues
      : values[item].type.enumValues
    ).map(item => item.name);
  }
  return results;
}

function formatObjectValuesToStrings(object) {
  var result = {};
  Object.keys(object).map(item => {
    result[item] = String(object[item]);
  });
  return result;
}

const shouldBeInQueryObject = value =>
  value == null || value.length === 0 || value === "deleteFromFilters"
    ? false
    : true;

const typeAcceptsValue = (type, value) =>
  type.indexOf(value) !== -1 || type.indexOf(value.slice(0, -3)) !== -1
    ? true
    : false;

export default Logic;
