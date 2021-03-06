import {
  staticOptions,
  fetchedOptions,
  fetchedSubTypes,
  validationRules,
  additionalValidationRules,
  validationMessages
} from "./config";

import {
  partialPrepareOptions,
  partialGetFormattedPayload
} from "../../src/globalMethods";
import { isNull, isArray, isBoolean, isString } from "util";

///// prepareOptions

export const prepareOptions = fetchedFields =>
  partialPrepareOptions(
    {
      staticOptions,
      fetchedOptions,
      fetchedSubTypes
    },
    fetchedFields
  );

/////

///// getFormatedPayload

export const getFormattedPayload = data =>
  partialGetFormattedPayload(data, fetchedSubTypes);

/////

///// normalizeDataToMatchPostInput

export const normalizeDataToMatchPostInput = data => {
  const { car, photos, ...otherPostProps } = data;

  var normalizedData = {
    ...otherPostProps,
    user: {
      connect: { id: "willConnectOnBackend" }
    },
    car: {
      create: {
        ...car
      }
    }
  };
  // create values nested in set or create
  normalizedData.photos = { set: photos ? photos : null };
  [
    "additionalAccessories_Comfort_Driver",
    "additionalAccessories_Comfort_Passenger",
    "additionalAccessories_Appereance",
    "additionalAccessories_Safety"
  ].map(item => {
    normalizedData.car.create[item] = car[item]
      ? {
          create: car[item]
        }
      : { create: {} };
  });
  return normalizedData;
};

/////

///// getArrayOfFieldsNotFilled

export const getArrayOfFieldsNotFilled = ({ values, criteria }) => {
  var notFilled = [];
  criteria.forEach(item => {
    if (isNull(values[item.name])) {
      notFilled.push(item);
    } else if (isArray(values[item.name])) {
      if (values[item.name].length === 0) {
        notFilled.push(item);
      }
    }
  });
  return notFilled;
};

///// formValueIsIncorrect functions

const isValueIncorrect = ({ value, rules }) => {
  for (const attribute in rules) {
    if (isBoolean(value)) return false;
    if (value === null || value === undefined) return false;
    if (isArray(value)) {
      if (attribute === "maxLength") {
        if (value.length > rules.maxLength) return validationMessages.maxLength;
      } else if (attribute === "minLength") {
        if (value.length < rules.minLength) return validationMessages.minLength;
      } else if (attribute === "maxItemLength") {
        value.forEach(item => {
          if (item.length > rules.maxItemLength) {
            return validationMessages.maxItemLength;
          }
        });
      }
    } else if (isString(value)) {
      if (attribute === "maxLength") {
        if (value.length > rules.maxLength) return validationMessages.maxLength;
      } else if (attribute === "minLength") {
        if (value.length < rules.minLength) return validationMessages.minLength;
      } else if (attribute === "maxValue") {
        if (value > rules.maxValue) return validationMessages.maxValue;
      } else if (attribute === "minValue") {
        if (value < rules.minValue) return validationMessages.minValue;
      }
    } else {
      if (attribute === "maxLength") {
        if (value.value.length > rules.maxLength)
          return validationMessages.maxLength;
      } else if (attribute === "minLength") {
        if (value.value.length < rules.minLength)
          return validationMessages.minLength;
      } else if (attribute === "maxValue") {
        if (value.value > rules.maxValue) return validationMessages.maxValue;
      } else if (attribute === "minValue") {
        if (value.value < rules.minValue) return validationMessages.minValue;
      }
    }
  }
  return false;
};

export const formValueIsIncorrect = ({ name, value }) => {
  if (Object.keys(validationRules).indexOf(name) === -1) {
    return isValueIncorrect({ value, rules: validationRules.default });
  } else {
    return isValueIncorrect({ value, rules: validationRules[name] });
  }
};

export const formValueMayBeIncorrect = ({ name, value }) => {
  if (Object.keys(additionalValidationRules).indexOf(name) !== -1) {
    return isValueIncorrect({ value, rules: additionalValidationRules[name] });
  } else return false;
};
