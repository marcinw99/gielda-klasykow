import React from "react";
import { Query } from "react-apollo";
import PropTypes from "prop-types";

import { SearchBarError, SearchBarLoadingScreen } from "./Layout";
import { FILTERS_QUERIES } from "../../../../src/Queries/searchQueries";

const FiltersQuery = ({ children }) => {
  return (
    <Query query={FILTERS_QUERIES}>
      {({ data, error, loading }) => {
        if (loading) {
          return <SearchBarLoadingScreen />;
        }
        if (error) return <SearchBarError />;
        if (data) return React.cloneElement(children, { data });
        return <SearchBarError />;
      }}
    </Query>
  );
};

FiltersQuery.propTypes = {
  children: PropTypes.element.isRequired
};

export default FiltersQuery;
