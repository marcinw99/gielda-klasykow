import React from "react";
import {
  Modal,
  FormControlLabel,
  Checkbox,
  Grid,
  Select,
  MenuItem,
  withStyles
} from "@material-ui/core";

import { blankFiltersStateEngineAndDrive } from "../../../../config";
import enumsDisplayedText from "../../../../../../resources/enumsDisplayedText";
import DoubleInputs from "../DoubleInputs";
import {
  ModalPaper,
  ModalContent,
  StyledFilterTitle,
  StyledFormControl
} from "./styledComponents";
import Header from "./Header";
import Footer from "./Footer";

const styles = theme => ({
  formControlLabel: {
    width: 250,
    maxHeight: 32
  }
});

const EngineAndDriveModal = props => (
  <Modal
    aria-labelledby="engine-and-drive-filters"
    open={props.openedModal === "EngineAndDriveModal"}
    onClose={props.closeModal}
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
          nameLeft="engineSize_gt"
          nameRight="engineSize_lt"
          labelLeft="Od"
          labelRight="Do"
          valueLeft={props.values.engineSize_gt}
          valueRight={props.values.engineSize_lt}
          handleChange={props.handleChangeWithoutFiltering}
          options={props.selectsOptions.EngineSize.map(item => ({
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
          nameLeft="power_gt"
          nameRight="power_lt"
          labelLeft="Od"
          labelRight="Do"
          valueLeft={props.values.power_gt}
          valueRight={props.values.power_lt}
          handleChange={props.handleChangeWithoutFiltering}
          options={props.selectsOptions.Power.map(item => ({
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
          nameLeft="torque_gt"
          nameRight="torque_lt"
          labelLeft="Od"
          labelRight="Do"
          valueLeft={props.values.torque_gt}
          valueRight={props.values.torque_lt}
          handleChange={props.handleChangeWithoutFiltering}
          options={props.selectsOptions.Torque.map(item => ({
            label: `${item} nm`,
            value: item
          }))}
        />
        <StyledFilterTitle>Posiada filtr cząstek stałych</StyledFilterTitle>
        <StyledFormControl>
          <Select
            value={props.values.hasParticulateFilter}
            onChange={e => props.handleChangeWithoutFiltering(e.target)}
            inputProps={{
              name: "hasParticulateFilter"
            }}
          >
            <MenuItem value="deleteFromFilters">
              <em>Nie wybrano</em>
            </MenuItem>
            <MenuItem value={true}>Tak</MenuItem>
            <MenuItem value={false}>Nie</MenuItem>
          </Select>
        </StyledFormControl>
        <StyledFilterTitle>Rodzaj skrzyni biegów</StyledFilterTitle>
        <StyledFormControl>
          <Grid container justify="flex-start">
            {props.selectsOptions.Transmission.map(item => (
              <FormControlLabel
                className={props.classes.formControlLabel}
                key={item}
                control={
                  <Checkbox
                    checked={props.values.transmission_in.indexOf(item) !== -1}
                    onChange={props.handleMultiCheckboxChange(
                      "transmission_in"
                    )}
                    value={item}
                  />
                }
                label={enumsDisplayedText("transmission", item)}
              />
            ))}
          </Grid>
        </StyledFormControl>
        <StyledFilterTitle>Rodzaj układu napędowego</StyledFilterTitle>
        <StyledFormControl>
          <Grid container justify="flex-start">
            {props.selectsOptions.Drive.map(item => (
              <FormControlLabel
                className={props.classes.formControlLabel}
                key={item}
                control={
                  <Checkbox
                    checked={props.values.drive_in.indexOf(item) !== -1}
                    onChange={props.handleMultiCheckboxChange("drive_in")}
                    value={item}
                  />
                }
                label={enumsDisplayedText("drive", item)}
              />
            ))}
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
);

export default withStyles(styles)(EngineAndDriveModal);
