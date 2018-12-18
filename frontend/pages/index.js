import React, { Component } from "react";
import Link from "next/link";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  linkBtn: {
    margin: theme.spacing.unit * 2
  }
});

class Index extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Link href="/search">
        <Button variant="raised" className={classes.linkBtn}>
          Wyszukiwarka
        </Button>
      </Link>
    );
  }
}

export default withStyles(styles)(Index);
