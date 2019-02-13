import { isBoolean } from "util";

import messageCodes from "./messageCodes";

const minimumRequirementsRegExpressions = [
  {
    regexp: new RegExp(".{6,}")
    // message: "Hasło nie zawiera minimum 6 znaków."
  },
  {
    regexp: new RegExp("\\d")
    // message: "Hasło nie zawiera minimum jednej cyfry."
  },
  {
    regexp: new RegExp("[a-z]", "i")
    // message: "Hasło nie zawiera minimum jednej litery."
  }
];

export function isPasswordValid(password) {
  for (const index in minimumRequirementsRegExpressions) {
    if (
      minimumRequirementsRegExpressions[index].regexp.test(password) === false
    ) {
      return false;
    }
  }
  return true;
}

export function areArgumentsLengthsInRange(args) {
  for (const index in args) {
    if (args[index] > 30) {
      return false;
    }
  }
  return true;
}

// Post

const postFieldsValidationRules = {
  default: {
    maxLength: 50
  },
  // overrides
  price: {
    maxLength: 50,
    minValue: 50,
    maxValue: 10000000
  },
  photos: {
    maxLength: 50,
    arrayOfValues: true,
    maxItemLength: 250
  },
  avatar: {
    maxLength: 250
  },
  description: {
    maxLength: 250
  }
};

///// formValueIsIncorrect functions

const isValueIncorrect = ({ value, rules }) => {
  for (const attribute in rules) {
    if (value === null || value === undefined)
      return messageCodes.argumentsInvalid;
    if (isBoolean(value)) return false;
    if (rules.arrayOfValues === true) {
      if (attribute === "maxLength") {
        if (value.length > rules.maxLength)
          return messageCodes.argumentsLengthsNotInRange;
      } else if (attribute === "maxItemLength") {
        value.forEach(item => {
          if (item.length > rules.maxItemLength) {
            return messageCodes.argumentsLengthsNotInRange;
          }
        });
      }
    } else {
      if (attribute === "maxLength") {
        if (value.length > rules.maxLength)
          return messageCodes.argumentsLengthsNotInRange;
      }
      if (attribute === "maxValue") {
        if (value > rules.maxValue)
          return messageCodes.argumentsValuesNotInCorrectRange;
      }
      if (attribute === "minValue") {
        if (value < rules.minValue)
          return messageCodes.argumentsValuesNotInCorrectRange;
      }
    }
  }
  return false;
};

export const formValueIsIncorrect = ({ name, value }) => {
  if (Object.keys(postFieldsValidationRules).indexOf(name) === -1) {
    return isValueIncorrect({
      value,
      rules: postFieldsValidationRules.default
    });
  } else {
    return isValueIncorrect({ value, rules: postFieldsValidationRules[name] });
  }
};
