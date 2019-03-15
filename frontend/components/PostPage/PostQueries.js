import React from "react";
import { Query } from "react-apollo";

import { POST_FIELDS } from "../../src/Queries/searchQueries";
import { postQueryFieldsToDelete } from "./config";
import { composePostQuery } from "./helpers";

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
  <Query
    query={composePostQuery({
      data,
      additionalArgs: { fieldsToDelete: postQueryFieldsToDelete }
    })}
    {...other}
  >
    {({ data, error, loading }) => {
      if (error) return <p>Błąd pobieranie posta</p>;
      if (loading) return <p>Ładowanie posta</p>;
      return React.cloneElement(children, { post: data.post });
    }}
  </Query>
);

export default props => (
  <PostFields>
    <PostQuery variables={{ postId: props.postId }}>{props.children}</PostQuery>
  </PostFields>
);
