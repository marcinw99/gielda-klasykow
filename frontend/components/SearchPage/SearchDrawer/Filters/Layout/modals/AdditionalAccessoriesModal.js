import React from "react";
import {
  Modal,
  FormControlLabel,
  Checkbox,
  Grid,
  withStyles
} from "@material-ui/core";

import { blankFiltersStateAdditionalAccessories } from "../../../../config";
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
    width: 200,
    maxHeight: 24,
    marginTop: theme.spacing.unit * 2
  },
  formControlLabelLabel: {
    fontSize: 12
  }
});

const AdditionalAccessoriesModal = props => {
  console.log(props.selectsOptions);
  return (
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
              {props.selectsOptions.AdditionalAccessory_Safety.map(item => (
                <FormControlLabel
                  className={props.classes.formControlLabel}
                  classes={{ label: props.classes.formControlLabelLabel }}
                  key={item}
                  control={
                    <Checkbox
                      checked={
                        props.values.additionalAccessories_Safety_in.indexOf(
                          item
                        ) !== -1
                      }
                      onChange={props.handleMultiCheckboxChange(
                        "additionalAccessories_Safety_in"
                      )}
                      value={item}
                    />
                  }
                  label={enumsDisplayedText(
                    "additionalAccessories_Safety",
                    item
                  )}
                />
              ))}
            </Grid>
          </StyledFormControl>
          <StyledFilterTitle>Komfort kierowcy</StyledFilterTitle>
          <StyledFormControl>
            <Grid container justify="flex-start">
              {props.selectsOptions.AdditionalAccessory_Comfort_Driver.map(
                item => (
                  <FormControlLabel
                    className={props.classes.formControlLabel}
                    classes={{ label: props.classes.formControlLabelLabel }}
                    key={item}
                    control={
                      <Checkbox
                        checked={
                          props.values.additionalAccessories_Comfort_Driver_in.indexOf(
                            item
                          ) !== -1
                        }
                        onChange={props.handleMultiCheckboxChange(
                          "additionalAccessories_Comfort_Driver_in"
                        )}
                        value={item}
                      />
                    }
                    label={enumsDisplayedText(
                      "additionalAccessories_Comfort_Driver",
                      item
                    )}
                  />
                )
              )}
            </Grid>
          </StyledFormControl>
          <StyledFilterTitle>Komfort pasażerów</StyledFilterTitle>
          <StyledFormControl>
            <Grid container justify="flex-start">
              {props.selectsOptions.AdditionalAccessory_Comfort_Passenger.map(
                item => (
                  <FormControlLabel
                    className={props.classes.formControlLabel}
                    classes={{ label: props.classes.formControlLabelLabel }}
                    key={item}
                    control={
                      <Checkbox
                        checked={
                          props.values.additionalAccessories_Comfort_Passenger_in.indexOf(
                            item
                          ) !== -1
                        }
                        onChange={props.handleMultiCheckboxChange(
                          "additionalAccessories_Comfort_Passenger_in"
                        )}
                        value={item}
                      />
                    }
                    label={enumsDisplayedText(
                      "additionalAccessories_Comfort_Passenger",
                      item
                    )}
                  />
                )
              )}
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
};

export default withStyles(styles)(AdditionalAccessoriesModal);
