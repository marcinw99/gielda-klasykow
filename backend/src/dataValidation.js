import { isBoolean, isArray, isString } from "util";

import messageCodes from "./messageCodes";
import passwordStrengthLevels from "../globalConfig/passwordStrengthLevels";
import postsFieldsValidationRules from "../globalConfig/postsFieldsValidationRules";

export function isPasswordValid(password) {
  // password is valid when meets average strength level rules
  for (const index in passwordStrengthLevels.average) {
    if (passwordStrengthLevels.average[index].regexp.test(password) === false) {
      return false;
    }
  }
  return true;
}

// areArgumentsLengthsInRange

export function areArgumentsLengthsInRange(args) {
  for (const index in args) {
    if (args[index] > 30) {
      return false;
    }
  }
  return true;
}

///// formValueIsIncorrect functions

const isValueIncorrect = ({ value, rules }) => {
  for (const attribute in rules) {
    if (isBoolean(value)) return false;
    if (value === null || value === undefined)
      return messageCodes.argumentsInvalid;
    if (isArray(value)) {
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
    } else if (isString(value)) {
      if (attribute === "maxLength") {
        if (value.length > rules.maxLength)
          return messageCodes.argumentsLengthsNotInRange;
      } else if (attribute === "minLength") {
        if (value.length < rules.minLength)
          return messageCodes.argumentsLengthsNotInRange;
      } else if (attribute === "maxValue") {
        if (value > rules.maxValue)
          return messageCodes.argumentsValuesNotInCorrectRange;
      } else if (attribute === "minValue") {
        if (value < rules.minValue)
          return messageCodes.argumentsValuesNotInCorrectRange;
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
  if (Object.keys(postsFieldsValidationRules).indexOf(name) === -1) {
    return isValueIncorrect({
      value,
      rules: postsFieldsValidationRules.default
    });
  } else {
    return isValueIncorrect({ value, rules: postsFieldsValidationRules[name] });
  }
};
