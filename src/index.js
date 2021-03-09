import "core-js/stable";
import "regenerator-runtime/runtime";
import dotenv from "dotenv";
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

dotenv.config();

const server = new GraphQLServer({
  typeDefs: "src/graphql/schema.graphql",
  resolvers,
});

const options = { port: process.env.PORT || 4000 };

server.start(options, () =>
  console.log(`✅ server is running on localhost:${options.port}`)
);
