import React, { Fragment } from "react";
import Head from "next/head";

import Layout from "./Layout";
import PostQueries from "./PostQueries";
import Logic from "./Logic";

const PostPage = props => {
  return (
    <Fragment>
      <Head>
        <title>Resetowanie hasła - Giełda klasyków</title>
      </Head>
      <PostQueries postId={props.id}>
        <Logic>
          <Layout />
        </Logic>
      </PostQueries>
    </Fragment>
  );
};

PostPage.getInitialProps = function(ctx) {
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
