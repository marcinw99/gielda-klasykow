import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { randomBytes } from "crypto";
import { promisify } from "util";

import {
  isPasswordValid,
  areArgumentsLengthsInRange,
  formValueIsIncorrect
} from "../dataValidation";
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

const getUserCookieParameters = ({ longTimeCookies }) =>
  longTimeCookies
    ? { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 }
    : { httpOnly: true, expires: new Date(Date.now() + 1000) };

const Mutation = {
  createPost: async function(parent, { data }, context, info) {
    if (!context.request.userId) throwError(608);
    const { car, ...otherPostAttributes } = data;
    const validationInput = { ...car.create, ...otherPostAttributes };
    for (const key in validationInput) {
      const invalid = formValueIsIncorrect({
        name: key,
        value: validationInput[key]
      });
      if (invalid !== false) {
        throwError(invalid);
      }
    }
    // connect Post to User
    const item = await context.db.mutation.createPost(
      {
        data: {
          ...data,
          user: {
            connect: { id: context.request.userId }
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
    // exclude repeated password from submit data
    const { repeatedPassword, ...otherArgs } = args;
    const data = {
      ...otherArgs,
      password: encryptedPassword,
      permissions: { set: ["USER"] }
    };
    const user = await context.db.mutation.createUser({ data }, info);
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    context.response.cookie(
      "token",
      token,
      getUserCookieParameters({ longTimeCookies: true })
    );
    return user;
  },

  async signIn(parent, args, context, info) {
    console.log(args);
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
    context.response.cookie(
      "token",
      token,
      getUserCookieParameters({ longTimeCookies: args.rememberMe })
    );
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
    context.response.cookie(
      "token",
      token,
      getUserCookieParameters({ longTimeCookies: true })
    );
    return updatedUser;
  }
};

export default Mutation;
