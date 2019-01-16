import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const passwordStrengthLabels = {
  weak: "Nie wystarczające",
  average: "średnie",
  strong: "mocne",
  veryStrong: "nie straszny ci nawet haker Bonzo"
};

const styles = theme => ({
  weakPassword: { color: "#b71c1c" },
  averagePassword: { color: "#e65100" },
  strongPassword: { color: "#1b5e20" },
  veryStrongPassword: { color: "#33691e" }
});

const StrengthLevelLabel = ({ level, classes }) => {
  return (
    <Typography className={classes[`${level}Password`]}>{`Siła hasła: ${
      passwordStrengthLabels[level]
    }`}</Typography>
  );
};

StrengthLevelLabel.propTypes = {
  level: PropTypes.string.isRequired
};

export default withStyles(styles)(StrengthLevelLabel);
