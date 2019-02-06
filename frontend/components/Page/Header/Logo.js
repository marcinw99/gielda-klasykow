import React from "react";
import Link from "next/link";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    alignItems: "center"
  },
  logo: {
    height: "50px",
    width: "auto",
    marginTop: theme.spacing.unit,
    background: "#f5f5f5",
    borderRadius: 15,
    margin: theme.spacing.unit
  },
  text: {
    fontSize: 32,
    fontFamily: "Roboto"
  }
});

const Logo = ({ classes }) => {
  return (
    <Link href="/">
      <div className={classes.root}>
        <img src="/static/Baner.png" alt="Logo" className={classes.logo} />
        <Typography className={classes.text} noWrap>
          Giełda klasyków
        </Typography>
      </div>
    </Link>
  );
};

export default withStyles(styles)(Logo);
