import React from "react";
import { FormControl, TextField, InputAdornment } from "@material-ui/core";

const NumberInputs = props => (
  <div>
    <FormControl
      className={`${props.classes.formControlSmallLeft} ${
        props.classes.formControl
      }`}
    >
      <TextField
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
      />
    </FormControl>
    <FormControl
      className={`${props.classes.formControlSmallRight} ${
        props.classes.formControl
      }`}
    >
      <TextField
        name={props.nameRight}
        label={props.labelRight}
        value={props.valueRight}
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
      />
    </FormControl>
  </div>
);

export default NumberInputs;
