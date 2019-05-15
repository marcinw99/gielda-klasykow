import React from "react";
import { Modal, Grid, Fade } from "@material-ui/core";

import { blankFiltersVehicleStatus } from "../../../config";
import BooleanSelect from "../../../../universal/BooleanSelect";
import {
  ModalPaper,
  ModalContent,
  StyledFilterTitle,
  StyledFormControl
} from "./styledComponents";
import Header from "./Header";
import Footer from "./Footer";

const VehicleStatusModal = props => (
  <Fade in={props.openedModal === "VehicleStatusModal"}>
    <Modal
      aria-labelledby="vehicle-status-filters"
      open={props.openedModal === "VehicleStatusModal"}
      onClose={props.closeModal}
      keepMounted
    >
      <ModalPaper>
        <Header title="Status pojazdu" handleClose={props.closeModal} />
        <ModalContent>
          <Grid container justify="flex-start">
            {[
              { label: "Uszkodzony", name: "damaged" },
              { label: "Bezwypadkowy", name: "accidentFree" },
              { label: "Pierwszy właściciel", name: "firstOwner" },
              { label: "Zarejestrowany w Polsce", name: "registeredInPoland" },
              {
                label: "Zarejestrowany jako zabytek",
                name: "registeredAsAntiqueCar"
              },
              { label: "Posiada VIN", name: "hasVIN" },
              { label: "Tuning", name: "tuning" }
            ].map(item => (
              <Grid item xs={6} key={item.name}>
                <StyledFilterTitle>{item.label}</StyledFilterTitle>
                <StyledFormControl>
                  <BooleanSelect
                    name={item.name}
                    value={props.values[item.name]}
                    handleChange={props.handleChangeWithoutFiltering}
                  />
                </StyledFormControl>
              </Grid>
            ))}
          </Grid>
          <Footer
            handleSubmit={props.submitModal}
            handleReset={() => {
              props.resetSpecificFiltersWithoutFiltering(
                blankFiltersVehicleStatus
              );
            }}
          />
        </ModalContent>
      </ModalPaper>
    </Modal>
  </Fade>
);

export default VehicleStatusModal;
