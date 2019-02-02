import { getArrayOfNumbers } from "./helpers";

export const initialSearchParameters = {
  filters: {},
  sortBy: "createdAt_DESC",
  itemsLimit: 10
};

export const SortOptions = [
  { value: "createdAt_DESC", label: "Data dodania malejąco" },
  { value: "createdAt_ASC", label: "Data dodania rosnąco" },
  { value: "price_DESC", label: "Cena malejąco" },
  { value: "price_ASC", label: "Cena rosnąco" }
];

export const itemsLimitOptions = [5, 10, 15, 20];

export const staticFiltersOptions = {
  localization: ["Dębica", "Rzeszów", "Kraków", "Podlasie", "Warszawa"],
  price: getArrayOfNumbers(10000, 10000, 10).concat(
    getArrayOfNumbers(125000, 25000, 7)
  ),
  mileage: getArrayOfNumbers(10000, 10000, 10).concat(
    getArrayOfNumbers(125000, 25000, 7)
  ),
  productionYear: getArrayOfNumbers(1960, 1, 60),
  engineSize: getArrayOfNumbers(500, 250, 6).concat(
    getArrayOfNumbers(2500, 500, 9)
  ),
  power: getArrayOfNumbers(50, 25, 8).concat(getArrayOfNumbers(300, 50, 6)),
  torque: getArrayOfNumbers(100, 50, 12)
};

export const blankFiltersStateEngineAndDrive = {
  engineSize_gt: null,
  engineSize_lt: null,
  power_gt: null,
  power_lt: null,
  torque_gt: null,
  torque_lt: null,
  transmission_in: [],
  drive_in: []
};

export const blankFiltersState = {
  segment: null,
  brand: null,
  model: null,
  fuelType: null,
  localization: null,
  productionYear_gt: null,
  productionYear_lt: null,
  mileage_gt: null,
  mileage_lt: null,
  price_lt: null,
  price_gt: null,
  keywords: null,
  ...blankFiltersStateEngineAndDrive
};
