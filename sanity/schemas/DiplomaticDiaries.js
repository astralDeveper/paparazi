import { defineField, defineType } from "sanity";

export default defineType({
  name: "diplomaticDiaries",
  title: "Diplomatic Diaries",
  type: "document",
  preview: {
    prepare: () => ({ title: "Diplomatic diaries page" })
  },
  fields: [
    defineField({
      name: "pageHeading",
      title: "Page heading",
      type: "string",
    }),
    defineField({
      name: "paragraph",
      title: "Paragraph",
      type: "string",
    }),

    defineField({
      name: "diaries",
      title: "Diaries",
      type: "array",
      of: [
        {
          type: "object",
          title: "Diary",
          fields: [
            {
              name: "image",
              type: "image",
              title: "image",
            },
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "subHeading",
              title: "Sub heading",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
            {
              name: "subHeading2",
              title: "sub Heading2",
              type: "string",
            },
            {
              name: "Heading2",
              title: "Heading2",
              type: "string",
            },
            {
              name: "para",
              title: "para",
              type: "string",
            },
          
          {
              name: 'description2',
              title: 'description2',
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
    }),
  ],
});
