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
      name: 'subheading',
      type: 'string',
      title: 'Sub Heading',
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
      title: 'About Paparazzi',
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: 'tab2',
      title: 'About Our Institutional Framework',
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: 'tab3',
      title: 'About Our History',
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: 'tab4',
      title: 'About Our Leadership and Governance',
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: 'trustee',
      title: 'Board of Trustee',
      type: 'array',
      of: [{
        type: 'image',
        title: 'Trustee',
        fields: [
          {
            name: 'name',
            type: 'string',
            title: 'Name',
          },
          {
            name: 'designation',
            type: 'string',
            title: 'Designation',
          }
        ]
      }]
    }),
    defineField({
      name: 'tab5',
      title: 'About Our Mission',
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: 'tab6',
      title: 'Policies, Terms and Codes',
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
})
