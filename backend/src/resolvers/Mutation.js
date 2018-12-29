import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
  },
  signUp: async function(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: { set: ["USER"] }
        }
      },
      info
    );
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    context.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    return user;
  },
  signIn: async function(parent, { email, password }, ctx, info) {
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`Nie znaleziono użytkownika z emailem ${email}`);
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error(`Podane hasło jest nieprawidłowe`);
    }
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    return user;
  },
  signOut(parent, args, ctx, info) {
    ctx.response.clearCookie("token");
    return { message: "Goodbye" };
  }
};

export default Mutation;
