const { forwardTo } = require("prisma-binding");

const Query = {
  car: forwardTo("db"),
  post: forwardTo("db"),
  cars: forwardTo("db"),
  posts: forwardTo("db"),
  thisUser(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    );
  },
  async resetTokenValid(parent, { resetToken }, ctx, info) {
    const [user] = await ctx.db.query.users({ where: { resetToken } });
    if (!user) {
      return { message: "Token wygasł lub jest nieprawidłowy." };
    }
    return { message: "git token" };
  }
};

export default Query;
