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

function newPasswordValidation(password, repeatedPassword) {
  if (!isPasswordValid(password)) {
    throw new Error("Podane hasło nie spełnia minimalnych wymagań złożoności.");
  }
  if (password !== repeatedPassword) {
    throw new Error("Podane hasła nie są identyczne.");
  }
}

async function getEncryptedPassword(password) {
  return await bcrypt.hash(password, 10);
}

const userCookieParameters = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24 * 365
};

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
    argsValidation(args);
    newPasswordValidation(args.password, args.repeatedPassword);
    const encryptedPassword = await getEncryptedPassword(args.password);
    const user = await context.db.mutation.createUser(
      {
        data: {
          ...args,
          password: encryptedPassword,
          permissions: { set: ["USER"] }
        }
      },
      info
    );
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    context.response.cookie("token", token, userCookieParameters);
    return user;
  },

  async signIn(parent, args, context, info) {
    argsValidation(args);
    const user = await context.db.query.user({ where: { email: args.email } });
    if (!user) {
      throw new Error(`Nie znaleziono użytkownika z emailem ${args.email}`);
    }
    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) {
      throw new Error(`Podane hasło jest nieprawidłowe`);
    }
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    context.response.cookie("token", token, userCookieParameters);
    return user;
  },

  signOut(parent, args, context, info) {
    context.response.clearCookie("token");
    return { message: "Goodbye" };
  },

  async requestPasswordReset(parent, args, context, info) {
    argsValidation(args);
    const user = await context.db.query.user({ where: { email: args.email } });
    if (!user) {
      throw new Error(
        `Nie znaleziono użytkownika z adresem email '${args.email}'.`
      );
    }
    const randomBytesPromiseified = promisify(randomBytes);
    const resetToken = (await randomBytesPromiseified(20)).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000;
    await context.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    });
    return {
      message: "Link do resetowania hasła został wysłany na podany adres email."
    };
  },

  async resetPassword(
    parent,
    args = { password, repeatedPassword, resetToken },
    context,
    info
  ) {
    argsValidation(args);
    newPasswordValidation({ password, repeatedPassword });
    const [user] = await context.db.query.users({
      where: { resetToken, resetTokenExpiry_gte: Date.now() - 3600000 }
    });
    if (!user) {
      throw new Error(
        "Ten link do resetowania hasła wygasł lub jest nieprawidłowy."
      );
    }
    const encryptedPassword = await getEncryptedPassword(password);
    const updatedUser = await context.db.mutation.updateUser({
      where: { id: user.id },
      data: {
        password: encryptedPassword,
        resetToken: null,
        resetTokenExpiry: null
      }
    });
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);
    context.response.cookie("token", token, userCookieParameters);
    return updatedUser;
  }
};

export default Mutation;
