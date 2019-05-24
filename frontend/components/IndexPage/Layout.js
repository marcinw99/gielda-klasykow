import React, { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  Button,
  Grid,
  withStyles,
  Typography,
  Divider,
  LinearProgress
} from "@material-ui/core";

import OfferOfTheDay from "./OfferOfTheDay";

const LinkButtons = {
  press: {},
  searchPage: {},
  help: {},
  addPost: {}
};

const styles = theme => ({
  root: {
    maxWidth: 1200,
    margin: `${theme.spacing.unit * 2}px auto 0 auto`
  },
  promotedPostsTitle: {
    fontSize: theme.typography.fontSize * 3
  },
  linkBtn: {
    margin: theme.spacing.unit * 2
  }
});

const Layout = ({ classes, data, loading, error }) => {
  if (error) console.log(error.graphQLErrors);
  return (
    <Fragment>
      <Head>
        <title>
          Giełda klasyków - klasyczne samochody, youngtimery na sprzedaż
        </title>
      </Head>
      {loading ? <LinearProgress /> : null}
      {error ? null : (
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={6}>
              {data && data.posts ? (
                <OfferOfTheDay item={data.posts[0]} />
              ) : null}
            </Grid>
            <Grid item xs={6}>
              <Grid container />
            </Grid>
          </Grid>
          <Divider />
          <Typography variant="h1" className={classes.promotedPostsTitle}>
            PROMOWANE OGŁOSZENIA
          </Typography>
          {data && data.posts ? "Loaded" : null}
        </div>
      )}
      <Link prefetch href="/gielda">
        <Button variant="contained" className={classes.linkBtn}>
          Wyszukiwarka
        </Button>
      </Link>
    </Fragment>
  );
};

export default withStyles(styles)(Layout);
