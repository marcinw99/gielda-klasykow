import React from "react";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

import { spacesInNumbers } from "../../../src/helpers";

const Price = ({ price, rootCss }) => (
  <Typography className={rootCss} variant="h6" color="secondary">
    {spacesInNumbers(price)} PLN
  </Typography>
);

Price.propTypes = {
  price: PropTypes.number.isRequired,
  class: PropTypes.string
};

Price.defaultProps = {
  price: 0
};

export default Price;
