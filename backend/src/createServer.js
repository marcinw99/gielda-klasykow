import { prisma } from "./generated/prisma-client";
import { GraphQLServer } from "graphql-yoga";

import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers: {
    Mutation,
    Query
  },
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: {
    db: prisma
  }
});

export default server;
