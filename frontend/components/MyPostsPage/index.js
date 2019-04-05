import React, { Fragment } from "react";
import { Query, Mutation } from "react-apollo";
import Head from "next/head";
import gql from "graphql-tag";

import MustBeLoggedIn from "../universal/MustBeLoggedIn";
import Layout, { LoadingLayout, ErrorLayout } from "./Layout";
import { DELETE_POST_MUTATION } from "../../src/Mutations/deletePost";
import { USER_POSTS_QUERY } from "../../src/Queries/searchQueries";

const MyPostsPage = props => (
  <Fragment>
    <Head>
      <title>Moje ogłoszenia - Giełda klasyków</title>
    </Head>
    <MustBeLoggedIn
      thisUser={props.thisUser}
      errorMessage="Musisz być zalogowany aby mieć dostęp do swoich ogłoszeń."
    >
      {props.thisUser && (
        <Mutation
          mutation={DELETE_POST_MUTATION}
          refetchQueries={[
            {
              query: USER_POSTS_QUERY,
              variables: { userId: props.thisUser.id }
            }
          ]}
        >
          {mutate => (
            <Query
              query={USER_POSTS_QUERY}
              variables={{ userId: props.thisUser.id }}
            >
              {({ data, error, loading }) => {
                if (data && data.posts)
                  return <Layout posts={data.posts} deletePost={mutate} />;
                if (loading) return <LoadingLayout />;
                if (error) return <ErrorLayout error={error} />;
                return null;
              }}
            </Query>
          )}
        </Mutation>
      )}
    </MustBeLoggedIn>
  </Fragment>
);

export default MyPostsPage;
