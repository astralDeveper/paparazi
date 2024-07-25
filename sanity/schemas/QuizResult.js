import { defineField, defineType } from "sanity";

export default defineType({
  name: "quizResult",
  title: "Quiz Result",
  type: "document",
  fields: [
    defineField({
      name: "username",
      type: "string",
      title: "User Name",
      readOnly: true,
    }),
    defineField({
      name: "email",
      type: "string",
      title: "User email",
      readOnly: true,
    }),
    defineField({
      name: "userId",
      type: "string",
      title: "User id",
      readOnly: true,
    }),
    defineField({
      name: "score",
      type: "number",
      title: "User score",
      readOnly: true,
    }),
  ],
});
