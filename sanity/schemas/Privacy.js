import { defineField, defineType } from "sanity";

export default defineType({
  name: 'privacy',
  title: 'Privacy',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading 1',
    }),
    defineField({
      name: 'headerline',
      type: 'string',
      title: 'Headerline',
    }),
    defineField({
      name: 'paragraph',
      type: "array",
      title: 'Paragraph',
      of: [{ type: "block" }],
    }),
  ]
});
