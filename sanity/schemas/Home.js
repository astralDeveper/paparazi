import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "Home",
  title: "Home",
  type: "document",
  preview: {
    prepare: () => ({ title: "Home page" }),
  },
  fields: [
    defineField({
    name: "header",
    type: "string",
    title: "Header",
  }),
    defineField({
      name: "headerpara",
      type: "string",
      title: "Header Paragrapgh",
    }), 
    defineField({
      name: "subheaderpara",
      type: "string",
      title: "Sub Header Paragrapgh",
    }),
     defineField({
      name: "subheaderline",
      type: "string",
      title: "Sub Header Line",
    }),
    defineField({
      name: "subheader2",
      type: "string",
      title: "sub Header Paragraph2",
    }),

//  cards

    defineField({
      name: "sec1",
      title: "Section1",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          title: "Card",
          fields: [
            defineField({
              name: "cardheading",
              type: "string",
              title: "Card Heading",
            }),
            defineField({
              name: "cardparagraph",
              type: "array",
              title: "Card Paragraph",
              of: [defineArrayMember({ type: "block" })],
            }),
          ],
        }),
      ],
    }),


    defineField({
      name : "lastheading",
      type : "string",
      title : "Last Heading"
    }) ,defineField({
      name : "lastpara",
      type : "string",
      title : "Last Paragraph"
    }) ,defineField({
      name : "lastparaline",
      type : "string",
      title : "Last Paragraph Line"
    })

  ]
});
