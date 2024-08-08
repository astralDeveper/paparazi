import { defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudies",
  title: "Case Studies",
  type: "document",
  preview: {
    prepare: () => ({ title: "Case studies page" })
  },
  fields: [
    defineField({
      name: 'pageHeading',
      title: 'Page heading',
      type: 'string'
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string'
    }),
    defineField({
      name: "caseStudies1",
      title:"Case Studeis 1",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: 'pageHeading2',
      title: 'Page heading2',
      type: 'string'
    }),
    defineField({
      name: 'subHeading2',
      title: 'Sub Heading2',
      type: 'string'
    }),
    defineField({
      name: "caseStudies2",
      title:"Case Studeis 2",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});