import { inputObjectType } from "nexus";

// export const OrganizationWhereUniqueInput = inputObjectType({
//   name: "OrganizationWhereUniqueInput",
//   definition(t) {
//     t.nonNull.id("id");
//   },
// });
export const CreateOrganizationInput = inputObjectType({
  name: "CreateOrganizationInput",
  definition(t) {
    t.string("name");
    t.string("email");
    t.string("address");
    t.string("address_2");
    t.string("city");
    t.string("state");
    t.string("zip");
    t.string("country");
    t.string("primary_phone_number");
  },
});
