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
          ],
        },
      ],
    }),
  ],
});
