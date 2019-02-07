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
