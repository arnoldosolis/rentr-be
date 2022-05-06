import { inputObjectType } from "nexus";

export const UserWhereUniqueInput = inputObjectType({
  name: "UserWhereUniqueInput",
  definition(t) {
    t.nonNull.id("id");
  },
});

export const CreateUserInput = inputObjectType({
  name: "CreateUserInput",
  definition(t) {
    t.nonNull.string("first_name");
    t.nonNull.string("last_name");
    t.nonNull.string("email");
    t.nonNull.string("password");
    t.nonNull.string("tenant_current_property_id");
    t.nonNull.string("organization_id");
  },
});
