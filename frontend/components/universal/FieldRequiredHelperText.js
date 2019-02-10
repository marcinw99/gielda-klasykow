import React from "react";
import { FormHelperText } from "@material-ui/core";

const FieldRequiredHelperText = props => {
  if (props.value == null || props.value.length === 0) {
    return <FormHelperText error>Wymagane</FormHelperText>;
  }
  return null;
};

export default FieldRequiredHelperText;
