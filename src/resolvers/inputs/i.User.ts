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
  description: "User Roles",
});

export const CreateUserInput = inputObjectType({
  name: "CreateUserInput",
  definition(t) {
    t.string("email");
    t.string("password");
    t.nonNull.field("role", { type: Role });
    t.string("first_name");
    t.string("last_name");
    t.nullable.string("residence");
    // t.string("tenant_current_property_id");
    // t.string("organization_id");
  },
});

export const CreateUserLogin = inputObjectType({
  name: "CreateUserLogin",
  definition(t) {
    t.string("email");
    t.string("password");
  },
});

export const UserWhereUniqueInputEmail = inputObjectType({
  name: "UserWhereUniqueInputEmail",
  definition(t) {
    t.string("email");
  },
});
