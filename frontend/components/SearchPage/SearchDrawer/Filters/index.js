import React from "react";
import PropTypes from "prop-types";

import FiltersQuery from "./FiltersQuery";
import Logic from "./Logic";
import Layout from "./Layout";

const Filters = props => (
  <FiltersQuery>
    <Logic {...props}>
      <Layout closeDrawer={props.closeDrawer} />
    </Logic>
  </FiltersQuery>
);

Filters.propTypes = {
  setValueInMainState: PropTypes.func.isRequired
};

export default Filters;
