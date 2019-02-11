import {
  staticOptions,
  fetchedOptions,
  fetchedSubTypes,
  requiredFields
} from "./config";

import {
  partialPrepareOptions,
  partialGetFormattedPayload
} from "../../src/globalMethods";
import { isNull, isArray } from "util";

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

///// getArrayOfRequiredFieldsNotFilled

export const getArrayOfRequiredFieldsNotFilled = values => {
  var notFilled = [];
  requiredFields.forEach(item => {
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
