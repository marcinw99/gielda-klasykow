import React from "react";
import Link from "next/link";

import { Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    margin: 1,
    height: 200,
    backgroundPosition: "center",
    position: "relative",
    "&:hover $colorFilter": {
      opacity: 0.6
    }
  },
  colorFilter: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.75,
    transition: "0.1s ease-in-out"
  },
  label: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    fontWeight: 500
  }
});

const LinkButton = ({ classes, bg, bgFilter, label, href }) => (
  <Link href={href} prefetch>
    <div className={classes.root} style={{ backgroundImage: `url(${bg})` }}>
      <div
        className={classes.colorFilter}
        style={{ backgroundColor: bgFilter }}
      />
      <Typography variant="h6" className={classes.label}>
        {label}
      </Typography>
    </div>
  </Link>
);

export default withStyles(styles)(LinkButton);
