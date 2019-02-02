import React from "react";
import { Modal } from "@material-ui/core";

import { ModalPaper } from "./styledComponents";

const VehicleStatusModal = props => {
  return (
    <Modal
      aria-labelledby="vehicle-status-filters"
      open={props.openedModal === "VehicleStatusModal"}
      onClose={props.closeModal}
    >
      <ModalPaper>
        <p>VehicleStatusModal</p>
      </ModalPaper>
    </Modal>
  );
};

export default VehicleStatusModal;
