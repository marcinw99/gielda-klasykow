const Query = {
  cats(parent, args, ctx, info) {
    return ctx.db.cats();
  }
};

export default Query;
