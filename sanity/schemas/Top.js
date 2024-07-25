import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'top',
  title: 'Top',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        type: 'string',
        title: 'Title',
      }),
    defineField({
      name: 'casestudies',
      title: 'Case Studies',
      type: 'array',
      of: [{
        type: 'object',
        title: 'Case Studies',
        fields: [
          {
            name: 'image',
            type: 'image',
            title: 'image',
          },
          {
            name: 'heading',
            type: 'string',
            title: 'Card Heading',
          },
          {
            name: 'casestudynumber',
            type: 'string',
            title: 'Case Study Number',
          },
          {
            name: 'description',
            type: 'string',
            title: 'Description',
          }
        ]
      }]
    }),
    defineField({
        name: 'diplomaticdiaries',
        title: 'Diplomatic Diaries',
        type: 'array',
        of: [{
          type: 'object',
          title: 'Diplomatic Diaries',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'image',
            },
            {
              name: 'diarynumber',
              type: 'string',
              title: 'Diary Number',
            },
            {
              name: 'header',
              type: 'string',
              title: 'Header',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Description',
            }
          ]
        }]
      }),
    defineField({
        name: 'blogs',
        title: 'Blogs',
        type: 'array',
        of: [{
          type: 'object',
          title: 'Blogs',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'image',
            },
            {
              name: 'tag',
              type: 'string',
              title: 'Tag',
            },
            {
              name: 'header',
              type: 'string',
              title: 'Header',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Description',
            }
          ]
        }]
      }),
    defineField({
        name: 'quiz',
        title: 'Quiz',
        type: 'array',
        of: [{
          type: 'object',
          title: 'Quiz',
          fields: [
            {
              name: 'question',
              type: 'string',
              title: 'Question',
            },
            {
                name: 'option1',
                type: 'string',
                title: 'Option 1',
              },
              {
                name: 'option2',
                type: 'string',
                title: 'Option 2',
              },
              {
                name: 'option3',
                type: 'string',
                title: 'Option 3',
              },
              {
                name: 'option4',
                type: 'string',
                title: 'Option 4',
              },
            {
              name: 'correctAns',
              type: 'string',
              title: 'Correct Answer',
            }
          ]
        }]
      }),
  ],
})