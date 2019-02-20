"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Brand",
    embedded: false
  },
  {
    name: "Car",
    embedded: false
  },
  {
    name: "Color",
    embedded: false
  },
  {
    name: "Country",
    embedded: false
  },
  {
    name: "Drive",
    embedded: false
  },
  {
    name: "FuelType",
    embedded: false
  },
  {
    name: "Permission",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Transmission",
    embedded: false
  },
  {
    name: "Type",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "additionalAccessories_Appereance",
    embedded: false
  },
  {
    name: "additionalAccessories_Comfort_Driver",
    embedded: false
  },
  {
    name: "additionalAccessories_Comfort_Passenger",
    embedded: false
  },
  {
    name: "additionalAccessories_Safety",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`
});
exports.prisma = new exports.Prisma();
var models = [
  {
    name: "Brand",
    embedded: false
  },
  {
    name: "Car",
    embedded: false
  },
  {
    name: "Color",
    embedded: false
  },
  {
    name: "Country",
    embedded: false
  },
  {
    name: "Drive",
    embedded: false
  },
  {
    name: "FuelType",
    embedded: false
  },
  {
    name: "Permission",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Transmission",
    embedded: false
  },
  {
    name: "Type",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "additionalAccessories_Appereance",
    embedded: false
  },
  {
    name: "additionalAccessories_Comfort_Driver",
    embedded: false
  },
  {
    name: "additionalAccessories_Comfort_Passenger",
    embedded: false
  },
  {
    name: "additionalAccessories_Safety",
    embedded: false
  }
];
