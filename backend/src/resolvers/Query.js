const { forwardTo } = require("prisma-binding");
import { CarQuery } from "car-query";

import messageCodes from "../messageCodes";

const Query = {
  car: forwardTo("db"),
  post: forwardTo("db"),
  cars: forwardTo("db"),
  posts: forwardTo("db"),
  thisUser(parent, args, context, info) {
    if (!context.request.userId) {
      return null;
    }
    return context.db.query.user(
      {
        where: { id: context.request.userId }
      },
      info
    );
  },
  async resetTokenValid(parent, { resetToken }, context, info) {
    const [user] = await context.db.query.users({ where: { resetToken } });
    if (!user) {
      return { code: messageCodes.resetLinkExpiredOrInvalid };
    }
    return { code: messageCodes.resetTokenCorrect };
  },
  async modelsOfBrand(parent, args, context, info) {
    var results = [];
    const carQuery = new CarQuery();
    await carQuery.getModels({ make: args.brand }).then(models => {
      results = models.map(item => item.name);
    });
    return results;
  }
};

export default Query;
