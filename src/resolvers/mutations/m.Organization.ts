import { mutationField, nullable } from "nexus";
import { Organization, User } from "../models";

export const createOrganization = mutationField("createOrganization", {
  type: nullable(Organization),
  resolve: async (_root, _args, _ctx) => {
    return null;
  },
});

export const deleteOrganization = mutationField("deleteOrganization", {
  type: nullable(User),
  resolve: async (_root, _args, _ctx) => {
    return null;
  },
});
