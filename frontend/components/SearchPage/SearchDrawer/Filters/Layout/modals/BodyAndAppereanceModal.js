import React from "react";
import {
  Modal,
  FormControlLabel,
  Checkbox,
  FormControl,
  Grid,
  withStyles,
  MenuItem,
  Select
} from "@material-ui/core";

import { blankFiltersStateBody } from "../../../../config";
import enumsDisplayedText from "../../../../../../resources/enumsDisplayedText";
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
  },
  formControl: {
    minWidth: 150,
    margin: theme.spacing.unit
  }
});

const BodyAndAppereanceModal = props => (
  <Modal
    aria-labelledby="body-and-appereance-filters"
    open={props.openedModal === "BodyAndAppereanceModal"}
    onClose={props.closeModal}
  >
    <ModalPaper>
      <Header title="Nadwozie" handleClose={props.closeModal} />
      <ModalContent>
        <StyledFilterTitle>Kolor lakieru</StyledFilterTitle>
        <FormControl>
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
        </FormControl>
        <StyledFilterTitle>
          Kierownica po prawej stronie (anglik)
        </StyledFilterTitle>
        <FormControl className={props.classes.formControl}>
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
        </FormControl>
        <StyledFilterTitle>Wygląd</StyledFilterTitle>
        <FormControl>
          <Grid container justify="flex-start">
            {props.selectsOptions.AdditionalAccessory_Appereance.map(item => (
              <FormControlLabel
                className={props.classes.formControlLabel}
                key={item}
                control={
                  <Checkbox
                    checked={
                      props.values.AdditionalAccessory_Appereance_in.indexOf(
                        item
                      ) !== -1
                    }
                    onChange={props.handleMultiCheckboxChange(
                      "AdditionalAccessory_Appereance_in"
                    )}
                    value={item}
                  />
                }
                label={enumsDisplayedText(
                  "AdditionalAccessory_Appereance",
                  item
                )}
              />
            ))}
          </Grid>
        </FormControl>
      </ModalContent>
      <Footer
        handleSubmit={props.submitModal}
        handleReset={() => {
          props.resetSpecificFiltersWithoutFiltering(blankFiltersStateBody);
        }}
      />
    </ModalPaper>
  </Modal>
);

export default withStyles(styles)(BodyAndAppereanceModal);
