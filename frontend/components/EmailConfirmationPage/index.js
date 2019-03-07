import React, { Fragment } from "react";
import Router from "next/router";
import Head from "next/head";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

import Layout from "./Layout";

const CONFIRM_EMAIL = gql`
  mutation CONFIRM_EMAIL($emailConfirmationToken: String!) {
    confirmEmail(emailConfirmationToken: $emailConfirmationToken) {
      code
    }
  }
`;

const EmailConfirmationPage = props => {
  return (
    <Fragment>
      <Head>
        <title>Potwierdzenie adresu e-mail - Giełda klasyków</title>
      </Head>
      <Mutation
        mutation={CONFIRM_EMAIL}
        variables={{ emailConfirmationToken: props.token }}
      >
        {(confirm, payload) => <Layout confirm={confirm} payload={payload} />}
      </Mutation>
    </Fragment>
  );
};

EmailConfirmationPage.getInitialProps = async function(ctx) {
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

export default EmailConfirmationPage;
