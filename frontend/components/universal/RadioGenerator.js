import React from "react";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  withStyles
} from "@material-ui/core";

import displayedText from "../../resources/displayedText";

const styles = theme => ({
  root: {
    width: 250,
    maxHeight: 32
  },
  smallLabel: {
    fontSize: 13
  }
});

const RadioGenerator = ({
  name,
  options,
  value,
  handleChange,
  classes,
  smallLabel
}) => (
  <RadioGroup name={name} value={value} onChange={handleChange}>
    {options.map(item => (
      <FormControlLabel
        className={classes.root}
        classes={smallLabel ? { label: classes.smallLabel } : {}}
        key={item}
        value={item}
        label={displayedText(name, item)}
        control={<Radio />}
      />
    ))}
  </RadioGroup>
);

export default withStyles(styles)(RadioGenerator);
