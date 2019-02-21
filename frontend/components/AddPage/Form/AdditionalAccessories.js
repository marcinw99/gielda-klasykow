import React from "react";
import { Grid } from "@material-ui/core";

import { StyledValueTitle, StyledFormControl } from "../styledComponents";
import CheckboxGenerator from "../../universal/CheckboxGenerator";

const AdditionalAccessories = props => (
  <div>
    <StyledValueTitle>Bezpieczeństwo</StyledValueTitle>
    <StyledFormControl>
      <Grid container justify="flex-start">
        <CheckboxGenerator
          name="additionalAccessories_Safety"
          options={props.options.additionalAccessories_Safety}
          values={props.values.additionalAccessories_Safety}
          handleChange={props.handleMultiCheckboxChange}
        />
      </Grid>
    </StyledFormControl>
    <StyledValueTitle>Komfort kierowcy</StyledValueTitle>
    <StyledFormControl>
      <Grid container justify="flex-start">
        <CheckboxGenerator
          name="additionalAccessories_Comfort_Driver"
          options={props.options.additionalAccessories_Comfort_Driver}
          values={props.values.additionalAccessories_Comfort_Driver}
          handleChange={props.handleMultiCheckboxChange}
        />
      </Grid>
    </StyledFormControl>
    <StyledValueTitle>Komfort pasażerów</StyledValueTitle>
    <StyledFormControl>
      <Grid container justify="flex-start">
        <CheckboxGenerator
          name="additionalAccessories_Comfort_Passenger"
          options={props.options.additionalAccessories_Comfort_Passenger}
          values={props.values.additionalAccessories_Comfort_Passenger}
          handleChange={props.handleMultiCheckboxChange}
        />
      </Grid>
    </StyledFormControl>
  </div>
);

export default AdditionalAccessories;
