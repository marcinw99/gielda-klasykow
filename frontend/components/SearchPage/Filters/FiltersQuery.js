import React from "react";
import { Query } from "react-apollo";
import PropTypes from "prop-types";

import {
  SearchDrawerError,
  StyledSearchDrawerLoadingScreen
} from "./Layout/styledComponents";
import { FILTERS_QUERIES } from "../../../src/Queries/searchQueries";

const FiltersQuery = ({ children }) => {
  return (
    <Query query={FILTERS_QUERIES}>
      {({ data, error, loading }) => {
        if (loading) {
          return <StyledSearchDrawerLoadingScreen />;
        }
        if (error) return <SearchDrawerError />;
        if (data) return React.cloneElement(children, { data });
        return <SearchDrawerError />;
      }}
    </Query>
  );
};

FiltersQuery.propTypes = {
  children: PropTypes.element.isRequired
};

export default FiltersQuery;
