import React from "react";
import Link from "next/link";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center"
  },
  logo: {
    height: "35px",
    width: "auto",
    background: "#f5f5f5",
    borderRadius: 15
  },
  text: {
    fontFamily: "Roboto",
    flexGrow: 1
  }
});

const Logo = ({ classes }) => {
  return (
    <Link href="/">
      <div className={classes.root}>
        <img src="/static/Baner.png" alt="Logo" className={classes.logo} />
        <Typography variant="h5" className={classes.text} noWrap>
          Giełda klasyków
        </Typography>
      </div>
    </Link>
  );
};

export default withStyles(styles)(Logo);
