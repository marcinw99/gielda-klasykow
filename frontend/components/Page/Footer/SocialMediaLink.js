import React from "react";
import { Button, SvgIcon } from "@material-ui/core";
import PropTypes from "prop-types";

const SocialMediaLink = props => (
  <Button
    target="_blank"
    className={props.rootCss}
    variant="outlined"
    color="primary"
    href={props.href}
  >
    <SvgIcon>
      <path {...props.svgIcon} />
    </SvgIcon>{" "}
    {props.label}
  </Button>
);

SocialMediaLink.propTypes = {
  rootCss: PropTypes.string,
  href: PropTypes.string.isRequired,
  svgIcon: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
};

export default SocialMediaLink;
