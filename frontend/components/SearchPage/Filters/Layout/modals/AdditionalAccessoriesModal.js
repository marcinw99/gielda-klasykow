import React from "react";
import { Modal, Grid, Fade } from "@material-ui/core";

import { blankFiltersStateAdditionalAccessories } from "../../../config";
import CheckboxGenerator from "../../../../universal/CheckboxGenerator";
import {
  ModalPaper,
  ModalContent,
  StyledFilterTitle,
  StyledFormControl
} from "./styledComponents";
import Header from "./Header";
import Footer from "./Footer";

const AdditionalAccessoriesModal = props => (
  <Fade in={props.openedModal === "AdditionalAccessoriesModal"}>
    <Modal
      aria-labelledby="additional-accessories-filters"
      open={props.openedModal === "AdditionalAccessoriesModal"}
      onClose={props.closeModal}
      keepMounted
    >
      <ModalPaper wide>
        <Header title="Dodatkowe wyposażenie" handleClose={props.closeModal} />
        <ModalContent>
          <StyledFilterTitle>Bezpieczeństwo</StyledFilterTitle>
          <StyledFormControl>
            <Grid container justify="flex-start">
              <CheckboxGenerator
                name="additionalAccessories_Safety"
                options={props.options.additionalAccessories_Safety}
                values={props.values.additionalAccessories_Safety}
                handleChange={props.handleMultiCheckboxChange}
                smallLabel
              />
            </Grid>
          </StyledFormControl>
          <StyledFilterTitle>Komfort kierowcy</StyledFilterTitle>
          <StyledFormControl>
            <Grid container justify="flex-start">
              <CheckboxGenerator
                name="additionalAccessories_Comfort_Driver"
                options={props.options.additionalAccessories_Comfort_Driver}
                values={props.values.additionalAccessories_Comfort_Driver}
                handleChange={props.handleMultiCheckboxChange}
                smallLabel
              />
            </Grid>
          </StyledFormControl>
          <StyledFilterTitle>Komfort pasażerów</StyledFilterTitle>
          <StyledFormControl>
            <Grid container justify="flex-start">
              <CheckboxGenerator
                name="additionalAccessories_Comfort_Passenger"
                options={props.options.additionalAccessories_Comfort_Passenger}
                values={props.values.additionalAccessories_Comfort_Passenger}
                handleChange={props.handleMultiCheckboxChange}
                smallLabel
              />
            </Grid>
          </StyledFormControl>
          <Footer
            handleSubmit={props.submitModal}
            handleReset={() => {
              props.resetSpecificFiltersWithoutFiltering(
                blankFiltersStateAdditionalAccessories
              );
            }}
          />
        </ModalContent>
      </ModalPaper>
    </Modal>
  </Fade>
);

export default AdditionalAccessoriesModal;
