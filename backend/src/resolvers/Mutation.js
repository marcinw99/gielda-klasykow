import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { randomBytes } from "crypto";
import { promisify } from "util";

import { isPasswordValid, areArgumentsLengthsInRange } from "../dataValidation";

function argsValidation(args) {
  if (!areArgumentsLengthsInRange(args)) {
    throw new Error("Ilość znaków w podanych argumentach jest nieprawidłowa");
  }
}

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
    if (!isPasswordValid(args.password)) {
      throw new Error(
        "Podane hasło nie spełnia minimalnych wymagań złożoności."
      );
    }
    argsValidation(args);
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
  async signIn(parent, args = { email, password }, ctx, info) {
    argsValidation(args);
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
  async requestPasswordReset(parent, args = { email }, ctx, info) {
    argsValidation(args);
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
  },
  async resetPassword(
    parent,
    args = { password, repeatedPassword, resetToken },
    ctx,
    info
  ) {
    argsValidation(args);
    if (password !== repeatedPassword) {
      throw new Error("Podane hasła nie są identyczne.");
    }
    if (!isPasswordValid(password)) {
      throw new Error(
        "Podane hasło nie spełnia minimalnych wymagań złożoności."
      );
    }
    const [user] = await ctx.db.query.users({
      where: { resetToken, resetTokenExpiry_gte: Date.now() - 3600000 }
    });
    if (!user) {
      throw new Error(
        "Ten link do resetowania hasła wygasł lub jest nieprawidłowy."
      );
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { id: user.id },
      data: {
        password: encryptedPassword,
        resetToken: null,
        resetTokenExpiry: null
      }
    });
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });
    return updatedUser;
  }
};

export default Mutation;
