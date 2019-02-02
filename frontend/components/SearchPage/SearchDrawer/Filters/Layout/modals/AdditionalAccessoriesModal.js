import React from "react";
import { Modal } from "@material-ui/core";

import { ModalPaper } from "./styledComponents";

const AdditionalAccessoriesModal = props => {
  return (
    <Modal
      aria-labelledby="additional-accessories-filters"
      open={props.openedModal === "AdditionalAccessoriesModal"}
      onClose={props.closeModal}
    >
      <ModalPaper>
        <p>AdditionalAccessoriesModal</p>
      </ModalPaper>
    </Modal>
  );
};

export default AdditionalAccessoriesModal;
