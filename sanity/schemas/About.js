import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'About',
  title: 'About',
  type: 'document',
  preview: {
    prepare: () => ({ title: "About page" })
  },
  fields: [
    defineField({
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [
        defineArrayMember({
          type: "string",
        })
      ]
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'About Title',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'About image',
    }),
    defineField({
      name: 'Paragraph',
      type: 'string',
      title: 'Paragraph',
    }),
    defineField({
      name: 'tab1',
      title: 'Shaping Legends & Success',
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: 'tab2',
      title: 'Architects of Power',
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: 'tab3',
      title: 'Our Vision ',
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: 'tab4',
      title: 'Our Core Values',
      type: "array",
      of: [{ type: "block" }],
    }),
   
  ],
})
