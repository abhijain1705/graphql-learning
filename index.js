const {ApolloServer} = require("apollo-server");

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`the api is running at this url ${url}`);
}) 