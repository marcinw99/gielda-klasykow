import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { randomBytes } from "crypto";
import { promisify } from "util";

import smtpClient, { getMessage } from "../smtpClient";
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

function newPasswordValidation({ password, repeatedPassword }) {
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

function sendEmailWithConfirmationToken({
  email,
  name,
  emailConfirmationToken
}) {
  smtpClient.sendMail(
    getMessage({
      to: email,
      variant: "newUser",
      data: {
        name,
        confirmationLink: `https://gieldaklasykow.now.sh/potwierdzenie?token=${emailConfirmationToken}`
      }
    })
  );
}

const getUserCookieParameters = ({ longTimeCookies }) =>
  longTimeCookies
    ? {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
      }
    : { httpOnly: true, expires: new Date(Date.now() + 1000 * 60) };

const Mutation = {
  createPost: async function(parent, { data }, context, info) {
    if (!context.request.userId) throwError(messageCodes.userNotLoggedIn);
    if (!context.request.user.permissions.includes("ADD_POSTS")) {
      throwError(messageCodes.notEnoughPermissions, {
        permission: "ADD_POSTS"
      });
    }
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

  deletePost: async function(parent, args, context, info) {
    if (!context.request.userId) throwError(messageCodes.userNotLoggedIn);
    const post = await context.db.query.post(
      { where: { id: args.id } },
      "{ car { brand model } user { id } }"
    );
    if (post && post.user.id !== context.request.userId)
      throwError(messageCodes.idMismatch);
    // remove sub types
    const deletedPost = await context.db.mutation.deletePost({
      where: { id: args.id }
    });
    return { ...deletedPost, ...post };
  },

  async signUp(parent, args, context, info) {
    argsValidation(args);
    newPasswordValidation({
      password: args.password,
      repeatedPassword: args.repeatedPassword
    });
    const encryptedPassword = await getEncryptedPassword(args.password);
    const randomBytesPromiseified = promisify(randomBytes);
    const emailConfirmationToken = (await randomBytesPromiseified(20)).toString(
      "hex"
    );
    // exclude repeated password from submit data
    const { repeatedPassword, ...otherArgs } = args;
    const data = {
      ...otherArgs,
      password: encryptedPassword,
      emailConfirmed: false,
      emailConfirmationToken,
      permissions: { set: ["USER"] }
    };
    const user = await context.db.mutation.createUser({ data }, info);
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    context.response.cookie(
      "token",
      token,
      getUserCookieParameters({ longTimeCookies: true })
    );
    sendEmailWithConfirmationToken({
      email: args.email,
      name: args.name,
      emailConfirmationToken
    });
    return user;
  },

  async repeatEmailWithConfirmationToken(parent, args, context) {
    const user = await context.db.query.user({ where: { email: args.email } });
    if (user.emailConfirmed === true) {
      throwError(messageCodes.emailAlreadyConfirmed);
    }
    sendEmailWithConfirmationToken({
      email: args.email,
      name: user.name,
      emailConfirmationToken: user.emailConfirmationToken
    });
    return { code: messageCodes.emailWithResetLinkSent };
  },

  async confirmEmail(parent, args, context) {
    argsValidation(args);
    const [user] = await context.db.query.users({
      where: { emailConfirmationToken: args.emailConfirmationToken }
    });
    if (!user) {
      throwError(messageCodes.linkExpiredOrInvalidOrEmailAlreadyConfirmed);
    }
    if (user.emailConfirmed === true) {
      throwError(messageCodes.emailAlreadyConfirmed);
    }
    await context.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        emailConfirmed: true,
        emailConfirmationToken: null,
        permissions: [...user.permissions, "ADD_POSTS"]
      }
    });
    smtpClient.sendMail(
      getMessage({
        to: user.email,
        variant: "emailConfirmed",
        data: {
          name: user.name
        }
      })
    );
    return { code: messageCodes.emailConfirmedSuccessfully };
  },

  async signIn(parent, args, context, info) {
    argsValidation(args);
    const user = await context.db.query.user({ where: { email: args.email } });
    if (!user) {
      throwError(messageCodes.userWithGivenEmailNotFound, [args.email]);
    }
    if (user.emailConfirmed !== true) {
      const createdAt = Date.parse(new Date(user.createdAt));
      const now = Date.parse(new Date());
      const dayInMiliseconds = 1000 * 60 * 60 * 24;
      const timeFromRegistration = now - createdAt;
      if (timeFromRegistration > dayInMiliseconds) {
        await context.db.mutation.deleteUser({ where: { email: args.email } });
        throwError(messageCodes.accountEmailWasNotConfirmed);
      }
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
    smtpClient.sendMail(
      getMessage({
        to: args.email,
        variant: "resetPassword",
        data: {
          name: args.name,
          resetPasswordLink: `https://gieldaklasykow.now.sh/nowehaslo?token=${resetToken}`
        }
      }),
      (error, info) => {
        if (error)
          return {
            code: messageCodes.couldNotSendEmail
          };
        return {
          code: messageCodes.emailWithResetLinkSent
        };
      }
    );
    return {
      code: messageCodes.emailWithResetLinkSent
    };
  },

  async resetPassword(parent, args, context, info) {
    argsValidation(args);
    newPasswordValidation({
      password: args.password,
      repeatedPassword: args.repeatedPassword
    });
    const [user] = await context.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000
      }
    });
    if (!user) {
      throwError(messageCodes.linkExpiredOrInvalid);
    }

    const encryptedPassword = await getEncryptedPassword(args.password);
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
