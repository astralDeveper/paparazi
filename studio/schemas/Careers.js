import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'Careers',
  title: 'Careers',
  type: 'document',
  fields: [
    defineField({
      name: 'title1',
      type: 'string',
      title: 'Section 1 Title',
    }),
    defineField({
      name: 'paragraph1',
      type: 'string',
      title: 'Section 1 Paragraph',
    }),
    defineField({
      name: 'image1',
      type: 'image',
      title: 'Section 1 Image',
    }),

    defineField({
      name: 'title2',
      type: 'string',
      title: 'Section 2 Title',
    }),
    defineField({
      name: 'paragraph2',
      type: 'string',
      title: 'Section 2 Paragraph',
    }),
    defineField({
        name: 'image2',
        type: 'image',
        title: 'Section 2 Image',
    }),
    defineField({
      name: 'heading1',
      type: 'string',
      title: 'Section 2 card 1',
    }),
    defineField({
      name: 'cardPara1',
      type: 'string',
      title: 'Section 2 paragraph 1',
    }),
    defineField({
      name: 'heading2',
      type: 'string',
      title: 'Section 2 card 2',
    }),
    defineField({
        name: 'cardPara2',
        type: 'string',
        title: 'Section 2 paragraph 2',
    }),
    defineField({
        name: 'miniTitle3',
        type: 'string',
        title: 'Section 3 mini Title',
    }),
    defineField({
        name: 'title3',
        type: 'string',
        title: 'Section 3 Title',
    }),
    defineField({
        name: 'paragraph3',
        type: 'string',
        title: 'Section 3 Paragraph',
    }),
    defineField({
        name: 'image3',
        type: 'image',
        title: 'Section 3 Image',
    }),
    defineField({
        name: 'positionCard',
        title: 'Positions Card',
        type: 'array',
        of: [{
            title: 'Address',
            name: 'address',
          type: 'object',
          fields: [
            
            {
              name: 'name',
              type: 'string',
              title: 'Name',
            },
            {
              name: 'location',
              type: 'string',
              title: 'Location',
            },
            {
              name: 'time',
              type: 'string',
              title: 'Time',
            },
            {
              name: 'vacancy',
              type: 'string',
              title: 'Vacancy',
            },
            {
              name: 'deadline',
              type: 'date',
              title: 'Deadline',
            },
          ]
        }]
      }),


  ],
})
