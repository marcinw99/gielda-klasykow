import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

import { initialSearchParameters, blankFiltersState } from "../config";
import Filters from "./Filters";
import Sorters from "./Sorters";
import ItemsLimit from "./ItemsLimit";

const initialState = {
  filters: blankFiltersState,
  ...initialSearchParameters
};

class SearchBar extends Component {
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
    this.props.setValueInMainState({ refreshFilters: queryObject });
  };

  handleFiltersChange = event => {
    const { name } = event.target;
    const valueRaw = event.target.value;
    // Material UI <input type="number" /> returns a string, this parses to number
    // If input is model, dont parse to number
    var value;
    if (name !== "model") {
      if (isNaN(Number(valueRaw))) {
        value = valueRaw;
      } else {
        value = Number(valueRaw);
      }
    } else {
      value = valueRaw;
    }
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

  handleItemsLimitChange = event => {};

  render() {
    const selectsOptions = prepareSelectsOptions(this.props.data.Enums.fields);
    return (
      <Grid container direction="column">
        <Grid item>
          <Filters
            handleChange={this.handleFiltersChange}
            selectsOptions={selectsOptions}
            filters={this.state.filters}
            resetFilters={this.resetFilters}
          />
        </Grid>
        <Grid item>
          <Grid container justify="space-between">
            <ItemsLimit
              value={this.state.itemsLimit}
              handleChange={this.handleItemsLimitChange}
            />
            <Sorters setValueInMainState={this.props.setValueInMainState} />
          </Grid>
        </Grid>
      </Grid>
    );
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

const shouldBeInQueryObject = value =>
  value == null || value.length === 0 || value === "deleteFromFilters"
    ? false
    : true;

const typeAcceptsValue = (type, value) =>
  type.indexOf(value) !== -1 || type.indexOf(value.slice(0, -3)) !== -1
    ? true
    : false;

SearchBar.propTypes = {
  setValueInMainState: PropTypes.func.isRequired
};

export default SearchBar;
