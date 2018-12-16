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
    name: "FuelType",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Segment",
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
    name: "FuelType",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Segment",
    embedded: false
  }
];
