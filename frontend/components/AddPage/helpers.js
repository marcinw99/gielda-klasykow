import {
  staticOptions,
  fetchedOptions,
  fetchedSubTypes,
  validationRules,
  validationMessages
} from "./config";

import {
  partialPrepareOptions,
  partialGetFormattedPayload
} from "../../src/globalMethods";
import { isNull, isArray, isBoolean } from "util";

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
  const {
    additionalAccessories_Comfort_Driver,
    additionalAccessories_Comfort_Passenger,
    additionalAccessories_Appereance,
    additionalAccessories_Safety,
    ...otherCarProps
  } = car;
  const normalizedData = {
    ...otherPostProps,
    photos: {
      set: photos
    },
    car: {
      create: {
        ...otherCarProps,
        additionalAccessories_Appereance: {
          create: additionalAccessories_Appereance
        },
        additionalAccessories_Safety: {
          create: additionalAccessories_Safety
        },
        additionalAccessories_Comfort_Driver: {
          create: additionalAccessories_Comfort_Driver
        },
        additionalAccessories_Comfort_Passenger: {
          create: additionalAccessories_Comfort_Passenger
        }
      }
    }
  };
  return normalizedData;
};

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
    if (rules.arrayOfValues === true) {
      if (attribute === "maxLength") {
        if (value.length > rules.maxLength) return validationMessages.maxLength;
      } else if (attribute === "maxItemLength") {
        value.forEach(item => {
          if (item.length > rules.maxItemLength) {
            return validationMessages.maxItemLength;
          }
        });
      }
    } else {
      if (attribute === "maxLength") {
        if (
          value.value.length > rules.maxLength ||
          value.label.length > rules.maxLength
        )
          return validationMessages.maxLength;
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
