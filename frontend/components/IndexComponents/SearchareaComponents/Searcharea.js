import React, { Component } from "react";
import { Grid } from "@material-ui/core";

import Filters from "./Filters";
import Sorters from "./Sorters";
import { prepareSelectsOptions } from "../../../src/helpers";

class Searcharea extends Component {
  render() {
    const selectsOptions = prepareSelectsOptions(
      this.props.enums.__type.fields
    );
    return (
      <Grid container direction="column">
        <Grid item>
          <Filters
            handleChange={this.props.handleFiltersChange}
            selectsOptions={selectsOptions}
            filters={this.props.filters}
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
