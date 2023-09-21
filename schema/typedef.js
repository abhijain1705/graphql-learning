const { gql } = require("apollo-server");

const typeDef = gql`
   type User {
    name:
   }

   type Query {
        users
   }
`;
