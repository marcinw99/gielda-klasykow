import { GraphQLServer } from "graphql-yoga";

import resolvers from "./resolvers";
import db from "./database";
require("dotenv").config({ path: "variables.env" });

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    db
  })
});

export default server;
