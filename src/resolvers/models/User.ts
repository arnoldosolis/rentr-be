import { ApolloError } from "apollo-server-core";
import { objectType } from "nexus";
import { Organization } from "./Organization";
import { Property } from "./Property";
// import { Organization } from "./Organization";

export const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.string("email");
    t.string("role");
    t.string("first_name");
    t.string("last_name");
    t.field("residence", {
      type: Property,
      description: "Returns place of residence for tenant",
      resolve: async (_root, _args, { req, prisma }) => {
        if (!(req.session as any).user_id) {
          throw new ApolloError("Not Authenticated");
        }
        const user = await prisma.user.findUnique({
          where: {
            id: req.session as any,
          },
          include: {
            residence: true,
          },
        });
        return await prisma.property.findUnique({
          where: {
            id: user?.residence?.id,
          },
        });
      },
    });
    t.field("organizations", {
      type: Organization,
      description: "Returns all organizations user is affiliated to or owns",
      resolve: async (_root, _args, { req, prisma }) => {
        if (!(req.session as any).user_id) {
          throw new ApolloError("Not Authenticated");
        }
        return await prisma.organization.findMany({
          where: {
            userId: (req.session as any).user_id,
          },
        });
      },
    });
  },
});
