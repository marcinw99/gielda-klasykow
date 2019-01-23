import React from "react";
import { Query } from "react-apollo";

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
        return React.cloneElement(children, { data });
      }}
    </Query>
  );
};

export default FiltersQuery;
