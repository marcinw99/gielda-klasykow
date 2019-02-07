import { pipe } from "lodash/fp";
import { staticOptions, fetchedOptions, fetchedSubTypes } from "./config";
import { isArray, isBoolean } from "util";

import { partialPrepareOptions } from "../../src/globalMethods";

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

///// getFormatedFiltersData functions

const filterOutEmptyValues = data => {
  var result = data;
  for (const key in result) {
    if (result[key] == null) delete result[key];
  }
  return result;
};

const normalizeObjectProperties = data => {
  var result = {};
  for (const key in data) {
    if (isArray(data[key]) || isBoolean(data[key])) {
      result[key] = data[key];
    } else {
      result[key] = data[key].value;
    }
  }
  return result;
};

const spreadArraysIntoSubTypes = data => {
  var result = { ...data };
  for (const key in result) {
    if (fetchedSubTypes.indexOf(key) !== -1 && isArray(result[key])) {
      var type = {};
      result[key].forEach(element => {
        type[element] = true;
      });
      result[key] = type;
    }
  }
  return result;
};

export const getFormattedFiltersData = pipe(
  filterOutEmptyValues,
  normalizeObjectProperties,
  spreadArraysIntoSubTypes
);

/////
