import React from "react";
import { Select, MenuItem } from "@material-ui/core";

const BooleanSelect = ({ name, value, handleChange }) => {
  return (
    <Select
      value={value}
      onChange={e => handleChange(e.target)}
      inputProps={{
        name
      }}
    >
      <MenuItem value="deleteFromSubmitData">
        <em>Nie wybrano</em>
      </MenuItem>
      <MenuItem value={true}>Tak</MenuItem>
      <MenuItem value={false}>Nie</MenuItem>
    </Select>
  );
};

export default BooleanSelect;
