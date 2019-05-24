import React, { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  Button,
  Grid,
  withStyles,
  Typography,
  Divider
} from "@material-ui/core";

import OfferOfTheDay from "./OfferOfTheDay";
import Buttons from "./Buttons";

const styles = theme => ({
  root: {
    maxWidth: 1200,
    margin: `${theme.spacing.unit}px auto 0 auto`
  },
  promotedPostsTitle: {
    fontSize: theme.typography.fontSize * 3
  },
  linkBtn: {
    margin: theme.spacing.unit * 2
  }
});

const Layout = ({ classes }) => {
  return (
    <Fragment>
      <Head>
        <title>
          Giełda klasyków - klasyczne samochody, youngtimery na sprzedaż
        </title>
      </Head>
      <div className={classes.root}>
        <Grid container>
          <Grid item>
            <OfferOfTheDay />
          </Grid>
          <Grid item>
            <Buttons />
          </Grid>
        </Grid>
        <Divider />
        <Typography variant="h1" className={classes.promotedPostsTitle}>
          PROMOWANE OGŁOSZENIA
        </Typography>
      </div>
      <Link prefetch href="/gielda">
        <Button variant="contained" className={classes.linkBtn}>
          Wyszukiwarka
        </Button>
      </Link>
    </Fragment>
  );
};

export default withStyles(styles)(Layout);
