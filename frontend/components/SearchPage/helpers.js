import { staticOptions, fetchedOptions, fetchedSubTypes } from "./config";

import {
  partialPrepareOptions,
  partialGetFormattedPayload
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
