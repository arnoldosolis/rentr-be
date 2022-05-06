import { inputObjectType } from "nexus";

export const OrganizationWhereUniqueInput = inputObjectType({
  name: "OrganizationWhereUniqueInput",
  definition(t) {
    t.nonNull.id("id");
  },
});
