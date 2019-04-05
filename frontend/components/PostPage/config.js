import displayedText from "../../resources/displayedText";
import { spacesInNumbers } from "./helpers";

export const postQueryFieldsToDelete = [
  "id",
  "car",
  "post",
  "user",
  "additionalAccessories_Safety",
  "additionalAccessories_Appereance",
  "additionalAccessories_Comfort_Driver",
  "additionalAccessories_Comfort_Passenger"
];

export const postQueryResultFieldsToDelete = ["__typename"];

// info names and keys
export const infoTablesSetup = [
  {
    label: "Marka pojazdu",
    key: "brand",
    getDisplayedValue: value => displayedText("brand", value)
  },
  {
    label: "Model pojazdu",
    key: "model"
  },
  {
    label: "Rok produkcji",
    key: "productionYear"
  },
  {
    label: "Przebieg pojazdu",
    key: "mileage",
    getDisplayedValue: value => `${spacesInNumbers(value)} km`
  },
  {
    label: "Pojemność skokowa",
    key: "engineSize",
    getDisplayedValue: value => `${value} cm3`
  },
  {
    label: "Rodzaj paliwa",
    key: "fuelType",
    getDisplayedValue: value => displayedText("fuelType", value)
  },
  {
    label: "Moc silnika",
    key: "power",
    getDisplayedValue: value => `${value} km`
  },
  {
    label: "Moment obrotowy",
    key: "torque",
    getDisplayedValue: value => `${value} nm`
  },
  {
    label: "Skrzynia biegów",
    key: "transmission",
    getDisplayedValue: value => displayedText("transmission", value)
  },
  {
    label: "Rodzaj napędu",
    key: "drive",
    getDisplayedValue: value => displayedText("drive", value)
  },
  {
    label: "Typ nadwozia",
    key: "type",
    getDisplayedValue: value => displayedText("type", value)
  },
  {
    label: "Kolor lakieru",
    key: "color",
    getDisplayedValue: value => displayedText("color", value)
  }
];

export const boolValuesConfig = [
  {
    label: "Bezwypadkowy",
    key: "accidentFree"
  },
  {
    label: "Uszkodzony",
    key: "damaged"
  },
  {
    label: "Pierwszy właściciel",
    key: "firstOwner"
  },
  {
    label: "Posiada filtr cząstek stałych",
    key: "hasParticulateFilter"
  },
  {
    label: "Posiada numer VIN",
    key: "hasVIN"
  },
  {
    label: "Zarejestrowany jako zabytek",
    key: "registeredAsAntiqueCar"
  },
  {
    label: "Zarejestrowany w Polsce",
    key: "registeredInPoland"
  },
  {
    label: "Kierownica po prawej stronie (anglik)",
    key: "steeringWheelOnTheRight"
  },
  {
    label: "Tuning",
    key: "tuning"
  }
];
