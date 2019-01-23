import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";

import Filters from "./Filters";
import Sorters from "./Sorters";
import ItemsLimit from "./ItemsLimit";

class SearchBar extends Component {
  render() {
    return (
      <Grid container direction="column">
        <Grid item>
          <Filters
            data={this.props.data}
            setValueInMainState={this.props.setValueInMainState}
          />
        </Grid>
        <Grid item>
          <Grid container justify="space-between">
            {/*<ItemsLimit
              value={this.state.itemsLimit}
              handleChange={this.handleItemsLimitChange}
            /> */}
            <Sorters setValueInMainState={this.props.setValueInMainState} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

SearchBar.propTypes = {
  setValueInMainState: PropTypes.func.isRequired
};

export default SearchBar;
