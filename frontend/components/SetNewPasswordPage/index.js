import React from "react";
import Router from "next/router";
import { Mutation } from "react-apollo";

import { SIGNOUT_MUTATION } from "../../src/Mutations/Login";
import { CURRENT_USER_QUERY } from "../../src/QueryComponents/User";
import Layout from "./Layout";

const SetNewPassword = props => {
  if (props.thisUser) {
    return (
      <Mutation
        mutation={SIGNOUT_MUTATION}
        refetchQueries={[
          {
            query: CURRENT_USER_QUERY
          }
        ]}
      >
        {send => {
          send();
          return null;
        }}
      </Mutation>
    );
  }
  return <Layout token={props.token} />;
};

SetNewPassword.getInitialProps = async function(ctx) {
  if (shouldRedirect(ctx.query)) {
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: "/"
      });
      ctx.res.end();
    } else {
      Router.push("/");
    }
  }
  return { token: ctx.query.token };
};

function shouldRedirect(query) {
  if (!query.token || query.token.length !== 40) {
    return true;
  } else return false;
}

export default SetNewPassword;
