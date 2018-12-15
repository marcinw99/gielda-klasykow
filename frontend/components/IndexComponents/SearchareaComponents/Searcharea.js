import React, { Component } from "react";
import { Grid } from "@material-ui/core";

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
    readyToFilter: false
  };

  componentDidMount() {
    const Post = this.props.data.Post.fields.map(item => item.name);
    const Car = this.props.data.Car.fields.map(item => item.name);
    this.setState({
      queryAttributes: { Post, Car },
      readyToFilter: true
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
    if (this.state.readyToFilter === false) return null;
    const { name, value } = event.target;
    this.setState(
      prevState => ({
        filters: {
          ...prevState.filters,
          // Material UI <input type="number" /> returns a string, this parses to number
          [name]: isNaN(Number(value)) ? value : Number(value)
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
          <Sorters />
        </Grid>
      </Grid>
    );
  }
}

export default Searcharea;
