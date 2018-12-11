import { GraphQLServer } from "graphql-yoga";
import { Prisma } from "prisma-binding";

import resolvers from "./resolvers";
require("dotenv").config({ path: "variables.env" });

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: "src/generated/prisma.graphql",
      endpoint: process.env.PRISMA_ENDPOINT,
      secret: process.env.PRISMA_SECRET
    })
  })
});

export default server;
