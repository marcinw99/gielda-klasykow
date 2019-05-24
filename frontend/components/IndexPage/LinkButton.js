import React from "react";

import { withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    padding: 1,
    background: theme.palette.primary
  },
  img: {},
  label: {}
});

const LinkButton = props => (
  <div className={props.classes.root}>
    <img src={props.img} alt="" className={props.classes.img} />
    <div className={props.classes.label}>{label}</div>
  </div>
);

export default withStyles(styles)(LinkButton);
