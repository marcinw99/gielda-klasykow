const Mutations = {
  createCat(parent, args, ctx, info) {
    return ctx.db.createCat(args);
  }
};

export default Mutations;
