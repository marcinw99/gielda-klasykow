import React from "react";
import { TextField, Typography } from "@material-ui/core";

import { validationRules } from "../config";

const Description = props => (
  <div>
    <Typography gutterBottom variant="body2">{`${
      props.values.description.length
    } / ${validationRules.description.maxLength}`}</Typography>
    <TextField
      variant="outlined"
      multiline
      fullWidth
      rows={16}
      rowsMax={32}
      placeholder="..."
      name="description"
      value={props.values.description}
      onChange={e => props.handleChange(e.target)}
    />
  </div>
);

export default Description;
