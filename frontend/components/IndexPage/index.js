import React, { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  linkBtn: {
    margin: theme.spacing.unit * 2
  }
});

const Index = ({ classes }) => {
  return (
    <Fragment>
      <Head>
        <title>
          Giełda klasyków - klasyczne samochody, youngtimery na sprzedaż
        </title>
      </Head>
      <Link prefetch href="/gielda">
        <Button variant="contained" className={classes.linkBtn}>
          Wyszukiwarka
        </Button>
      </Link>
    </Fragment>
  );
};

export default withStyles(styles)(Index);
