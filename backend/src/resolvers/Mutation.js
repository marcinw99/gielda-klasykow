import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { randomBytes } from "crypto";
import { promisify } from "util";

import { isPasswordValid, areArgumentsLengthsInRange } from "../dataValidation";
import messageCodes from "../messageCodes";

function throwError(code, args) {
  throw new Error(JSON.stringify({ code, args }));
}

function argsValidation(args) {
  if (!areArgumentsLengthsInRange(args)) {
    throwError(messageCodes.argumentsLengthsNotInRange);
  }
}

function newPasswordValidation(password, repeatedPassword) {
  if (!isPasswordValid(password)) {
    throwError(messageCodes.invalidPassword);
  }
  if (password !== repeatedPassword) {
    throwError(messageCodes.passwordsNotIdentical);
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
  createPost: async function(parent, { data }, context, info) {
    const item = await context.db.mutation.createPost({ data }, info);
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
      throwError(messageCodes.userWithGivenEmailNotFound, [args.email]);
    }
    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) {
      throwError(messageCodes.passwordNotCorrect);
    }
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    context.response.cookie("token", token, userCookieParameters);
    return user;
  },

  signOut(parent, args, context, info) {
    context.response.clearCookie("token");
    return { code: 700 };
  },

  async requestPasswordReset(parent, args, context, info) {
    argsValidation(args);
    const user = await context.db.query.user({ where: { email: args.email } });
    if (!user) {
      throwError(messageCodes.userWithGivenEmailNotFound, [args.email]);
    }
    const randomBytesPromiseified = promisify(randomBytes);
    const resetToken = (await randomBytesPromiseified(20)).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000;
    await context.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    });
    return {
      code: messageCodes.emailWithResetLinkSent
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
      throwError(messageCodes.resetLinkExpiredOrInvalid);
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
