import React from "react";
import { Query } from "react-apollo";
import Router from "next/router";

import { POST_FIELDS } from "../../src/Queries/searchQueries";
import { postQueryFieldsToDelete } from "./config";
import { composePostQuery } from "./helpers";
import { Typography, LinearProgress } from "@material-ui/core";

const PostFields = props => (
  <Query query={POST_FIELDS}>
    {({ data, error, loading }) => {
      if (error)
        return (
          <Typography align="center" color="secondary" variant="h4">
            Wystąpił błąd przy pobieraniu danych.
          </Typography>
        );
      if (loading) return <LinearProgress />;
      return React.cloneElement(props.children, { data });
    }}
  </Query>
);

const PostQuery = props => (
  <Query
    query={composePostQuery({
      data: props.data,
      additionalArgs: { fieldsToDelete: postQueryFieldsToDelete }
    })}
    variables={props.variables}
  >
    {({ data, error, loading }) => {
      if (error)
        return (
          <Typography align="center" color="secondary" variant="h4">
            Wystąpił błąd przy pobieraniu ogłoszenia.
          </Typography>
        );
      if (loading) return <LinearProgress />;
      if (data) return React.cloneElement(props.children, { post: data.post });
      Router.push("/nie-znaleziono-strony");
      return null;
    }}
  </Query>
);

export default props => (
  <PostFields>
    <PostQuery variables={{ postId: props.postId }}>{props.children}</PostQuery>
  </PostFields>
);
