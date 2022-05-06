import { list, nonNull, nullable, queryField } from "nexus";
import { OrganizationWhereUniqueInput } from "../inputs/index";
import { Organization } from "../models";

export const getOrganization = queryField("getOrganization", {
  type: nullable(Organization),
  args: {
    where: nonNull(OrganizationWhereUniqueInput),
  },
  resolve: async (_root, _args, _ctx) => {
    return null;
    // return ctx.prisma.organization.findUnique({
    //   where: {
    //     id: args.where.id,
    //   },
    // });
  },
});

export const getOrganizations = queryField("getOrganizations", {
  type: nullable(list(nonNull(Organization))),
  resolve: async (_root, _args, _ctx) => {
    return null;
    // return ctx.prisma.organization.findMany({});
  },
});
