// import { ROLE } from "@prisma/client";
import { mutationField, nonNull, nullable, stringArg } from "nexus";
import { CreateUserInput, CreateUserLogin, UserWhereUniqueInput } from "../inputs";
import { User } from "../models";
import argon2 from "argon2";
import { ApolloError } from "apollo-server-core";
import { sendEmail } from "../../services/sendEmail";
import { v4 } from "uuid";
import { FORGOT_PASSWORD_PREFIX } from "../../variables";
import { CreateOrganizationInput } from "../inputs/i.Organization";

// export const createUser = mutationField("createUser", {
//   type: nullable(User),
//   args: { user: nonNull(CreateUserInput) },
//   resolve: async (_root, args, ctx) => {
//     return ctx.prisma.user.create({
//       data: {
//         first_name: args.user?.first_name || "",
//         last_name: args.user?.last_name || "",
//         email: args.user?.email || "",
//         password: args.user?.password || "",
//         // role: args.user?.role || ROLE.Tenant,
//         tenant_current_property_id: args.user?.tenant_current_property_id || "",
//         organization_id: args.user?.organization_id || "",
//       },
//     });
//   },
// });

export const updateUser = mutationField("updateUser", {
  type: nullable(User),
  args: { user: nonNull(CreateUserInput), user_id: nonNull(UserWhereUniqueInput) },
  resolve: async (_root, args, ctx) => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        id: args.user_id.id,
      },
    });
    // TODO - Update logic goes here
    const updated_user = await ctx.prisma.user.update({
      where: {
        id: args.user_id.id,
      },
      data: {
        ...user,
      },
    });
    return updated_user;
  },
});

export const deleteUser = mutationField("deleteUser", {
  type: User,
  args: { user: nonNull(UserWhereUniqueInput) },
  resolve: async (_root, args, ctx) => {
    return ctx.prisma.user.delete({
      where: {
        id: args.user?.id,
      },
    });
  },
});

export const register = mutationField("register", {
  type: User,
  args: { user: nonNull(CreateUserInput), initial_org: nonNull(CreateOrganizationInput) },
  resolve: async (_root, args, { prisma, req }) => {
    if (!args.user.email) {
      throw new ApolloError("No email passed in");
    }
    if (!args.user.email.length) {
      throw new ApolloError("Must include an email");
    }
    if (!args.user.password) {
      throw new ApolloError("No password passed in");
    }
    if (args.user.password.length <= 2) {
      throw new ApolloError("Password must be greater than 2 characters");
    }
    try {
      const hashedPassword = await argon2.hash(args.user.password);
      const newUser = await prisma.user.create({
        data: {
          email: args.user.email || "",
          password: hashedPassword || "N/A",
          first_name: "",
          last_name: "",
          role: args.user.role,
          organizations: {
            create: {
              name: "N/A",
              email: "",
              address: "",
              address_2: "",
              city: "",
              state: "",
              zip: "",
              country: "",
              primary_phone_number: "",
            },
          },
        },
      });
      (req.session as any).user_id = newUser.id;
      return newUser;
    } catch (err) {
      console.log(`Error: ${err}`);
      throw new ApolloError(`${err}`);
    }
  },
});

export const login = mutationField("login", {
  type: User,
  args: { user: nonNull(CreateUserLogin) },
  resolve: async (_root, args, { prisma, req }) => {
    if (!args.user.email) {
      throw new ApolloError("Email not passed in");
    }
    const userExists = await prisma.user.findUnique({
      where: {
        email: args.user?.email,
      },
    });
    if (!userExists) {
      throw new ApolloError("User does not exist or you did not enter correct email");
    }
    if (!args.user.password) {
      throw new ApolloError("Password not passed in");
    }
    const valid = await argon2.verify(userExists.password, args.user.password);
    if (!valid) {
      throw new ApolloError("Incorrect password");
    }
    (req.session as any).user_id = userExists.id;
    return userExists;
  },
});

export const logout = mutationField("logout", {
  type: "Boolean",
  resolve: async (_root, _args, { req, res }) => {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie("qid");
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }
        resolve(true);
      }),
    );
  },
});

export const forgotPassword = mutationField("forgotPassword", {
  type: "Boolean",
  args: { email: stringArg() },
  resolve: async (_root, args, { prisma, redis }) => {
    if (!args.email) {
      throw new ApolloError("No email passed in");
    }
    const user = await prisma.user.findUnique({
      where: {
        email: args.email,
      },
    });
    if (!user) {
      // throw error here however
      throw new ApolloError("Email does not exist");
    }

    const token = v4();
    try {
      await redis.set(FORGOT_PASSWORD_PREFIX + token, user.id, "EX", 1000 * 60 * 60 * 24 * 3); // 3 days
      await sendEmail(args.email, `<a href=http://localhost:3000/reset-password/${token}>reset password</a>`);
      return true;
    } catch (err) {
      console.log(redis);
      console.log(err);
      throw new ApolloError(`forgotPassword: ${err}`);
    }
  },
});

export const changePassword = mutationField("changePassword", {
  type: User,
  args: { token: stringArg(), password: stringArg() },
  resolve: async (_root, args, { redis, prisma, req }) => {
    const key = FORGOT_PASSWORD_PREFIX + args.token;
    const user_id = await redis.get(key);
    if (!user_id) {
      throw new ApolloError("Token expired");
    }
    const user = await prisma.user.findUnique({
      where: {
        id: user_id,
      },
    });
    if (!user) {
      throw new ApolloError("User does not exist");
    }
    if (!args.password) {
      throw new ApolloError("No password passed in");
    }
    const hashedPassword = await argon2.hash(args.password);
    const res = await prisma.user.update({
      where: {
        id: user_id,
      },
      data: {
        password: hashedPassword,
      },
    });

    await redis.del(key);

    // log user in after change password
    (req.session as any).user_id = user.id;
    console.log(res);
    return res;
  },
});
