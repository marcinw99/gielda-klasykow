import { pipe } from "lodash/fp";
import {
  staticFiltersOptions,
  fetchedFiltersOptions,
  fetchedSubTypes
} from "./config";
import { isArray, isObject, isString, isUndefined } from "util";

// standalone functions

export const filterArrayOfObjects = (arr, criteria) =>
  arr.filter(obj => Object.keys(criteria).every(c => obj[c] === criteria[c]));

export function getArrayOfNumbers(startWith, incrementBy, amountOfValues) {
  var array = [];
  var value = startWith;
  for (let i = 0; i <= amountOfValues; i++) {
    array.push(value);
    value += incrementBy;
  }
  return array;
}

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
    results[values[item].name] = values[item].fields.map(item => item.name);
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

///// getTypesFields functions

function formatTypeFields(fields) {
  return fields.map(item => item.name);
}

export function getTypesFields(data) {
  var result = {};
  for (const key in data) {
    result[key] = formatTypeFields(data[key]);
  }
  return result;
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
    if (isArray(data[key])) {
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

///// assignFiltersToProperQueryObject functions

const valueShouldBeInQueryObject = value => {
  if (isArray(value)) {
    return value.length !== 0;
  } else if (isObject(value)) {
    return Object.keys(value).length !== 0;
  } else if (isString(value) && value !== "deleteFromFilters") {
    return value.length !== 0;
  } else if (value == null || isUndefined(value)) {
    return false;
  }
  return true;
};

const typeAcceptsValue = (type, filterName) =>
  // slice for prefixes like price_gt, price_lt etc.
  type.indexOf(filterName) !== -1 ||
  type.indexOf(filterName.slice(0, -3)) !== -1
    ? true
    : false;

export const assignFiltersToProperQueryObject = ({ filters, typesFields }) => {
  var result = { car: {} };
  for (const filterName in filters) {
    if (valueShouldBeInQueryObject(filters[filterName])) {
      if (typeAcceptsValue(typesFields.Post, filterName)) {
        result[filterName] = filters[filterName];
      }
      if (typeAcceptsValue(typesFields.Car, filterName)) {
        result.car[filterName] = filters[filterName];
      }
    }
  }
  return result;
};

/////
