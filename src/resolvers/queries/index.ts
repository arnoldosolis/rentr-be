import { list, nonNull, nullable, queryField } from "nexus";
import { Organization } from "../models";

export const getOrganizations = queryField("getOrganizations", {
  type: nullable(list(nonNull(Organization))),
  resolve: async (root, args, ctx) => {
    return [];
  },
});

export const getOrganization = queryField("getOrganization", {
  type: nullable(Organization),
  resolve: async (root, args, ctx) => {
    return null;
  },
});
