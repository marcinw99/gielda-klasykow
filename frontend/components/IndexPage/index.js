import React from "react";
import { Query } from "react-apollo";

import { NEWEST_POSTS_QUERY } from "../../src/Queries/searchQueries";
import Layout from "./Layout";

const Index = () => {
  return (
    <Query query={NEWEST_POSTS_QUERY}>
      {payload => <Layout {...payload} />}
    </Query>
  );
};

export default Index;
