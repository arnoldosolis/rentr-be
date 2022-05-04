import { objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.string("first_name");
    t.string("last_name");
  },
});

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
  },
});

// Property
export const Property = objectType({
  name: "Property",
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
  },
});
