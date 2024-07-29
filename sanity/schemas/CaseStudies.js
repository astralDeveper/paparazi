import { defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudies",
  title: "Case Studies",
  type: "document",
  preview: {
    prepare: () => ({ title: "Case studies page" })
  },
  fields: [
    defineField({
      name: 'pageHeading',
      title: 'Page heading',
      type: 'string'
    }),
    defineField({
      name: 'paragraph',
      title: 'Paragraph',
      type: 'string'
    }),
    defineField({
      name: "studies",
      title: "Studies",
      type: "array",
      of: [
        {
          type: "object",
          title: "Case Study",
          fields: [
            {
              name: "image",
              type: "image",
              title: "image",
            },
            {
              name: "subHeading",
              type: "string",
              title: "Sub heading",
            },
            {
              name: "heading",
              type: "string",
              title: "Heading",
            },
            {
              name: "description",
              type: "string",
              title: "Description",
            },
          ],
        },
      ],
    }),
  ],
});
