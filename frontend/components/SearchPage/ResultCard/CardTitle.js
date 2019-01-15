import React from "react";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

import enumsDisplayedText from "../../../resources/enumsDisplayedText";

const CardTitle = ({ brand, model, version }) => (
  <Typography variant="h6">
    {enumsDisplayedText("Car", "brand", brand)} {model} {version}
  </Typography>
);

CardTitle.propTypes = {
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  version: PropTypes.string
};

CardTitle.defaultProps = {
  version: ""
};

export default CardTitle;
