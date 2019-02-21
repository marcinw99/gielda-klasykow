import React from "react";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  withStyles
} from "@material-ui/core";

import displayedText from "../../resources/displayedText";

const styles = theme => ({
  element: {
    maxHeight: 32,
    width: 250
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
        className={classes.element}
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
