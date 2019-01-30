import React from "react";
import { Popover, Paper, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

// StyledPopover

const popoverStyles = theme => ({
  root: {
    marginTop: theme.spacing.unit
  },
  rootPaper: {
    borderRadius: 0
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 400,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
    borderRadius: 0
  }
});

const CustomPopover = ({
  children,
  classes,
  id,
  open,
  anchorEl,
  handleClose
}) => (
  <Popover
    className={classes.root}
    classes={{ paper: classes.rootPaper }}
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
    <Paper square className={classes.paper}>
      {children}
    </Paper>
  </Popover>
);

CustomPopover.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  classes: PropTypes.object,
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.object,
  handleClose: PropTypes.func.isRequired
};

export const StyledPopover = withStyles(popoverStyles)(CustomPopover);

// Submit

const submitStyles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3
  }
});

const Submit = ({ classes, children }) => (
  <Button
    className={classes.root}
    type="submit"
    fullWidth
    variant="contained"
    color="primary"
  >
    {children}
  </Button>
);

export const StyledSubmit = withStyles(submitStyles)(Submit);

// StyledTitle

export const StyledTitle = ({ children }) => (
  <Typography variant="h4" color="primary">
    {children}
  </Typography>
);

// StyledSwitchView

const switchViewStyles = theme => ({
  root: {
    textTransform: "none"
  }
});
const SwitchView = ({ classes, rootProps, children }) => (
  <Button variant="outlined" className={classes.root} {...rootProps}>
    {children}
  </Button>
);

export const StyledSwitchView = withStyles(switchViewStyles)(SwitchView);
