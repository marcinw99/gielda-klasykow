import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

import Filters from "./Filters";
import Sorters from "./Sorters";
import {
  prepareSelectsOptions,
  shouldBeInQueryObject,
  typeAcceptsValue
} from "../../../src/helpers";

const blankFiltersState = {
  segment: "",
  brand: "",
  model: "",
  fuelType: "",
  localization: "",
  productionYear_gt: "",
  productionYear_lt: "",
  mileage_gt: "",
  mileage_lt: "",
  price_lt: "",
  price_gt: "",
  keywords: ""
};

class Searcharea extends Component {
  state = {
    filters: blankFiltersState,
    readyToSearch: false,
    sortBy: this.props.initialSortBy
  };

  componentDidMount() {
    const Post = this.props.data.Post.fields.map(item => item.name);
    const Car = this.props.data.Car.fields.map(item => item.name);
    this.setState({
      queryAttributes: { Post, Car },
      readyToSearch: true
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
    this.props.refreshFiltersQuery(queryObject);
  };

  handleFiltersChange = event => {
    if (this.state.readyToSearch === false) return null;
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

  handleSortersChange = event => {
    if (this.state.readyToSearch === false) return null;
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        this.props.refreshSortersQuery(this.state.sortBy);
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
          <Sorters
            value={this.state.sortBy}
            handleChange={this.handleSortersChange}
          />
        </Grid>
      </Grid>
    );
  }
}

Searcharea.propTypes = {
  refreshFiltersQuery: PropTypes.func.isRequired,
  refreshSortersQuery: PropTypes.func.isRequired,
  initialSortBy: PropTypes.string.isRequired
};

export default Searcharea;
