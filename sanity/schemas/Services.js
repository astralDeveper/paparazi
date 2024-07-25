import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'Services',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Services Title',
    }),
    defineField({
      name: 'paragraph',
      type: 'string',
      title: 'Paragraph',
    }),
    defineField({
      name: 'card',
      title: 'Services Card',
      type: 'array',
      of: [{
        type: 'image',
        title: 'Card Image',
        fields: [
          {
            name: 'heading',
            type: 'string',
            title: 'Card Heading',
          },
          {
            name: 'description',
            type: 'string',
            title: 'Description',
          }
        ]
      }]
    }),
  ],
})
