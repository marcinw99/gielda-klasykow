import React from "react";
import Link from "next/link";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  linkBtn: {
    margin: theme.spacing.unit * 2
  }
});

const Index = ({ classes }) => {
  return (
    <Link href="/search">
      <Button variant="contained" className={classes.linkBtn}>
        Wyszukiwarka
      </Button>
    </Link>
  );
};

export default withStyles(styles)(Index);
