const Mutation = {
  createCar: async function(parent, args, context, info) {
    const item = await context.db.mutation.createCar({ data: args }, info);
    return item;
  },
  createPost: async function(parent, args, context, info) {
    const item = await context.db.mutation.createPost(
      {
        data: {
          ...args,
          car: {
            ...args.car
          }
        }
      },
      info
    );
    return item;
  }
};

export default Mutation;
