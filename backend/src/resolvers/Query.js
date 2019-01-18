const { forwardTo } = require("prisma-binding");

import messageCodes from "../messageCodes";

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
      return { code: messageCodes.resetLinkExpiredOrInvalid };
    }
    return { code: messageCodes.resetTokenCorrect };
  }
};

export default Query;
