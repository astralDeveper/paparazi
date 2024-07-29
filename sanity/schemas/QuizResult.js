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
      hidden: true,
    }),
    defineField({
      name: "hasTakenCorporateQuiz",
      type: "boolean",
      title: "Has Taken Corporate Quiz",
      hidden: true,
      initialValue: false,
    }),
    defineField({
      name: "hasTakenCulturalQuiz",
      type: "boolean",
      title: "Has Taken Cultural Quiz",
      hidden: true,
      initialValue: false,
    }),
    defineField({
      name: "corporateQuizScore",
      type: "number",
      title: "Corporate Power Play Quiz Score",
      readOnly: true,
      hidden: ({ parent }) => !parent.hasTakenCorporateQuiz,
    }),
    defineField({
      name: "culturalQuizScore",
      type: "number",
      title: "Cultural Sensitivity Quiz Score",
      readOnly: true,
      hidden: ({ parent }) => !parent.hasTakenCulturalQuiz,
    }),
  ],
});
