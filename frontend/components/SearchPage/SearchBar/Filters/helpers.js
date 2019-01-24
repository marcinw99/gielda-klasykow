function formatTypeFields(fields) {
  return fields.map(item => item.name);
}

export function getTypesFields(data) {
  const Post = formatTypeFields(data.Post.fields);
  const Car = formatTypeFields(data.Car.fields);
  return { Post, Car };
}

export function prepareSelectsOptions(input) {
  // returns possible values of enum types in db
  // enumValues are differently nested depending on other attributes in db,
  // don't try to understand it, it works
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
  return results;
}

export function formatObjectValuesToStrings(object) {
  var result = {};
  Object.keys(object).map(item => {
    result[item] = String(object[item]);
  });
  return result;
}

export const shouldBeInQueryObject = value =>
  value == null || value.length === 0 || value === "deleteFromFilters"
    ? false
    : true;

export const typeAcceptsValue = (type, value) =>
  // slice for values like price_gt, price_lt etc.
  type.indexOf(value) !== -1 || type.indexOf(value.slice(0, -3)) !== -1
    ? true
    : false;

export const filterArrayOfObjects = (arr, criteria) =>
  arr.filter(obj => Object.keys(criteria).every(c => obj[c] === criteria[c]));
