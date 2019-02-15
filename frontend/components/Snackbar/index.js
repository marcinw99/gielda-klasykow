import React from "react";
import { Snackbar } from "@material-ui/core";
import PropTypes from "prop-types";

import { defaults } from "./config";
import CustomSnackbarContent from "./CustomSnackbarContent";

const CustomSnackbar = props => {
  return (
    <Snackbar
      open={props.open}
      anchorOrigin={props.position}
      autoHideDuration={props.timeout}
      onClose={props.handleClose}
      onExited={props.onExited}
      ContentProps={{
        "aria-describedby": "message-id"
      }}
    >
      <CustomSnackbarContent
        handleClose={props.handleClose}
        variant={props.variant}
        message={props.message}
      />
    </Snackbar>
  );
};

CustomSnackbar.defaultProps = { ...defaults };

CustomSnackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  position: PropTypes.shape({
    vertical: PropTypes.oneOf(["top", "bottom"]),
    horizontal: PropTypes.oneOf(["left", "center", "right"])
  }),
  timeout: PropTypes.number,
  handleClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired,
  message: PropTypes.string
};

export default CustomSnackbar;
