import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'Services',
  title: 'Services',
  type: 'document',
  preview: {
    prepare: () => ({ title: "Services page" })
  },
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
      name: 'subHeading',
      type: 'string',
      title: 'Sub Heading',
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
          },
          {
            name: 'fullDescription',
            type: 'string',
            title: 'Full Description',
          }
        ]
      }]
    }),
    defineField({
      name:"secondaryData",
      type:"string",
      title:"Secondary Data"
    }),
    defineField({
      name:"feedbackTitle",
      type:"string",
      title:"Feedback Title"
    }),
    defineField({
      name:"feedbackSubTitle",
      type:"string",
      title:"Feedback SubTitle"
    }),
    defineField({
      name:"feedback",
      title:"Feedback",
      type: 'array',
      of: [{
        type: 'image',
        title: 'Feedback Image',
        fields: [
          {
            name: 'feedbackDescription',
            type: 'string',
            title: 'Feedback Description',
          },
        ]
      }]
    }),
    defineField({
      name:"custactUs",
      type:"string",
      title:"Contact Us"
    }),
    defineField({
      name:"custactUs1",
      type:"string",
      title:"Contact Us Join"
    }),
    defineField({
      name:"custactUs2",
      type:"string",
      title:"Contact Us consultation"
    }),
    defineField({
      name:"book",
      title:"Book",
      type: 'array',
      of: [{
        title: 'Book Session',
        type:"object",
        fields: [
          {
            name: 'booktitle',
            type: 'string',
            title: 'Book Title',
          },
          {
            name: 'bookdescription',
            type: 'string',
            title: 'Book Description',
          },
          {
            name: 'booksubtitle',
            type: 'string',
            title: 'Book Subtitle',
          },
        ]
      }]
    }),

    
   

  ],
})
