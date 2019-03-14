import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { POST_FIELDS } from "../../src/Queries/searchQueries";
import { getTypesFields } from "../../src/globalMethods";

const composePostQuery = data => {
  console.log(data);
  const formattedFields = getTypesFields({
    Car: data.Car.fields
  });
  console.log(formattedFields);
  return gql`
    query POST_QUERY($postId: ID!) {
      post(where: { id: $postId }) {
        price
        car {
          brand
          model
        }
      }
    }
  `;
};

const PostFields = props => (
  <Query query={POST_FIELDS}>
    {({ data, error, loading }) => {
      if (error) return <p>Błąd pobieranie pól posta</p>;
      if (loading) return <p>Ładowanie pól</p>;
      return React.cloneElement(props.children, { data });
    }}
  </Query>
);

const PostQuery = ({ children, data, ...other }) => (
  <Query query={composePostQuery(data)} {...other}>
    {({ data, error, loading }) => {
      if (error) return <p>Błąd pobieranie posta</p>;
      if (loading) return <p>Ładowanie posta</p>;
      return React.cloneElement(children, { data });
    }}
  </Query>
);

export default props => (
  <PostFields>
    <PostQuery variables={{ postId: props.postId }}>{props.children}</PostQuery>
  </PostFields>
);
