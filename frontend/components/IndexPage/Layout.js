import React, { Fragment } from "react";
import Head from "next/head";
import { compose } from "recompose";
import {
  Grid,
  withStyles,
  Typography,
  Divider,
  LinearProgress,
  withWidth
} from "@material-ui/core";

import OfferOfTheDay from "./OfferOfTheDay";
import LinkButton from "./LinkButton";
import Posts from "./Posts";

const LinkButtons = {
  press: {
    href: "#",
    label: "BIURO PRASOWE",
    bg: "/static/press.jpg",
    bgFilter: "#3E2723"
  },
  searchPage: {
    href: "/gielda",
    label: "WYSZUKIWARKA OGŁOSZEŃ",
    bg: "/static/searchPage.jpg",
    bgFilter: "#D32F2F"
  },
  help: {
    href: "#",
    label: "POMOC",
    bg: "/static/help.jpg",
    bgFilter: "#2D9CDB"
  },
  addPost: {
    href: "/dodajklasyka",
    label: "DODAJ KLASYKA",
    bg: "/static/addPost.jpg",
    bgFilter: "#828282"
  }
};

const styles = theme => ({
  root: {
    maxWidth: 1200,
    margin: `${theme.spacing.unit * 2}px auto 0 auto`
  },
  divider: {
    marginTop: theme.spacing.unit * 2
  },
  promotedPostsTitle: {
    marginTop: theme.spacing.unit * 2,
    fontSize: theme.typography.fontSize * 3
  },
  linkBtn: {
    margin: theme.spacing.unit * 2
  }
});

const Layout = ({ classes, data, loading, error }) => (
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
          <Grid item xs={12} md={6}>
            {data && data.posts ? <OfferOfTheDay item={data.posts[0]} /> : null}
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={6}>
                <LinkButton {...LinkButtons.press} />
              </Grid>
              <Grid item xs={6}>
                <LinkButton {...LinkButtons.searchPage} />
              </Grid>
              <Grid item xs={6}>
                <LinkButton {...LinkButtons.help} />
              </Grid>
              <Grid item xs={6}>
                <LinkButton {...LinkButtons.addPost} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Typography variant="h1" className={classes.promotedPostsTitle}>
          PROMOWANE OGŁOSZENIA
        </Typography>
        {data && data.posts ? <Posts posts={data.posts} /> : null}
      </div>
    )}
  </Fragment>
);

export default compose(
  withWidth(),
  withStyles(styles)
)(Layout);
