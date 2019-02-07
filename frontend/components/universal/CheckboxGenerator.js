import React from "react";
import { FormControlLabel, Checkbox, withStyles } from "@material-ui/core";

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

const CheckboxGenerator = ({
  name,
  valueName,
  options,
  values,
  handleChange,
  classes,
  smallLabel
}) =>
  options.map(item => (
    <FormControlLabel
      className={classes.root}
      classes={smallLabel ? { label: classes.smallLabel } : {}}
      key={item}
      control={
        <Checkbox
          checked={values.indexOf(item) !== -1}
          onChange={handleChange(valueName ? valueName : name)}
          value={item}
        />
      }
      label={displayedText(name, item)}
    />
  ));

export default withStyles(styles)(CheckboxGenerator);
