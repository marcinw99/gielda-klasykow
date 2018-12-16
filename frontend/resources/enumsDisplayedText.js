export default (variant, enumName, key) => variants[variant][enumName][key];

const variants = {
  Car: {
    brand: {
      SAAB: "Saab",
      AUDI: "Audi",
      MERCEDES_BENZ: "Mercedes-Benz",
      BMW: "BMW"
    },
    fuelType: {
      BENZYNA: "Benzyna",
      BENZYNA_LPG: "Benzyna + LPG",
      BENZYNA_CNG: "Benzyna + CNG",
      DIESEL: "Diesel",
      HYBRYDA: "Hybryda",
      ELEKTRYCZNY: "Elektryczny",
      INNY: "Inny"
    }
  },
  Post: {}
};
