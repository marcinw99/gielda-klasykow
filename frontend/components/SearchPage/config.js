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

/* Brand and Model fetched separately */
export const fetchedFiltersOptions = [
  "Segment",
  "FuelType",
  "Transmission",
  "Drive",
  "Color",
  "Country"
];

export const fetchedSubTypes = [
  "additionalAccessories_Safety",
  "additionalAccessories_Comfort_Passenger",
  "additionalAccessories_Comfort_Driver",
  "additionalAccessories_Appereance"
];

export const staticFiltersOptions = {
  Localization: ["Dębica", "Rzeszów", "Kraków", "Podlasie", "Warszawa"],
  Price: getArrayOfNumbers(10000, 10000, 10).concat(
    getArrayOfNumbers(125000, 25000, 7)
  ),
  Mileage: getArrayOfNumbers(10000, 10000, 10).concat(
    getArrayOfNumbers(125000, 25000, 7)
  ),
  ProductionYear: getArrayOfNumbers(1960, 1, 60),
  EngineSize: getArrayOfNumbers(500, 250, 6).concat(
    getArrayOfNumbers(2500, 500, 9)
  ),
  Power: getArrayOfNumbers(50, 25, 8).concat(getArrayOfNumbers(300, 50, 6)),
  Torque: getArrayOfNumbers(100, 50, 12)
};

export const blankFiltersStateEngineAndDrive = {
  engineSize_gt: null,
  engineSize_lt: null,
  power_gt: null,
  power_lt: null,
  torque_gt: null,
  torque_lt: null,
  hasParticulateFilter: "deleteFromFilters",
  transmission_in: [],
  drive_in: []
};

export const blankFiltersStateBodyAndAppereance = {
  color_in: [],
  steeringWheelOnTheRight: "deleteFromFilters",
  additionalAccessories_Appereance: []
};

export const blankFiltersStateAdditionalAccessories = {
  additionalAccessories_Safety: [],
  additionalAccessories_Comfort_Driver: [],
  additionalAccessories_Comfort_Passenger: []
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
  ...blankFiltersStateEngineAndDrive,
  ...blankFiltersStateBodyAndAppereance,
  ...blankFiltersStateAdditionalAccessories
};
