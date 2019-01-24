/*      <TextField
        name={props.nameLeft}
        label={props.labelLeft}
        value={props.valueLeft}
        onChange={props.handleChange}
        type="number"
        inputProps={{
          min: 0,
          max: 10000000
        }}
        InputProps={
          props.endAdornment
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    {props.endAdornment}
                  </InputAdornment>
                )
              }
            : {}
        }
      /> */

// implement input adornment in Autocomplete

import React from "react";
import { FormControl } from "@material-ui/core";
import PropTypes from "prop-types";

import Autocomplete from "./Autocomplete";

const DoubleInputs = props => (
  <div>
    <FormControl className={props.classes.formControl}>
      <Autocomplete
        value={props.valueLeft}
        options={[]}
        handleChange={props.handleChange}
        name={props.nameLeft}
        placeholder={props.labelLeft}
      />
    </FormControl>
    <FormControl className={props.classes.formControl}>
      <Autocomplete
        value={props.valueRight}
        options={[]}
        handleChange={props.handleChange}
        name={props.nameRight}
        placeholder={props.labelRight}
      />
    </FormControl>
  </div>
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
