import React from "react";
import { Snackbar, IconButton } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";

import { defaults } from "./config";

const CustomSnackbar = props => {
  return (
    <Snackbar
      open={props.open}
      anchorOrigin={props.position}
      autoHideDuration={props.timeout}
      onClose={props.handleClose}
      ContentProps={{
        "aria-describedby": "message-id"
      }}
      message={<span id="message-id">{props.message}</span>}
      action={
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={props.handleClose}
        >
          <CloseIcon />
        </IconButton>
      }
    />
  );
};

CustomSnackbar.defaultProps = { ...defaults };

export default CustomSnackbar;
