const { forwardTo } = require("prisma-binding");

const Query = {
  car: forwardTo("db"),
  post: forwardTo("db"),
  cars: forwardTo("db"),
  posts: forwardTo("db")
};

export default Query;
