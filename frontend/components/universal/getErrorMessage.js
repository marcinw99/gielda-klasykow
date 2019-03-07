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

const getErrorMessage = error => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return "Wystąpił problem z połączeniem.";
  }
  var messageParameters = getMessageParameters(error);
  if (messageParameters) {
    const message = messageTexts[messageParameters.code](
      messageParameters.args
    );
    return message;
  }
  return "Wystąpił nieoczekiwany błąd.";
};

export default getErrorMessage;
