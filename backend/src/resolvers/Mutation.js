const Mutations = {
  createCar(parent, args, ctx, info) {
    return ctx.db.createCar(args);
  }
};

export default Mutations;
