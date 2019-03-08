import React, { Component, Fragment } from "react";
import Head from "next/head";

import MustBeLoggedIn from "../universal/MustBeLoggedIn";
import { withStyles, Grid, LinearProgress } from "@material-ui/core";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import getErrorMessage from "../universal/getErrorMessage";
import Post from "./Post";

const USER_POSTS_QUERY = gql`
  query USER_POSTS_QUERY($userId: ID!) {
    posts(where: { user: { id: $userId } }) {
      id
      price
      avatar
      car {
        brand
        model
        version
      }
    }
  }
`;

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: "5vh",
    paddingLeft: "5vw",
    paddingRight: "5vw"
  }
});

class MyPostsPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Head>
          <title>Moje ogłoszenia - Giełda klasyków</title>
        </Head>
        <MustBeLoggedIn
          thisUser={this.props.thisUser}
          errorMessage="Musisz być zalogowany aby mieć dostęp do swoich ogłoszeń."
        >
          {this.props.thisUser && (
            <Query
              query={USER_POSTS_QUERY}
              variables={{ userId: this.props.thisUser.id }}
            >
              {({ data, error, loading }) => {
                if (data && data.posts)
                  return (
                    <Grid container className={classes.root} spacing={24}>
                      {data.posts.map(item => (
                        <Grid item key={item.id}>
                          <Post data={item} />
                        </Grid>
                      ))}
                    </Grid>
                  );
                if (loading) return <LinearProgress />;
                if (error) return getErrorMessage(error);
                return null;
              }}
            </Query>
          )}
        </MustBeLoggedIn>
      </Fragment>
    );
  }
}

export default withStyles(styles)(MyPostsPage);
