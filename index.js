const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/typedef");
const { resolvers } = require("./schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`the api is running at this url ${url}`);
});
