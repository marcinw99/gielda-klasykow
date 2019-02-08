import React from "react";
import { Grid } from "@material-ui/core";

import { StyledValueTitle, StyledFormControl } from "../styledComponents";
import BooleanSelect from "../../universal/BooleanSelect";
import CheckboxGenerator from "../../universal/CheckboxGenerator";
import { Autocomplete } from "../../universal/Autocompletes";
import displayedText from "../../../resources/displayedText";

const BodyAndAppereance = props => (
  <div>
    <StyledValueTitle>Wygląd</StyledValueTitle>
    <StyledFormControl>
      <Grid container justify="flex-start">
        <CheckboxGenerator
          name="additionalAccessories_Appereance"
          options={props.options.additionalAccessories_Appereance}
          values={props.values.additionalAccessories_Appereance}
          handleChange={props.handleMultiCheckboxChange}
        />
      </Grid>
    </StyledFormControl>
    <StyledValueTitle>Kolor lakieru</StyledValueTitle>
    <StyledFormControl>
      <Autocomplete
        darkLabel
        name="color"
        placeholder="Biały, brązowy..."
        value={props.values.color}
        handleChange={props.handleChange}
        options={props.options.Color.map(item => ({
          label: displayedText("color", item),
          value: item
        }))}
      />
    </StyledFormControl>
    <StyledValueTitle>Kierownica po prawej stronie (anglik)</StyledValueTitle>
    <StyledFormControl>
      <BooleanSelect
        name="steeringWheelOnTheRight"
        value={props.values.steeringWheelOnTheRight}
        handleChange={props.handleChange}
      />
    </StyledFormControl>
  </div>
);

export default BodyAndAppereance;
