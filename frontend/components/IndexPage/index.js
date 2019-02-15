import React from "react";
import Link from "next/link";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import { SnackbarConsumer } from "../Snackbar/Context";

const styles = theme => ({
  linkBtn: {
    margin: theme.spacing.unit * 2
  }
});

const Index = ({ classes }) => {
  return (
    <div>
      <Link href="/search">
        <Button variant="contained" className={classes.linkBtn}>
          Wyszukiwarka
        </Button>
      </Link>
      <SnackbarConsumer>
        {value => (
          <Button onClick={() => value.manageSnackbar({ open: true })}>
            Get some snacc
          </Button>
        )}
      </SnackbarConsumer>
    </div>
  );
};

export default withStyles(styles)(Index);
