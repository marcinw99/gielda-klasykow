import React from "react";
import { Grid } from "@material-ui/core";
import { StyledFormControl } from "./styledComponents";
import PropTypes from "prop-types";

import { Autocomplete, Creatable } from "./Autocompletes";

const DoubleInputs = props =>
  props.canCreateOption ? (
    <Grid container justify={props.justify ? props.justify : "center"}>
      <StyledFormControl>
        <Creatable
          className={props.className}
          darkLabel={props.darkLabel}
          unit={props.unit}
          value={props.valueLeft}
          options={props.options}
          handleChange={props.handleChange}
          name={props.nameLeft}
          placeholder={props.labelLeft}
        />
      </StyledFormControl>
      <StyledFormControl>
        <Creatable
          className={props.className}
          darkLabel={props.darkLabel}
          unit={props.unit}
          value={props.valueRight}
          options={props.options}
          handleChange={props.handleChange}
          name={props.nameRight}
          placeholder={props.labelRight}
        />
      </StyledFormControl>
    </Grid>
  ) : (
    <Grid container justify="center">
      <StyledFormControl>
        <Autocomplete
          className={props.className}
          darkLabel={props.darkLabel}
          value={props.valueLeft}
          options={props.options}
          handleChange={props.handleChange}
          name={props.nameLeft}
          placeholder={props.labelLeft}
        />
      </StyledFormControl>
      <StyledFormControl>
        <Autocomplete
          className={props.className}
          darkLabel={props.darkLabel}
          value={props.valueRight}
          options={props.options}
          handleChange={props.handleChange}
          name={props.nameRight}
          placeholder={props.labelRight}
        />
      </StyledFormControl>
    </Grid>
  );

DoubleInputs.propTypes = {
  nameLeft: PropTypes.string.isRequired,
  labelLeft: PropTypes.string.isRequired,
  valueLeft: PropTypes.object,
  nameRight: PropTypes.string.isRequired,
  labelRight: PropTypes.string.isRequired,
  valueRight: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  endAdornment: PropTypes.string
};

export default DoubleInputs;
