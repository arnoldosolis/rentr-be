import { ApolloError } from "apollo-server-core";
import { mutationField, nonNull } from "nexus";
import { CreatePropertyInput } from "../inputs/i.Property";
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
  args: { property: nonNull(CreatePropertyInput) },
  resolve: async (_root, _args, { prisma, req }) => {
    // is user authenticated
    if (!(req.session as any).user_id) {
      throw new ApolloError("Not Authenticated");
    }
    const property = prisma.property.create({
      data: {
        name: "test",
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
