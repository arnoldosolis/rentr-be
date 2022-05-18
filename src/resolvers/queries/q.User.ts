import { ApolloError } from "apollo-server-core";
import { list, nonNull, nullable, queryField } from "nexus";
import { UserWhereUniqueInput, UserWhereUniqueInputEmail } from "../inputs/index";
import { User } from "../models";

export const getUser = queryField("getUser", {
  type: nullable(User),
  args: {
    where: nonNull(UserWhereUniqueInput),
  },
  resolve: async (_root, args, ctx) => {
    return ctx.prisma.user.findUnique({
      where: {
        id: args.where.id,
      },
    });
  },
});
export const getUsers = queryField("getUsers", {
  type: nonNull(list(nullable(User))),
  resolve: async (_root, _args, ctx) => {
    return ctx.prisma.user.findMany({});
  },
});

export const getSelfHelper = async ({ prisma, req }: { prisma: any; req: any }) => {
  // if not logged in
  if (!req.session.user_id) {
    return null;
  }
  const user = await prisma.user.findUnique({
    where: {
      id: req.session.user_id,
    },
  });
  console.log(req.session);
  return user;
};

export const getSelf = queryField("getSelf", {
  type: nullable(User),
  resolve: async (_root, _args, { prisma, req }) => {
    return await getSelfHelper({ prisma, req });
  },
});

export const getUserByEmail = queryField("getUserByEmail", {
  type: nullable(User),
  args: { user: nonNull(UserWhereUniqueInputEmail) },
  resolve: async (_root, args, ctx) => {
    if (!args.user.email) {
      throw new ApolloError("Email not passed in");
    }
    return await ctx.prisma.user.findUnique({
      where: {
        email: args.user.email,
      },
    });
  },
});
