import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const ListItemMultiValues = ({ items }) => (
  <li>
    <Typography>
      {items.map((item, key) => {
        return item.value == null ? null : (
          <Fragment key={`${item.value}${key}`}>
            {item.text ? item.text : item.value}
            {item.afterText}
          </Fragment>
        );
      })}
    </Typography>
  </li>
);

ListItemMultiValues.propTypes = {
  items: PropTypes.array.isRequired
};

export default ListItemMultiValues;
