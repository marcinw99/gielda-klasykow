import React from "react";
import { Button, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const SimpleLink = props => (
  <Button className={props.rootCss} variant="text" href={props.href}>
    <Typography align="left" className={props.typographyCss}>
      {props.label}
    </Typography>
  </Button>
);

SimpleLink.propTypes = {
  rootCss: PropTypes.string,
  href: PropTypes.string.isRequired,
  typographyCss: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default SimpleLink;
