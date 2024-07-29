import { defineField, defineType } from "sanity";

export default defineType({
  name: "quiz",
  title: "Quiz",
  type: "document",
  preview: {
    prepare: () => ({ title: "Quiz page" })
  },
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "subHeading",
      title: "Sub heading",
      type: "string",
    }),
    defineField({
      name: "paragraph",
      title: "Paragraph",
      type: "string",
    }),
    defineField({
      name: "corporateQuiz",
      title: "Corporate Powerplay Quiz",
      type: "array",
      of: [
        {
          type: "object",
          title: "Quiz",
          fields: [
            defineField({
              name: "question",
              type: "string",
              title: "Question",
            }),
            defineField({
              name: "option1",
              type: "string",
              title: "Option 1",
            }),
            defineField({
              name: "option2",
              type: "string",
              title: "Option 2",
            }),
            defineField({
              name: "option3",
              type: "string",
              title: "Option 3",
            }),
            defineField({
              name: "option4",
              type: "string",
              title: "Option 4",
            }),
            defineField({
              name: "answer",
              type: "string",
              title: "Answer",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "culturalQuiz",
      title: "Cultural Sensitivity Quiz",
      type: "array",
      of: [
        {
          type: "object",
          title: "Quiz",
          fields: [
            defineField({
              name: "question",
              type: "string",
              title: "Question",
            }),
            defineField({
              name: "option1",
              type: "string",
              title: "Option 1",
            }),
            defineField({
              name: "option2",
              type: "string",
              title: "Option 2",
            }),
            defineField({
              name: "option3",
              type: "string",
              title: "Option 3",
            }),
            defineField({
              name: "option4",
              type: "string",
              title: "Option 4",
            }),
            defineField({
              name: "answer",
              type: "string",
              title: "Answer",
            }),
          ],
        },
      ],
    }),
  ],
});
