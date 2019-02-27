import { getArrayOfNumbers } from "../../src/globalMethods";

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
export const fetchedOptions = [
  "Type",
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

export const staticOptions = {
  Location: ["Dębica", "Rzeszów", "Kraków", "Podlasie", "Warszawa"],
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
  engineSize_gte: null,
  engineSize_lte: null,
  power_gte: null,
  power_lte: null,
  torque_gte: null,
  torque_lte: null,
  hasParticulateFilter: "deleteFromSubmitData",
  transmission_in: [],
  drive_in: []
};

export const blankFiltersStateBodyAndAppereance = {
  color_in: [],
  steeringWheelOnTheRight: "deleteFromSubmitData",
  additionalAccessories_Appereance: []
};

export const blankFiltersStateAdditionalAccessories = {
  additionalAccessories_Safety: [],
  additionalAccessories_Comfort_Driver: [],
  additionalAccessories_Comfort_Passenger: []
};

export const blankFiltersVehicleStatus = {
  damaged: "deleteFromSubmitData",
  accidentFree: "deleteFromSubmitData",
  firstOwner: "deleteFromSubmitData",
  registeredInPoland: "deleteFromSubmitData",
  registeredAsAntiqueCar: "deleteFromSubmitData",
  hasVIN: "deleteFromSubmitData",
  tuning: "deleteFromSubmitData"
};

export const blankFiltersState = {
  type: null,
  brand: null,
  model: null,
  fuelType: null,
  location: null,
  productionYear_gte: null,
  productionYear_lte: null,
  mileage_gte: null,
  mileage_lte: null,
  price_lte: null,
  price_gte: null,
  keywords: null,
  ...blankFiltersStateEngineAndDrive,
  ...blankFiltersStateBodyAndAppereance,
  ...blankFiltersStateAdditionalAccessories,
  ...blankFiltersVehicleStatus
};

const standardRules = {
  number: {
    type: "number",
    valueNestedInObj: true,
    maxValue: 10000000
  },
  string: {
    type: "string",
    valueNestedInObj: true,
    maxLength: "30"
  }
};

export const filtersValidationRules = {
  price: standardRules.number,
  model: standardRules.string,
  location: standardRules.string,
  productionYear: {
    type: "number",
    valueNestedInObj: true,
    minValue: 1800,
    maxValue: new Date().getFullYear()
  },
  mileage: standardRules.number,
  engineSize: standardRules.number,
  power: standardRules.number,
  torque: standardRules.number
};
