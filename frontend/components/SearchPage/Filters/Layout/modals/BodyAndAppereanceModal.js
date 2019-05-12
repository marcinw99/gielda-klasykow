import React from "react";
import { Modal, Grid, Fade } from "@material-ui/core";

import { blankFiltersStateBodyAndAppereance } from "../../../config";
import CheckboxGenerator from "../../../../universal/CheckboxGenerator";
import BooleanSelect from "../../../../universal/BooleanSelect";
import {
  ModalPaper,
  ModalContent,
  StyledFilterTitle,
  StyledFormControl
} from "./styledComponents";
import Header from "./Header";
import Footer from "./Footer";

const BodyAndAppereanceModal = props => (
  <Fade in={props.openedModal === "BodyAndAppereanceModal"}>
    <Modal
      aria-labelledby="body-and-appereance-filters"
      open={props.openedModal === "BodyAndAppereanceModal"}
      onClose={props.closeModal}
      keepMounted
    >
      <ModalPaper>
        <Header title="Nadwozie i wygląd" handleClose={props.closeModal} />
        <ModalContent>
          <StyledFilterTitle>Kolor lakieru</StyledFilterTitle>
          <StyledFormControl>
            <Grid container justify="flex-start">
              <CheckboxGenerator
                name="color"
                valueName="color_in"
                options={props.options.Color}
                values={props.values.color_in}
                handleChange={props.handleMultiCheckboxChange}
              />
            </Grid>
          </StyledFormControl>
          <StyledFilterTitle>
            Kierownica po prawej stronie (anglik)
          </StyledFilterTitle>
          <StyledFormControl>
            <BooleanSelect
              name="steeringWheelOnTheRight"
              value={props.values.steeringWheelOnTheRight}
              handleChange={props.handleChangeWithoutFiltering}
            />
          </StyledFormControl>
          <StyledFilterTitle>Wygląd</StyledFilterTitle>
          <StyledFormControl>
            <Grid container justify="flex-start">
              <CheckboxGenerator
                name="additionalAccessories_Appereance"
                options={props.options.additionalAccessories_Appereance}
                values={props.values.additionalAccessories_Appereance}
                handleChange={props.handleMultiCheckboxChange}
              />
            </Grid>
          </StyledFormControl>
        </ModalContent>
        <Footer
          handleSubmit={props.submitModal}
          handleReset={() => {
            props.resetSpecificFiltersWithoutFiltering(
              blankFiltersStateBodyAndAppereance
            );
          }}
        />
      </ModalPaper>
    </Modal>
  </Fade>
);

export default BodyAndAppereanceModal;
