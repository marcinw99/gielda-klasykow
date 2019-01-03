import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { randomBytes } from "crypto";
import { promisify } from "util";

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
  async signUp(parent, args, context, info) {
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
  async signIn(parent, { email, password }, ctx, info) {
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
  },
  async requestPasswordReset(parent, { email }, ctx, info) {
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`Nie znaleziono użytkownika z adresem email '${email}'.`);
    }
    const randomBytesPromiseified = promisify(randomBytes);
    const resetToken = (await randomBytesPromiseified(20)).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000;
    await ctx.db.mutation.updateUser({
      where: { email },
      data: { resetToken, resetTokenExpiry }
    });
    return {
      message: "Link do resetowania hasła został wysłany na podany adres email."
    };
  }
};

export default Mutation;
