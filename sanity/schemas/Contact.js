import { defineField, defineType } from "sanity";

export default defineType({
  name: 'Contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'heading1',
      type: 'string',
      title: 'Heading Main'
    }),
    defineField({
      name: 'line1',
      type: 'string',
      title: 'Heading Main Line'
    }),
    defineField({
      name: 'paragraph1',
      type: 'string',
      title: 'Main Para1'
    }),
    defineField({
      name: 'line2',
      type: 'string',
      title: 'Line2'
    }),
    defineField({
      name: 'callus',
      type: 'string',
      title: 'Call US Line'
    }),
    defineField({
      name: 'Details',
      type: 'string',
      title: 'Details Line'
    }),
    defineField({
      name: 'icons',
      title: 'Icons',
      type: 'array',
      of: [{
        type: 'object',
        title: 'Icons',
        fields: [
          {
            name: 'iconname',
            type: 'string',
            title: 'Icon Name',
          },
          {
            name: 'iconline',
            type: 'string',
            title: 'Icon Line',
          },
        ]
      }]
    }),
  ]
});
