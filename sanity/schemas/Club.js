import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'socialClub',
  title: 'Social Club',
  type: 'document',
  preview: {
    prepare: () => ({ title: "Social club page" })
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'paragraph',
      type: 'text',
      title: 'Paragraph',
    }),
    defineField({
      name: 'paragraph2',
      type: 'text',
      title: 'Paragraph 2',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
  ],
})
