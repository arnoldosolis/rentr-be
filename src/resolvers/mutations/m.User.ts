// import { ROLE } from "@prisma/client";
import { mutationField, nonNull, nullable } from "nexus";
import { CreateUserInput, CreateUserInputTemp, UserWhereUniqueInput } from "../inputs";
import { User } from "../models";
import argon2 from "argon2";
import { ApolloError } from "apollo-server-core";

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
  args: { user: nonNull(CreateUserInputTemp) },
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
          // first_name: args.user?.first_name || "N/A",
          // last_name: args.user?.last_name || "N/A",
          email: args.user.email || "",
          password: hashedPassword || "N/A",
          // role: args.user?.role || ROLE.Tenant,
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
  args: { user: nonNull(CreateUserInputTemp) },
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
