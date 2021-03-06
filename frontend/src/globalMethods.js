import { pipe } from "lodash/fp";
import {
  isArray,
  isBoolean,
  isObject,
  isString,
  isUndefined,
  isNull
} from "util";

// standalone functions

export function getArrayOfNumbers(startWith, incrementBy, amountOfValues) {
  var array = [];
  var value = startWith;
  for (let i = 0; i <= amountOfValues; i++) {
    array.push(value);
    value += incrementBy;
  }
  return array;
}

/////

///// partialPrepareOptions functions

const getSelectsOptions = (fetchedFields, fetchedOptions) => {
  const types = fetchedFields.Enums.types;
  var values = types.filter(
    item => item.kind === "ENUM" && fetchedOptions.indexOf(item.name) !== -1
  );
  var results = {};
  for (let item in values) {
    results[values[item].name] = values[item].enumValues.map(item => item.name);
  }
  return results;
};

const getBooleans = (fetchedFields, fetchedSubTypes) => {
  const types = fetchedFields.Enums.types;
  var values = types.filter(item => fetchedSubTypes.indexOf(item.name) !== -1);
  var results = {};
  for (let item in values) {
    const normalizedTypeValues = values[item].fields.map(item => item.name);
    const filteredTypeValues = normalizedTypeValues.filter(
      item => item !== "id" && item !== "car"
    );
    const typeName = values[item].name;
    results[typeName] = filteredTypeValues;
  }
  return results;
};

export function partialPrepareOptions(
  { staticOptions, fetchedOptions, fetchedSubTypes, getCustomOptions },
  fetchedFields
) {
  const selectsOptions = getSelectsOptions(fetchedFields, fetchedOptions);
  const booleans = getBooleans(fetchedFields, fetchedSubTypes);
  const customOptions = getCustomOptions ? getCustomOptions(fetchedFields) : {};

  return {
    ...selectsOptions,
    ...staticOptions,
    ...booleans,
    ...customOptions
  };
}

/////

///// getTypesFieldsAsArrays functions

function formatTypeFields(fields) {
  return fields.map(item => item.name);
}

function formatInputData(data) {
  // remove .fields nesting
  var result = {};
  for (const key in data) {
    if (data[key]) {
      if (isArray(data[key].fields)) {
        result[key] = data[key].fields;
      } else {
        result[key] = data[key];
      }
    }
  }
  return result;
}

export function getTypesFieldsAsArrays(data) {
  var result = {};
  const formattedData = formatInputData(data);
  for (const key in formattedData) {
    result[key] = formatTypeFields(formattedData[key]);
  }
  return result;
}

/////

///// assignValuesToProperDataType functions

const typeAcceptsValue = (type, valueName) =>
  type.indexOf(valueName) !== -1 ||
  type.indexOf(removePrefixFromValueName(valueName)) !== -1
    ? true
    : false;

export const assignValuesToProperDataType = ({ values, typesFields }) => {
  var result = { car: {} };
  for (const valueName in values) {
    if (typeAcceptsValue(typesFields.Post, valueName)) {
      result[valueName] = values[valueName];
    }
    if (typeAcceptsValue(typesFields.Car, valueName)) {
      result.car[valueName] = values[valueName];
    }
  }
  return result;
};

/////

///// partialGetFormatedPayload functions

const valueShouldBeInPayload = value => {
  if (isArray(value)) {
    return value.length !== 0;
  } else if (isObject(value)) {
    return Object.keys(value).length !== 0;
  } else if (isString(value)) {
    if (value === "deleteFromSubmitData" || value.length === 0) {
      return false;
    }
  } else if (isNull(value) || isUndefined(value)) {
    return false;
  }
  return true;
};

const filterOutUnnecessaryValues = data => {
  var result = data;
  for (const key in result) {
    if (!valueShouldBeInPayload(result[key])) delete result[key];
  }
  return result;
};

const normalizeProperties = data => {
  var result = {};
  for (const key in data) {
    if (isArray(data[key]) || isBoolean(data[key]) || isString(data[key])) {
      if (key === "photos") {
        result[key] = data[key].map(item => item.photo);
      } else {
        result[key] = data[key];
      }
    } else {
      result[key] = data[key].value;
    }
  }
  return result;
};

const spreadArraysIntoSubTypes = (data, fetchedSubTypes) => {
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

export const partialGetFormattedPayload = (data, fetchedSubTypes) => {
  const normalizedProperties = pipe(
    filterOutUnnecessaryValues,
    normalizeProperties
  )(data);
  const result = spreadArraysIntoSubTypes(
    normalizedProperties,
    fetchedSubTypes
  );
  return result;
};

/////

///// removePrefixFromValueName

export const removePrefixFromValueName = name =>
  name.slice(0, name.indexOf("_") === -1 ? name.length : name.indexOf("_"));

/////
