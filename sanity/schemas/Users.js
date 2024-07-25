import { defineField, defineType } from "sanity";

export default defineType({
  name: "users",
  title: "Users",
  type: "document",
  fields: [
    defineField({
      name: "username",
      type: "string",
      title: "Name",
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
    }),
  ],
});
