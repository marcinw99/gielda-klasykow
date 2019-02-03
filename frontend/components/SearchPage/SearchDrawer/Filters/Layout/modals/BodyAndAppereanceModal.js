import React from "react";
import {
  Modal,
  FormControlLabel,
  Checkbox,
  Grid,
  withStyles,
  MenuItem,
  Select
} from "@material-ui/core";

import { blankFiltersStateBodyAndAppereance } from "../../../../config";
import enumsDisplayedText from "../../../../../../resources/enumsDisplayedText";
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

const BodyAndAppereanceModal = props => (
  <Modal
    aria-labelledby="body-and-appereance-filters"
    open={props.openedModal === "BodyAndAppereanceModal"}
    onClose={props.closeModal}
  >
    <ModalPaper>
      <Header title="Nadwozie i wygląd" handleClose={props.closeModal} />
      <ModalContent>
        <StyledFilterTitle>Kolor lakieru</StyledFilterTitle>
        <StyledFormControl>
          <Grid container justify="flex-start">
            {props.selectsOptions.Color.map(item => (
              <FormControlLabel
                className={props.classes.formControlLabel}
                key={item}
                control={
                  <Checkbox
                    checked={props.values.color_in.indexOf(item) !== -1}
                    onChange={props.handleMultiCheckboxChange("color_in")}
                    value={item}
                  />
                }
                label={enumsDisplayedText("color", item)}
              />
            ))}
          </Grid>
        </StyledFormControl>
        <StyledFilterTitle>
          Kierownica po prawej stronie (anglik)
        </StyledFilterTitle>
        <StyledFormControl>
          <Select
            value={props.values.steeringWheelOnTheRight}
            onChange={e => props.handleChangeWithoutFiltering(e.target)}
            inputProps={{
              name: "steeringWheelOnTheRight"
            }}
          >
            <MenuItem value="deleteFromFilters">
              <em>Nie wybrano</em>
            </MenuItem>
            <MenuItem value={true}>Tak</MenuItem>
            <MenuItem value={false}>Nie</MenuItem>
          </Select>
        </StyledFormControl>
        <StyledFilterTitle>Wygląd</StyledFilterTitle>
        <StyledFormControl>
          <Grid container justify="flex-start">
            {props.selectsOptions.AdditionalAccessory_Appereance.map(item => (
              <FormControlLabel
                className={props.classes.formControlLabel}
                key={item}
                control={
                  <Checkbox
                    checked={
                      props.values.additionalAccessories_Appereance_in.indexOf(
                        item
                      ) !== -1
                    }
                    onChange={props.handleMultiCheckboxChange(
                      "additionalAccessories_Appereance_in"
                    )}
                    value={item}
                  />
                }
                label={enumsDisplayedText(
                  "additionalAccessories_Appereance",
                  item
                )}
              />
            ))}
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
);

export default withStyles(styles)(BodyAndAppereanceModal);
