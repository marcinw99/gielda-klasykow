export const initialSearchParameters = {
  filters: {},
  sortBy: "createdAt_DESC",
  itemsLimit: 5
};

export const SortOptions = [
  { value: "createdAt_DESC", label: "Data dodania malejąco" },
  { value: "createdAt_ASC", label: "Data dodania rosnąco" },
  { value: "price_DESC", label: "Cena malejąco" },
  { value: "price_ASC", label: "Cena rosnąco" }
];

export const blankFiltersState = {
  segment: "",
  brand: "",
  model: "",
  fuelType: "",
  localization: "",
  productionYear_gt: "",
  productionYear_lt: "",
  mileage_gt: "",
  mileage_lt: "",
  price_lt: "",
  price_gt: "",
  keywords: ""
};
