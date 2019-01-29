import React from "react";
import PropTypes from "prop-types";

import Filters from "./Filters";

const SearchBar = ({ data, setValueInMainState }) => (
  <Filters data={data} setValueInMainState={setValueInMainState} />
);

SearchBar.propTypes = {
  setValueInMainState: PropTypes.func.isRequired
};

export default SearchBar;
