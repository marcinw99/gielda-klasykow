import { isNumber, isString, isNullOrUndefined } from "util";

import {
  staticOptions,
  fetchedOptions,
  fetchedSubTypes,
  filtersValidationRules
} from "./config";

import {
  partialPrepareOptions,
  partialGetFormattedPayload,
  removePrefixFromValueName
} from "../../src/globalMethods";

///// prepareOptions functions

const getCustomOptions = fetchedFields => {
  return { Brand: fetchedFields.Brands };
};

export const prepareOptions = fetchedFields =>
  partialPrepareOptions(
    {
      staticOptions,
      fetchedOptions,
      fetchedSubTypes,
      getCustomOptions
    },
    fetchedFields
  );

/////

///// getFormatedPayload

export const getFormattedPayload = data =>
  partialGetFormattedPayload(data, fetchedSubTypes);

/////

///// filterValueIsInvalid functions

const isValueInvalid = ({ value, rules }) => {
  // if null it means that value was cleared - no need to validate
  if (isNullOrUndefined(value)) return false;
  // type of value is required for validation
  if (typeof rules.type) {
    if (rules.valueNestedInObj) {
      const preparedValue = value.value;
      if (rules.type === "number") {
        if (!isNumber(preparedValue) || isNaN(preparedValue)) return true;
      }
      if (rules.type === "string" && !isString(preparedValue)) return true;
      for (const rule in rules) {
        if (rule === "minLength" && preparedValue.length < rules.minLength)
          return true;
        if (rule === "maxLength" && preparedValue.length > rules.maxLength)
          return true;
        if (rule === "minValue" && preparedValue < rules.minValue) return true;
        if (rule === "maxValue" && preparedValue > rules.maxValue) return true;
      }
    }
  }
  return false;
};

export const filterValueIsInvalid = ({ name, value }) => {
  const filteredValuesList = Object.keys(filtersValidationRules);
  if (filteredValuesList.includes(removePrefixFromValueName(name))) {
    return isValueInvalid({
      value,
      rules: filtersValidationRules[removePrefixFromValueName(name)]
    });
  }
  return false;
};

/////
