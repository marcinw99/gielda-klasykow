import React from "react";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

import messageTexts from "../../resources/messageTexts";

function getMessageParameters(payload) {
  var messageCode = false;
  try {
    messageCode = JSON.parse(payload.message.replace("GraphQL error: ", ""));
  } catch (e) {
    // this error does not contain message code from server
    return false;
  }
  return messageCode;
}

function ErrorLayout(props) {
  return (
    <div>
      <Typography variant="h6" color="error">
        Błąd
      </Typography>
      <Typography gutterBottom color="error">
        {props.errorText}
      </Typography>
    </div>
  );
}

const ErrorMessage = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return <ErrorLayout errorText="Wystąpił problem z połączeniem." />;
  }
  var messageParameters = getMessageParameters(error);
  if (messageParameters) {
    const message = messageTexts[messageParameters.code](
      messageParameters.args
    );
    return <ErrorLayout errorText={message} />;
  }
  return <ErrorLayout errorText="Wystąpił nieoczekiwany błąd." />;
};

ErrorMessage.propTypes = {
  error: PropTypes.object
};

export default ErrorMessage;
