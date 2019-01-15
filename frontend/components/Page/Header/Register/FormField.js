import React from "react";
import { FormControl, Input, InputLabel } from "@material-ui/core";
import PropTypes from "prop-types";

const FormField = ({ label, name, type, value, onChange, autoFocus }) => (
  <FormControl margin="normal" required fullWidth>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <Input
      onChange={onChange}
      value={value}
      type={type ? type : "string"}
      name={name}
      autoFocus={autoFocus ? autoFocus : false}
    />
  </FormControl>
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FormField;
