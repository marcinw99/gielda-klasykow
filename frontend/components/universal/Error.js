import React from "react";
import PropTypes from "prop-types";

import messageTexts from "../../resources/messageTexts";

const ErrorMessage = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <div key={i}>
        <p data-test="graphql-error">
          <strong>Błąd</strong>
          <br />
          {error.message.replace("GraphQL error: ", "")}
        </p>
      </div>
    ));
  }
  const obj = JSON.parse(error.message.replace("GraphQL error: ", ""));
  const message = messageTexts[obj.code]();
  return (
    <div>
      <span data-test="graphql-error">
        <strong>Błąd</strong>
        <br />
        {message}
      </span>
    </div>
  );
};

ErrorMessage.defaultProps = {
  error: {}
};

ErrorMessage.propTypes = {
  error: PropTypes.object
};

export default ErrorMessage;
