import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import Filters from "./Filters";
import Sorters from "./Sorters";
import { prepareSelectsOptions } from "../../../src/helpers";

class Searcharea extends Component {
  state = {
    filters: {
      segment: "",
      brand: "",
      model: "",
      fuelType: "",
      localization: ""
    }
  };

  handleFiltersChange = event => {
    const { name, value } = event.target;
    if (value == null || value.length === 0) return null;
    this.setState(
      prevState => ({
        filters: {
          ...prevState.filters,
          // Material UI input type number returns a string, this parses to number
          [name]: isNaN(Number(value)) ? value : Number(value)
        }
      }),
      () => {
        this.props.refreshFiltersQuery(this.state.filters);
      }
    );
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
