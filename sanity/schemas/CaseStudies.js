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
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string'
    }),
    defineField({
      name: 'paragraph',
      title: 'Paragraph',
      type: 'string'
    }),
    defineField({
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [
        {
          type: "object",
          title: "Case Study",
          fields: [
            {
              name: "heading",
              type: "string",
              title: "Heading",
            },
            {
              name: "description",
              title:"description",
              type: "array",
            of: [{ type: "block" }],
            },
          ],
        },
      ],
    }),
  ],
});