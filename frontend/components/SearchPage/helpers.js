import { pipe } from "lodash/fp";
import { staticFiltersOptions } from "./config";

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

export function prepareSelectsOptions(input) {
  // returns possible values of enum types in db
  // enumValues are differently nested ( don't know why ),
  var values = input.filter(item => {
    if (item.type.kind === "ENUM") {
      return true;
    }
    if (item.type.ofType != null) {
      if (item.type.ofType.kind === "ENUM") {
        return true;
      }
    }
    return false;
  });
  var results = {};
  for (let item in values) {
    results[values[item].name] = (values[item].type.enumValues == null
      ? values[item].type.ofType.enumValues
      : values[item].type.enumValues
    ).map(item => item.name);
  }
  return { ...results, ...staticFiltersOptions };
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
    result[key] = data[key].value;
  }
  return result;
};

export const getFormattedFiltersData = pipe(
  filterOutEmptyValues,
  normalizeObjectProperties
);

/////

///// assignFiltersToProperQueryObject functions

const valueShouldBeInQueryObject = value =>
  value == null || value.length === 0 || value === "deleteFromFilters"
    ? false
    : true;

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
