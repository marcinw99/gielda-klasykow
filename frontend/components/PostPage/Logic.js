import React from "react";

import { postQueryResultFieldsToDelete } from "./config";
import { getFormattedPostData } from "./helpers";

const isPostDataIsValid = post =>
  post.car &&
  post.car.additionalAccessories_Safety &&
  post.car.additionalAccessories_Appereance &&
  post.car.additionalAccessories_Comfort_Driver &&
  post.car.additionalAccessories_Comfort_Passenger;

const Logic = props => {
  if (isPostDataIsValid(props.post)) {
    const post = getFormattedPostData({
      data: props.post,
      additionalArgs: { fieldsToDelete: postQueryResultFieldsToDelete }
    });
    return React.cloneElement(props.children, { post });
  } else {
    return <p>Dane nieprawidłowe</p>;
  }
};

export default Logic;
