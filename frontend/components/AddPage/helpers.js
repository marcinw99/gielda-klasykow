import { staticOptions, fetchedOptions, fetchedSubTypes } from "./config";

import { partialPrepareOptions } from "../../src/globalMethods";

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
