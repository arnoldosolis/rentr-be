import { mutationField, nullable } from "nexus";
import { User } from "../models";

export const createUser = mutationField("createUser", {
  type: nullable(User),
  args: {},
  resolve: async (_root, _args, _ctx) => {
    return null;
    // return ctx.prisma.user.create({
    //   data: {
    //     ...args.input,
    //   },
    // });
  },
});

export const deleteUser = mutationField("deleteUser", {
  type: nullable(User),
  resolve: async (_root, _args, _ctx) => {
    return null;
  },
});
