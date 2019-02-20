import { Prisma } from "prisma-binding";

require("dotenv").config({ path: "variables.env" });

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET
});

export default db;
