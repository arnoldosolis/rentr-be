import { list, nonNull, nullable, queryField } from "nexus";
import { UserWhereUniqueInput } from "../inputs/index";
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
