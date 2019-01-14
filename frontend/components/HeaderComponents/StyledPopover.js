import React from "react";
import { Popover, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 400,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  }
});

const StyledPopover = ({
  children,
  classes,
  id,
  open,
  anchorEl,
  handleClose
}) => (
  <Popover
    className={classes.root}
    id={id}
    open={open}
    anchorEl={anchorEl}
    onClose={handleClose}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
  >
    <Paper className={classes.paper}>{children}</Paper>
  </Popover>
);

export default withStyles(styles)(StyledPopover);
