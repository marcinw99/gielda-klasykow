import React from "react";
import { Modal, Grid, Fade, withStyles } from "@material-ui/core";

import { blankFiltersStateEngineAndDrive } from "../../../config";
import CheckboxGenerator from "../../../../universal/CheckboxGenerator";
import BooleanSelect from "../../../../universal/BooleanSelect";
import { Creatable } from "../../../../universal/Autocompletes";
import {
  ModalPaper,
  ModalContent,
  StyledFilterTitle,
  StyledFormControl
} from "./styledComponents";
import Header from "./Header";
import Footer from "./Footer";

const styles = theme => ({
  input: {
    minWidth: 120,
    margin: theme.spacing.unit
  }
});

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
          <Grid container justify="flex-start">
            <Creatable
              className={props.classes.input}
              unit="cm3"
              name="engineSize_gte"
              placeholder="Od"
              value={props.values.engineSize_gte}
              handleChange={props.handleChangeWithoutFiltering}
              options={props.options.EngineSize}
            />
            <Creatable
              className={props.classes.input}
              unit="cm3"
              name="engineSize_lte"
              placeholder="Do"
              value={props.values.engineSize_lte}
              handleChange={props.handleChangeWithoutFiltering}
              options={props.options.EngineSize}
            />
          </Grid>
          <StyledFilterTitle>Moc (km)</StyledFilterTitle>
          <Grid container justify="flex-start">
            <Creatable
              className={props.classes.input}
              unit="km"
              name="power_gte"
              placeholder="Od"
              value={props.values.power_gte}
              handleChange={props.handleChangeWithoutFiltering}
              options={props.options.Power}
            />
            <Creatable
              className={props.classes.input}
              unit="km"
              name="power_lte"
              placeholder="Do"
              value={props.values.power_lte}
              handleChange={props.handleChangeWithoutFiltering}
              options={props.options.Power}
            />
          </Grid>
          <StyledFilterTitle>Moment obrotowy (nm)</StyledFilterTitle>
          <Grid container justify="flex-start">
            <Creatable
              className={props.classes.input}
              unit="nm"
              name="torque_gte"
              placeholder="Od"
              value={props.values.torque_gte}
              handleChange={props.handleChangeWithoutFiltering}
              options={props.options.Torque}
            />
            <Creatable
              className={props.classes.input}
              unit="nm"
              name="torque_lte"
              placeholder="Do"
              value={props.values.torque_lte}
              handleChange={props.handleChangeWithoutFiltering}
              options={props.options.Torque}
            />
          </Grid>
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

export default withStyles(styles)(EngineAndDriveModal);
