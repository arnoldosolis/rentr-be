import { ROLE } from "@prisma/client";
import { enumType, inputObjectType } from "nexus";

export const UserWhereUniqueInput = inputObjectType({
  name: "UserWhereUniqueInput",
  definition(t) {
    t.nonNull.id("id");
  },
});

const Role = enumType({
  name: "Role",
  members: [...Object.values(ROLE)],
  description: "The first Star Wars episodes released",
});

export const CreateUserInput = inputObjectType({
  name: "CreateUserInput",
  definition(t) {
    t.nullable.string("first_name");
    t.string("last_name");
    t.string("email");
    t.string("password");
    t.field("role", { type: Role });
    t.string("tenant_current_property_id");
    t.string("organization_id");
  },
});
