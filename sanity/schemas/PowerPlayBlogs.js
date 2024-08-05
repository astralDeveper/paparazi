import { defineField, defineType } from "sanity";

export default defineType({
  name: "powerplayBlogs",
  title: "Powerplay Blogs",
  type: "document",
  preview: {
    prepare: () => ({ title: "Power play blogs page" })
  },
  fields: [
    defineField({
      name: "pageHeading",
      title: "Page heading",
      type: "string",
    }),
    defineField({
      name: "paragraph",
      title: "Paragraph",
      type: "string",
    }),

    defineField({
      name: "blogs",
      title: "Blogs",
      type: "array",
      of: [
        {
          type: "object",
          title: "Blog",
          fields: [
            {
              name: "image",
              type: "image",
              title: "image",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "excerpt",
              title: "Excerpt",
              type: "string",
            },
            {
              name: "category",
              title: "Category",
              type: "string",
            },
            {
              name: "DetailsTopHeading",
              title: "Details Top Heading",
              type: "string",
            },
            {
              name: "DetailsTopPara",
              title: "Details Top Para",
              type: "string",
            },
            
            {
              name: "DetailsMainHeading",
              title: "Details Main Heading",
              type: "string",
            },
            
            {
              name: "DetailsMainPara1",
              title: "Details Main Para1",
              type: "array",
              of: [{ type: "block" }],
            },
            
            {
              name: "DetailsMainPara2",
              title: "Details Main Para2",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
    }),
  ],
});