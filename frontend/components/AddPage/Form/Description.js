import React from "react";
import { TextField } from "@material-ui/core";

const Description = props => (
  <div>
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
