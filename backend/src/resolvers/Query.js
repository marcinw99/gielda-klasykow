const Query = {
  cars(parent, args, ctx, info) {
    return ctx.db.cars();
  }
};

export default Query;
