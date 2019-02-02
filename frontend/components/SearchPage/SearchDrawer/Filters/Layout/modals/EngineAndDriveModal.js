import React from "react";
import {
  Modal,
  FormControlLabel,
  Checkbox,
  FormControl,
  Grid,
  withStyles
} from "@material-ui/core";
import { remove } from "lodash";

import { blankFiltersStateEngineAndDrive } from "../../../../config";
import enumsDisplayedText from "../../../../../../resources/enumsDisplayedText";
import DoubleInputs from "../DoubleInputs";
import {
  ModalPaper,
  ModalContent,
  StyledFilterTitle
} from "./styledComponents";
import Header from "./Header";
import Footer from "./Footer";

const styles = theme => ({
  formControlLabel: {
    width: 250,
    maxHeight: 32
  }
});

const EngineAndDriveModal = props => {
  const handleCheckboxChange = field => event => {
    var result;
    const prevValue = [...props.values[field]];
    const { value, checked } = event.target;
    if (checked && prevValue.indexOf(value) === -1) {
      result = [...prevValue, value];
    }
    if (!checked && prevValue.indexOf(value) !== -1) {
      result = remove(prevValue, item => item !== value);
    }
    props.handleChange({
      name: field,
      value: result
    });
  };

  const handleReset = () => {
    props.resetSpecificFiltersWithoutFiltering(blankFiltersStateEngineAndDrive);
  };

  return (
    <Modal
      aria-labelledby="engine-and-drive-filters"
      open={props.openedModal === "EngineAndDriveModal"}
      onClose={props.closeModal}
    >
      <ModalPaper>
        <Header title="Silnik i napęd" handleClose={props.closeModal} />
        <ModalContent>
          <StyledFilterTitle>
            Pojemność skokowa (cm<sup>3</sup> )
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
            handleChange={props.handleChange}
            options={props.selectsOptions.engineSize.map(item => ({
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
            handleChange={props.handleChange}
            options={props.selectsOptions.power.map(item => ({
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
            handleChange={props.handleChange}
            options={props.selectsOptions.torque.map(item => ({
              label: `${item} nm`,
              value: item
            }))}
          />
          <StyledFilterTitle>Rodzaj skrzyni biegów</StyledFilterTitle>
          <FormControl>
            <Grid container justify="flex-start">
              {props.selectsOptions.transmission.map(item => (
                <FormControlLabel
                  className={props.classes.formControlLabel}
                  key={item}
                  control={
                    <Checkbox
                      checked={
                        props.values.transmission_in.indexOf(item) !== -1
                      }
                      onChange={handleCheckboxChange("transmission_in")}
                      value={item}
                    />
                  }
                  label={enumsDisplayedText("transmission", item)}
                />
              ))}
            </Grid>
          </FormControl>
          <StyledFilterTitle>Rodzaj układu napędowego</StyledFilterTitle>
          <FormControl>
            <Grid container justify="flex-start">
              {props.selectsOptions.drive.map(item => (
                <FormControlLabel
                  className={props.classes.formControlLabel}
                  key={item}
                  control={
                    <Checkbox
                      checked={props.values.drive_in.indexOf(item) !== -1}
                      onChange={handleCheckboxChange("drive_in")}
                      value={item}
                    />
                  }
                  label={enumsDisplayedText("drive", item)}
                />
              ))}
            </Grid>
          </FormControl>
        </ModalContent>
        <Footer handleSubmit={props.submitModal} handleReset={handleReset} />
      </ModalPaper>
    </Modal>
  );
};

export default withStyles(styles)(EngineAndDriveModal);

/*

{
    openedModal: this.state.openedModal,
    handleChange: this.props.handleChangeWithoutFiltering,
    values: this.props.values,
    resetSpecificFiltersWithoutFiltering: this.props.resetSpecificFiltersWithoutFiltering,
    selectsOptions: this.props.selectsOptions,
    submitModal: this.submitModal,
    closeModal: this.closeModal
}

*/
