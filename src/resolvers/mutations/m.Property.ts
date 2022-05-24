import { ApolloError } from "apollo-server-core";
import { mutationField } from "nexus";
import { Property } from "../models";

// export const createProperty = mutationField("createProperty", {
//   type: nullable(Property),
//   resolve: async (_root, _args, _ctx) => {
//     return null;
//   },
// });

// export const deleteProperty = mutationField("deleteProperty", {
//   type: nullable(User),
//   resolve: async (_root, _args, _ctx) => {
//     return null;
//   },
// });
export const createProperty = mutationField("createProperty", {
  type: Property,
  resolve: async (_root, _args, { prisma, req }) => {
    // is user authenticated
    if (!(req.session as any).user_id) {
      throw new ApolloError("Not Authenticated");
    }
    const property = prisma.property.create({
      data: {
        name: "",
        address: "",
        address_2: "",
        city: "",
        zip: "",
        state: "",
        country: "",
        primary_phone_number: "",
      },
    });

    return property;
  },
});
