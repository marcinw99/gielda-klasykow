import React from "react";
import PropTypes from "prop-types";

import FiltersQuery from "./FiltersQuery";
import Logic from "./Logic";
import Layout from "./Layout";

const Filters = ({ setValueInMainState }) => (
  <FiltersQuery>
    <Logic setValueInMainState={setValueInMainState}>
      <Layout />
    </Logic>
  </FiltersQuery>
);

Filters.propTypes = {
  setValueInMainState: PropTypes.func.isRequired
};

export default Filters;
