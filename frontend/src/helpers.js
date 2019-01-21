export function spacesInNumbers(number) {
  return number.toLocaleString("ru-RU");
}

export function prepareSelectsOptions(input) {
  // returns possible values of enum types in db
  // sometimes (when value is required in db) enumValues and typename are in type.ofType instead of type
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

export const shouldBeInQueryObject = value =>
  value == null || value.length === 0 || value === "deleteFromFilters"
    ? false
    : true;

export const typeAcceptsValue = (type, value) =>
  type.indexOf(value) !== -1 || type.indexOf(value.slice(0, -3)) !== -1
    ? true
    : false;
