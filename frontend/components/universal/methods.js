import { isArray, isObject, isString, isUndefined } from "util";

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

///// assignValuesToProperDataType functions

const valueShouldBeInDataType = value => {
  if (isArray(value)) {
    return value.length !== 0;
  } else if (isObject(value)) {
    return Object.keys(value).length !== 0;
  } else if (isString(value) && value !== "deleteFromSubmitData") {
    return value.length !== 0;
  } else if (value == null || isUndefined(value)) {
    return false;
  }
  return true;
};

const typeAcceptsValue = (type, valueName) =>
  // slice for prefixes like price_gt, price_lt etc.
  type.indexOf(valueName) !== -1 || type.indexOf(valueName.slice(0, -3)) !== -1
    ? true
    : false;

export const assignValuesToProperDataType = ({ Values, typesFields }) => {
  var result = { car: {} };
  for (const valueName in Values) {
    if (valueShouldBeInDataType(Values[valueName])) {
      if (typeAcceptsValue(typesFields.Post, valueName)) {
        result[valueName] = Values[valueName];
      }
      if (typeAcceptsValue(typesFields.Car, valueName)) {
        result.car[valueName] = Values[valueName];
      }
    }
  }
  return result;
};

/////
