import { defineField, defineType } from "sanity";

export default defineType({
  name: "Footer",
  title: "Footer",
  type: "document",
  preview: {
    prepare: () => ({ title: "Footer" })
  },
  fields: [
    defineField({
      name: 'comapanyInfo',
      title: 'Comopany info',
      type: 'array',
      of: [{
        type: 'object',
        title: 'Comopany info',
        fields: [
          {
            name: 'label',
            type: 'string',
            title: 'label',
          },
          {
            name: 'route',
            type: 'string',
            title: 'Route',
          },
        ]
      }]
    }),
    defineField({
      name: 'legal',
      title: 'Legal',
      type: 'array',
      of: [{
        type: 'object',
        title: 'Legal',
        fields: [
          {
            name: 'label',
            type: 'string',
            title: 'label',
          },
          {
            name: 'url',
            type: 'string',
            title: 'Url',
          },
        ]
      }]
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{
        type: 'object',
        title: 'Features',
        fields: [
          {
            name: 'label',
            type: 'string',
            title: 'label',
          },
          {
            name: 'url',
            type: 'string',
            title: 'Url',
          },
        ]
      }]
    }),
    defineField({
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [{
        type: 'object',
        title: 'Resources',
        fields: [
          {
            name: 'label',
            type: 'string',
            title: 'Label',
          },
          {
            name: 'url',
            type: 'string',
            title: 'Url',
          },
        ]
      }]
    }),
    defineField({
      name: 'btnLine',
      title: 'Button Line',
      type: 'string',

    }),
    defineField({
      name: 'copyRight',
      title: 'Footer bottom line',
      type: 'string',
    })
  ]
})



