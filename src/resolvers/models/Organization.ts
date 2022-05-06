import { objectType } from "nexus";
import { Property } from "./Property";

export const Organization = objectType({
  name: "Organization",
  definition(t) {
    t.id("id");
    t.string("name");
    t.string("address");
    t.string("address_2");
    t.string("city");
    t.string("state");
    t.string("zip");
    t.string("country");
    t.string("primary_phone_number");
    t.nonNull.list.nonNull.field("owned_properties", {
      type: Property,
      description: "Returns all owned property by landlord through organization",
      resolve: async (_root, _args, _ctx) => {
        return [];
        // return ctx.prisma.organization
        //   .findUnique({
        //     where: {
        //       id: root.id,
        //     },
        //     rejectOnNotFound: true,
        //   })
        //   .properties();
      },
    });
  },
});
