import { isNumber, isString, isNullOrUndefined } from "util";

import {
  staticOptions,
  fetchedOptions,
  fetchedSubTypes,
  filtersValidationRules
} from "./config";

import {
  partialPrepareOptions,
  partialGetFormattedPayload,
  removePrefixFromValueName
} from "../../src/globalMethods";
import displayedText from "../../resources/displayedText";

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

///// addLabelsForOptions functions

const labeledOptions = {
  Price: values => values.map(item => ({ label: `${item} PLN`, value: item })),
  Brand: values =>
    values.map(item => ({ label: displayedText("brand", item), value: item })),
  Location: values => values.map(item => ({ label: item, value: item })),
  Type: values =>
    values.map(item => ({ label: displayedText("type", item), value: item })),
  FuelType: values =>
    values.map(item => ({
      label: displayedText("fuelType", item),
      value: item
    })),
  Brand: values =>
    values
      ? values.map(item => ({
          label: `${displayedText("brand", item.value)} (${item.count})`,
          value: item.value
        }))
      : [],
  ProductionYear: values => values.map(item => ({ label: item, value: item })),
  Mileage: values => values.map(item => ({ label: `${item} km`, value: item })),
  EngineSize: values =>
    values.map(item => ({ label: `${item} cm3`, value: item })),
  Power: values => values.map(item => ({ label: `${item} km`, value: item })),
  Torque: values => values.map(item => ({ label: `${item} nm`, value: item }))
};

export const addLabelsForOptions = options => {
  var result = { ...options };
  Object.keys(options).forEach(optionName => {
    if (Object.keys(labeledOptions).includes(optionName)) {
      result[optionName] = labeledOptions[optionName](options[optionName]);
    }
  });
  return result;
};

/////

///// getFormatedPayload

export const getFormattedPayload = data =>
  partialGetFormattedPayload(data, fetchedSubTypes);

/////

///// filterValueIsInvalid functions

const isValueInvalid = ({ value, rules }) => {
  // if null it means that value was cleared - no need to validate
  if (isNullOrUndefined(value)) return false;
  // type of value is required for validation
  if (typeof rules.type) {
    if (rules.valueNestedInObj) {
      const preparedValue = value.value;
      if (rules.type === "number") {
        if (!isNumber(preparedValue) || isNaN(preparedValue)) return true;
      }
      if (rules.type === "string" && !isString(preparedValue)) return true;
      for (const rule in rules) {
        if (rule === "minLength" && preparedValue.length < rules.minLength)
          return true;
        if (rule === "maxLength" && preparedValue.length > rules.maxLength)
          return true;
        if (rule === "minValue" && preparedValue < rules.minValue) return true;
        if (rule === "maxValue" && preparedValue > rules.maxValue) return true;
      }
    }
  }
  return false;
};

export const filterValueIsInvalid = ({ name, value }) => {
  const filteredValuesList = Object.keys(filtersValidationRules);
  if (filteredValuesList.includes(removePrefixFromValueName(name))) {
    return isValueInvalid({
      value,
      rules: filtersValidationRules[removePrefixFromValueName(name)]
    });
  }
  return false;
};

/////
