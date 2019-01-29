export const staticFiltersOptions = {
  localization: ["Dębica", "Rzeszów", "Kraków", "Podlasie", "Warszawa"],
  price: getArrayOfNumbers(10000, 10000, 10).concat(
    getArrayOfNumbers(125000, 25000, 7)
  ),
  mileage: getArrayOfNumbers(10000, 10000, 10).concat(
    getArrayOfNumbers(125000, 25000, 7)
  ),
  productionYear: getArrayOfNumbers(1960, 1, 60)
};

function getArrayOfNumbers(startWith, incrementBy, amountOfValues) {
  var array = [];
  var value = startWith;
  for (let i = 0; i <= amountOfValues; i++) {
    array.push(value);
    value += incrementBy;
  }
  return array;
}
