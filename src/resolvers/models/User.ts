import { objectType } from "nexus";
// import { Organization } from "./Organization";

export const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.string("email");
    t.string("role");
    // t.string("first_name");
    // t.string("last_name");
    // t.nonNull.list.nonNull.field("owned_properties", {
    //   type: Organization,
    //   description: "Returns all owned property by landlord through organization",
    //   resolve: async (_root, _args, _ctx) => {
    //     return [];
    //     return ctx.prisma.user
    //       .findUnique({
    //         where: {
    //           id: root.id,
    //         },
    //         rejectOnNotFound: true,
    //       })
    //       .organization()
    //       .properties();
    //   },
    // });
  },
});
