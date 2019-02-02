const { forwardTo } = require("prisma-binding");
import { CarQuery } from "car-query";

import messageCodes from "../messageCodes";
import { getOccurrencesOfValuesInArray } from "../helpers";

const Query = {
  car: forwardTo("db"),
  post: forwardTo("db"),
  cars: forwardTo("db"),
  posts: forwardTo("db"),
  postsConnection: forwardTo("db"),
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
  async modelsOfBrand(parent, args) {
    var results = [];
    const carQuery = new CarQuery();
    await carQuery.getModels({ make: args.brand }).then(models => {
      results = models.map(item => item.name);
    });
    return results;
  },
  async availableModelsOfBrand(parent, args, context, info) {
    const allModelsRaw = await context.db.query.cars(
      {
        where: { brand: args.brand }
      },
      `{
      model
    }`
    );
    const allModels = allModelsRaw.map(item => item.model);
    var modelsCount = getOccurrencesOfValuesInArray(allModels);
    return modelsCount;
  },
  async availableBrands(parent, args, context, info) {
    const allBrandsRaw = await context.db.query.cars(
      {},
      `{
      brand
    }`
    );
    const allBrands = allBrandsRaw.map(item => item.brand);
    var brandCount = getOccurrencesOfValuesInArray(allBrands);
    return brandCount;
  }
};

export default Query;
