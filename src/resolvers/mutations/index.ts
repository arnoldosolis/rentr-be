import { mutationField, nullable } from "nexus";
import { Organization, Property, User } from "../models";

export const createUser = mutationField("createUser", {
  type: nullable(User),
  resolve: async (root, args, ctx) => {
    return null;
  },
});

export const deleteUser = mutationField("deleteUser", {
  type: nullable(User),
  resolve: async (root, args, ctx) => {
    return null;
  },
});

export const createOrganization = mutationField("createOrganization", {
  type: nullable(Organization),
  resolve: async (root, args, ctx) => {
    return null;
  },
});

export const deleteOrganization = mutationField("deleteOrganization", {
  type: nullable(User),
  resolve: async (root, args, ctx) => {
    return null;
  },
});

export const createProperty = mutationField("createProperty", {
  type: nullable(Property),
  resolve: async (root, args, ctx) => {
    return null;
  },
});

export const deleteProperty = mutationField("deleteProperty", {
  type: nullable(User),
  resolve: async (root, args, ctx) => {
    return null;
  },
});
