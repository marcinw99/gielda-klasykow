import { pipe } from "lodash/fp";
import gql from "graphql-tag";
import { isNull, isObject, isArray } from "util";

import { getTypesFieldsAsArrays } from "../../src/globalMethods";

/////

///// composePostQuery functions

const removeValuesFromArraysInObject = (data, valuesToDelete) => {
  const result = { ...data };
  for (const key in data) {
    if (isArray(data[key])) {
      result[key] = data[key].filter(item => !valuesToDelete.includes(item));
    }
  }
  return result;
};

const getFieldsString = fields => fields.join(" ");

const joinPostFieldsIntoString = data =>
  `${getFieldsString(data.Post)}
    car { ${getFieldsString(data.Car)}
    additionalAccessories_Safety { ${getFieldsString(
      data.additionalAccessories_Safety
    )} }
    additionalAccessories_Appereance { ${getFieldsString(
      data.additionalAccessories_Appereance
    )} }
    additionalAccessories_Comfort_Driver { ${getFieldsString(
      data.additionalAccessories_Comfort_Driver
    )} }
    additionalAccessories_Comfort_Passenger { ${getFieldsString(
      data.additionalAccessories_Comfort_Passenger
    )} }
    }`;

const nestTypesInGql = data => gql`
    query POST_QUERY($postId: ID!) {
      post(where: { id: $postId }) {
        ${data}
      }
    }
  `;

export const composePostQuery = ({ data, additionalArgs }) =>
  pipe(
    getTypesFieldsAsArrays,
    input =>
      removeValuesFromArraysInObject(input, additionalArgs.fieldsToDelete),
    joinPostFieldsIntoString,
    nestTypesInGql
  )(data);

/////

///// getFormattedPostData functions

const removeNullValuesFromNestedObjects = obj => {
  var result = { ...obj };
  for (const key in obj) {
    if (isNull(obj[key])) {
      delete result[key];
    } else if (isObject(obj[key])) {
      result[key] = removeNullValuesFromNestedObjects(obj[key]);
    }
  }
  return result;
};

const removeFieldsFromNestedObjects = (data, fieldsToDelete) => {
  var result = { ...data };
  for (const key in result) {
    if (fieldsToDelete.includes(key)) {
      delete result[key];
    } else if (isObject(result[key])) {
      result[key] = removeFieldsFromNestedObjects(result[key], fieldsToDelete);
    }
  }
  return result;
};

const customDataFormatting = data => {
  const result = data;
  result.photos = Object.values(data.photos);
  return result;
};

export const getFormattedPostData = ({ data, additionalArgs }) =>
  pipe(
    removeNullValuesFromNestedObjects,
    input =>
      removeFieldsFromNestedObjects(input, additionalArgs.fieldsToDelete),
    customDataFormatting
  )(data);

/////

/////
