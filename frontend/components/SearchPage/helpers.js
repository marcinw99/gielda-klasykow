import { pipe } from "lodash/fp";
import {
  staticFiltersOptions,
  fetchedFiltersOptions,
  fetchedSubTypes
} from "./config";
import { isArray, isBoolean } from "util";

///// prepareOptions functions

const getSelectsOptions = input => {
  const types = input.Enums.types;
  var values = types.filter(
    item =>
      item.kind === "ENUM" && fetchedFiltersOptions.indexOf(item.name) !== -1
  );
  var results = {};
  for (let item in values) {
    results[values[item].name] = values[item].enumValues.map(item => item.name);
  }
  return results;
};

const getBooleans = input => {
  const types = input.Enums.types;
  var values = types.filter(item => fetchedSubTypes.indexOf(item.name) !== -1);
  var results = {};
  for (let item in values) {
    const normalizedTypeValues = values[item].fields.map(item => item.name);
    const filteredTypeValues = normalizedTypeValues.filter(
      item => item !== "id"
    );
    const typeName = values[item].name;
    results[typeName] = filteredTypeValues;
  }
  return results;
};

export function prepareOptions(input) {
  const selectsOptions = getSelectsOptions(input);
  const booleans = getBooleans(input);
  const customOptions = { Brand: input.Brands };

  return {
    ...selectsOptions,
    ...staticFiltersOptions,
    ...booleans,
    ...customOptions
  };
}

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
