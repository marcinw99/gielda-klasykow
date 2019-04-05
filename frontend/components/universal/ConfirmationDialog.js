import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from "@material-ui/core";
import PropTypes from "prop-types";

const ConfirmationDialog = props => {
  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="sm"
      aria-labelledby="confirmation-dialog-title"
      open={props.open}
      onClose={props.handleClose}
    >
      <DialogTitle id="confirmation-dialog-title">{props.title}</DialogTitle>
      <DialogContent>
        <Typography variant="body2">{props.content}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Anuluj
        </Button>
        <Button
          onClick={() => {
            props.handleClose();
            props.confirmHandler(props.action);
          }}
          variant="contained"
          color="primary"
        >
          Tak
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ConfirmationDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  action: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ type: PropTypes.string, args: PropTypes.object })
  ]).isRequired,
  handleClose: PropTypes.func.isRequired,
  confirmHandler: PropTypes.func.isRequired
};

export default ConfirmationDialog;
