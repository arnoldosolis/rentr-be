import { inputObjectType } from "nexus";

export const CreatePropertyInput = inputObjectType({
  name: "CreatePropertyInput",
  definition(t) {
    t.string("name");
    t.string("address");
    t.string("address_2");
    t.string("city");
    t.string("state");
    t.string("zip");
    t.string("country");
    t.string("primary_phone_number");
  },
});
