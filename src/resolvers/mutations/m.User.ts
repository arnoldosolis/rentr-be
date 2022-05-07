import { ROLE } from "@prisma/client";
import { mutationField, nonNull, nullable } from "nexus";
import { CreateUserInput, UserWhereUniqueInput } from "../inputs";
import { User } from "../models";

export const createUser = mutationField("createUser", {
  type: nullable(User),
  args: { user: nonNull(CreateUserInput) },
  resolve: async (_root, args, ctx) => {
    return ctx.prisma.user.create({
      data: {
        first_name: args.user?.first_name || "",
        last_name: args.user?.last_name || "",
        email: args.user?.email || "",
        password: args.user?.password || "",
        role: args.user?.role || ROLE.Tenant,
        tenant_current_property_id: args.user?.tenant_current_property_id || "",
        organization_id: args.user?.organization_id || "",
      },
    });
  },
});

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
  type: nullable(User),
  args: { user: nonNull(UserWhereUniqueInput) },
  resolve: async (_root, args, ctx) => {
    return ctx.prisma.user.delete({
      where: {
        id: args.user?.id,
      },
    });
  },
});
