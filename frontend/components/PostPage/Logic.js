import React from "react";

const formatPostData = data => {
  return {};
};

const Logic = props => {
  const post = formatPostData(props.data);
  return React.cloneElement(props.children, { post });
};

export default Logic;
