import React from "react";
import { Modal, Grid } from "@material-ui/core";

import { blankFiltersStateAdditionalAccessories } from "../../../../config";
import CheckboxGenerator from "../CheckboxGenerator";
import {
  ModalPaper,
  ModalContent,
  StyledFilterTitle,
  StyledFormControl
} from "./styledComponents";
import Header from "./Header";
import Footer from "./Footer";

const AdditionalAccessoriesModal = props => (
  <Modal
    aria-labelledby="additional-accessories-filters"
    open={props.openedModal === "AdditionalAccessoriesModal"}
    onClose={props.closeModal}
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
              values={props.values}
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
              values={props.values}
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
              values={props.values}
              handleChange={props.handleMultiCheckboxChange}
              smallLabel
            />
          </Grid>
        </StyledFormControl>
      </ModalContent>
      <Footer
        handleSubmit={props.submitModal}
        handleReset={() => {
          props.resetSpecificFiltersWithoutFiltering(
            blankFiltersStateAdditionalAccessories
          );
        }}
      />
    </ModalPaper>
  </Modal>
);

export default AdditionalAccessoriesModal;
