import React from "react";
import { Modal } from "@material-ui/core";

import { ModalPaper } from "./styledComponents";

const BodyModal = props => {
  return (
    <Modal
      aria-labelledby="body-filters"
      open={props.openedModal === "BodyModal"}
      onClose={props.closeModal}
    >
      <ModalPaper>
        <p>BodyModal</p>
      </ModalPaper>
    </Modal>
  );
};

export default BodyModal;
