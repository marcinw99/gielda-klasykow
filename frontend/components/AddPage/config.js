import { getArrayOfNumbers } from "../../src/globalMethods";

export const steps = [
  {
    label: "Podstawowe informacje",
    content: "Najważniejsze informacje o samochodzie, cena, lokalizacja"
  },
  {
    label: "Galeria zdjęć",
    content: "Zdjęcia nadwozia, wnętrza, ewentualnych uszkodzeń"
  },
  {
    label: "Silnik i napęd",
    content: "Parametry silnika, skrzynia biegów, układ przeniesienia napędu"
  },
  {
    label: "Nadwozie i wygląd",
    content: "Rodzaj nadwozia, kolor i rodzaj lakieru"
  },
  {
    label: "Dodatkowe wyposażenie",
    content: "Dodatki wpływające na komfort i bezpieczeństwo jazdy",
    optional: true
  },
  {
    label: "Status pojazdu",
    content: "Historia samochodu, informacje prawne"
  },
  { label: "Podsumowanie", content: "Sprawdź czy podałeś poprawne dane" }
];

/* Model fetched separately */
export const fetchedOptions = [
  "Brand",
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

export const staticOptions = {
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

export const blankEngineAndDrive = {
  engineSize: null,
  power: null,
  torque: null,
  hasParticulateFilter: "deleteFromSubmitData",
  transmission: null,
  drive: null
};

export const blankBodyAndAppereance = {
  color: null,
  steeringWheelOnTheRight: "deleteFromSubmitData",
  additionalAccessories_Appereance: []
};

export const blankAdditionalAccessories = {
  additionalAccessories_Safety: [],
  additionalAccessories_Comfort_Driver: [],
  additionalAccessories_Comfort_Passenger: []
};

export const blankVehicleStatus = {
  damaged: "deleteFromSubmitData",
  accidentFree: "deleteFromSubmitData",
  firstOwner: "deleteFromSubmitData",
  registeredInPoland: "deleteFromSubmitData",
  registeredAsAntiqueCar: "deleteFromSubmitData",
  hasVIN: "deleteFromSubmitData",
  tuning: "deleteFromSubmitData"
};

export const blankValuesState = {
  segment: null,
  brand: null,
  model: null,
  fuelType: null,
  localization: null,
  productionYear: null,
  mileage: null,
  price: null,
  keywords: null,
  avatar: null,
  photos: [],
  ...blankEngineAndDrive,
  ...blankBodyAndAppereance,
  ...blankAdditionalAccessories,
  ...blankVehicleStatus
};
