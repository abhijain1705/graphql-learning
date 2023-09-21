const { UserList, MovieList } = require("../FakeData");

const resolvers = {
  Query: {
    users() {
      return UserList;
    },
  },
};
module.exports = { resolvers };
