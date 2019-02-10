import { staticOptions, fetchedOptions, fetchedSubTypes } from "./config";

import {
  partialPrepareOptions,
  partialGetFormattedPayload
} from "../../src/globalMethods";

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
