import { defineField, defineType } from "sanity";

export default defineType({
  name: "navbar",
  title: "Navbar",
  type: "document",
  preview: {
    prepare: () => ({
      title: "Navbar",
    })
  },
  fields: [
    defineField({
      name: 'socialMediaLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'instagramLink',
          type: 'url',
          title: 'Instagram Link',
        },
        {
          name: 'tiktokLink',
          type: 'url',
          title: 'Tiktok Link',
        },
        {
          name: 'linkedinLink',
          type: 'url',
          title: 'Linkedin Link',
        },
        {
          name: 'whatsappLink',
          type: 'url',
          title: 'Whatsapp Link',
        },
        {
          name: 'whatsappCommunityLink',
          type: 'url',
          title: 'Whatsapp community Link',
        },
        {
          name: 'phone',
          type: 'string',
          title: 'Phone'
        }
      ]
    }),
  ]
});
