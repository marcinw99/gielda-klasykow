import React from "react";
import { StyledFormControl } from "./styledComponents";
import PropTypes from "prop-types";

import Autocomplete from "./Autocomplete";
import { Grid } from "@material-ui/core";

const DoubleInputs = props => (
  <Grid container justify="center">
    <StyledFormControl>
      <Autocomplete
        value={props.valueLeft}
        options={props.options}
        handleChange={props.handleChange}
        name={props.nameLeft}
        placeholder={props.labelLeft}
      />
    </StyledFormControl>
    <StyledFormControl>
      <Autocomplete
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
  valueLeft: PropTypes.string.isRequired,
  nameRight: PropTypes.string.isRequired,
  labelRight: PropTypes.string.isRequired,
  valueRight: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  endAdornment: PropTypes.string
};

export default DoubleInputs;
