import React from "react";
import { Modal, Grid, Fade } from "@material-ui/core";

import { blankFiltersStateEngineAndDrive } from "../../../../config";
import CheckboxGenerator from "../../../../../universal/CheckboxGenerator";
import BooleanSelect from "../../../../../universal/BooleanSelect";
import DoubleInputs from "../../../../../universal/DoubleInputs";
import {
  ModalPaper,
  ModalContent,
  StyledFilterTitle,
  StyledFormControl
} from "./styledComponents";
import Header from "./Header";
import Footer from "./Footer";

const EngineAndDriveModal = props => (
  <Fade in={props.openedModal === "EngineAndDriveModal"}>
    <Modal
      aria-labelledby="engine-and-drive-filters"
      open={props.openedModal === "EngineAndDriveModal"}
      onClose={props.closeModal}
      keepMounted
    >
      <ModalPaper>
        <Header title="Silnik i napęd" handleClose={props.closeModal} />
        <ModalContent>
          <StyledFilterTitle>
            Pojemność skokowa (cm<sup>3</sup>)
          </StyledFilterTitle>
          <DoubleInputs
            darkLabel
            justify="flex-start"
            canCreateOption
            unit="cm3"
            nameLeft="engineSize_gte"
            nameRight="engineSize_lte"
            labelLeft="Od"
            labelRight="Do"
            valueLeft={props.values.engineSize_gte}
            valueRight={props.values.engineSize_lte}
            handleChange={props.handleChangeWithoutFiltering}
            options={props.options.EngineSize.map(item => ({
              label: `${item} cm3`,
              value: item
            }))}
          />
          <StyledFilterTitle>Moc (km)</StyledFilterTitle>
          <DoubleInputs
            darkLabel
            justify="flex-start"
            canCreateOption
            unit="km"
            nameLeft="power_gte"
            nameRight="power_lte"
            labelLeft="Od"
            labelRight="Do"
            valueLeft={props.values.power_gte}
            valueRight={props.values.power_lte}
            handleChange={props.handleChangeWithoutFiltering}
            options={props.options.Power.map(item => ({
              label: `${item} km`,
              value: item
            }))}
          />
          <StyledFilterTitle>Moment obrotowy (nm)</StyledFilterTitle>
          <DoubleInputs
            darkLabel
            justify="flex-start"
            canCreateOption
            unit="nm"
            nameLeft="torque_gte"
            nameRight="torque_lte"
            labelLeft="Od"
            labelRight="Do"
            valueLeft={props.values.torque_gte}
            valueRight={props.values.torque_lte}
            handleChange={props.handleChangeWithoutFiltering}
            options={props.options.Torque.map(item => ({
              label: `${item} nm`,
              value: item
            }))}
          />
          <StyledFilterTitle>Posiada filtr cząstek stałych</StyledFilterTitle>
          <StyledFormControl>
            <BooleanSelect
              name="hasParticulateFilter"
              value={props.values.hasParticulateFilter}
              handleChange={props.handleChangeWithoutFiltering}
            />
          </StyledFormControl>
          <StyledFilterTitle>Rodzaj skrzyni biegów</StyledFilterTitle>
          <StyledFormControl>
            <Grid container justify="flex-start">
              <CheckboxGenerator
                name="transmission"
                valueName="transmission_in"
                options={props.options.Transmission}
                values={props.values.transmission_in}
                handleChange={props.handleMultiCheckboxChange}
              />
            </Grid>
          </StyledFormControl>
          <StyledFilterTitle>Rodzaj układu napędowego</StyledFilterTitle>
          <StyledFormControl>
            <Grid container justify="flex-start">
              <CheckboxGenerator
                name="drive"
                valueName="drive_in"
                options={props.options.Drive}
                values={props.values.drive_in}
                handleChange={props.handleMultiCheckboxChange}
              />
            </Grid>
          </StyledFormControl>
        </ModalContent>
        <Footer
          handleSubmit={props.submitModal}
          handleReset={() => {
            props.resetSpecificFiltersWithoutFiltering(
              blankFiltersStateEngineAndDrive
            );
          }}
        />
      </ModalPaper>
    </Modal>
  </Fade>
);

export default EngineAndDriveModal;
