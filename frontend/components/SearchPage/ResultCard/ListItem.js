import React from "react";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const ListItem = ({ value, text, afterText }) =>
  value == null ? null : (
    <li>
      <Typography>
        {text ? text(value) : value}
        {afterText}
      </Typography>
    </li>
  );

ListItem.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  text: PropTypes.func,
  afterText: PropTypes.string
};

export default ListItem;
