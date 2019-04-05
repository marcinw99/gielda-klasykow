import React, { Fragment } from "react";
import Head from "next/head";

import PostQueries from "./PostQueries";
import Logic from "./Logic";
import Layout from "./Layout";

const PostPage = props => (
  <Fragment>
    <Head>
      <title key="pageTitle">Klasyk - Giełda klasyków</title>
    </Head>
    <PostQueries postId={props.id}>
      <Logic>
        <Layout />
      </Logic>
    </PostQueries>
  </Fragment>
);

PostPage.getInitialProps = ctx => {
  if (ctx.query.id && ctx.query.id.length === 25) {
    return { id: ctx.query.id };
  } else {
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: "/nie-znaleziono-strony"
      });
      ctx.res.end();
    } else {
      Router.push("/nie-znaleziono-strony");
    }
  }
};

export default PostPage;
