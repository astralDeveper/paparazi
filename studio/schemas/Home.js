import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({ 
  name: 'Home',
  title: 'Home',
  type: 'document',

  fields: [
    // Banner
    defineField({
        name: 'header',
        type: 'string',
        title: 'Header Title',
      }),
      defineField({
        name: 'headercards',
        title: 'Header Card',
        type: 'array',
        of: [
          defineArrayMember({
            type: "string",
          })
        ]
      }),
      defineField({
        name: 'headerpara',
        type: 'string',
        title: 'Header Paragrapgh',
      }),
      defineField({
        name: 'button',
        type: 'string',
        title: 'Home Button',
      }),

    // Blogs

    defineField({
        name: 'sec1',
        title: 'Section1',
        type: 'array',
        of: [{
          type: 'image',
          title: 'Card',
          fields: [
            {
              name: 'cardheader',
              type: 'string',
              title: 'Card Header',
            },
            {
              name: 'cardparagraph',
              type: 'string',
              title: 'Card Paragraph',
            }
          ]
        }]
      }),

      defineField({
        name: 'sec1button',
        type: 'string',
        title: 'Section1 Button',
      }),

    //   Development
    defineField({
        name: 'sec2',
        type: 'string',
        title: 'Section2',
      }),
    defineField({
        name: 'sec2button',
        type: 'string',
        title: 'Section2 Button',
      }),
    defineField({
        name: 'sec2image',
        type: 'image',
        title: 'Section2 image',
      }),
      defineField({
        name: 'sec2title',
        type: 'string',
        title: 'Section2 Title',
      }),
    defineField({
        name: 'sec2heading',
        type: 'string',
        title: 'Section2 Heading',
      }),

      defineField({
        name: 'sec2subheading',
        type: 'string',
        title: 'Section2 SubHeading',
      }),
      defineField({
        name: 'sec2button2',
        type: 'string',
        title: 'Section2 Button2',
      }),

    //   DevCards

    defineField({
        name: 'sec3',
        title: 'Section3',
        type: 'array',
        of: [{
          type: 'image',
          title: 'Section3 Card',
          fields: [
            {
              name: 'sec3title',
              type: 'string',
              title: 'Section3 Title',
            },
            {
              name: 'sec3heading',
              type: 'string',
              title: 'Section3 Heading',
            },
            {
                name: 'sec3paragraph',
                type: 'string',
                title: 'Section3 Paragraph',
              }
          ]
        }]
      }),

    //   About Us

    defineField({
        name: 'sec4',
        type: 'string',
        title: 'Section4 Title',
      }),
      defineField({
        name: 'sec4subtitle',
        type: 'string',
        title: 'Section4 SubTitle',
      }),
    defineField({
        name: 'sec4button',
        type: 'string',
        title: 'Section4 Button',
      }),
      defineField({
        name: 'sec4image',
        type: 'image',
        title: 'Section4 image',
      }),

    //   BussinessSection

    defineField({
        name: 'sec5',
        type: 'string',
        title: 'Section5 Title',
      }),
    defineField({
        name: 'sec5button1',
        type: 'string',
        title: 'Section5 Button1',
      }),
      defineField({
        name: 'sec5button2',
        type: 'string',
        title: 'Section5 Button2',
      }),
   
    //  Column1
    defineField({
        name: 'sec5column1',
        title: 'Section5 Column1',
        type: 'array',
        of: [{
          type: 'image',
          title: 'Section5 Image',
          fields: [
            {
                name: 'sec5subtitle',
                type: 'string',
                title: 'Section5 Title',
            },
            {
              name: 'sec5title',
              type: 'string',
              title: 'Section5 SubTitle',
            },
            {
              name: 'sec5heading',
              type: 'string',
              title: 'Section5 Heading',
            },
            {
                name: 'sec5paragraph',
                type: 'string',
                title: 'Section5 Paragraph',
              }
          ]
        }]
      }),

      //  Column2
    defineField({
        name: 'sec5column2',
        title: 'Section5 Column2',
        type: 'array',
        of: [{
          type: 'image',
          title: 'Section5 Image2',
          fields: [
            {
                name: 'sec5subtitle2',
                type: 'string',
                title: 'Section5 Title2',
            },
            {
              name: 'sec5title2',
              type: 'string',
              title: 'Section5 SubTitle2',
            },
            {
              name: 'sec5heading2',
              type: 'string',
              title: 'Section5 Heading2',
            },
            {
                name: 'sec5paragraph2',
                type: 'string',
                title: 'Section5 Paragraph2',
              }
          ]
        }]
      }),

      //  row1
    defineField({
        name: 'sec5row1',
        title: 'Section5 Row1',
        type: 'array',
        of: [{
          type: 'image',
          title: 'Section5 Image2',
          fields: [
            {
                name: 'sec5subtitle3',
                type: 'string',
                title: 'Section5 Title3',
            },
            {
              name: 'sec5title3',
              type: 'string',
              title: 'Section5 SubTitle3',
            },
            {
              name: 'sec5heading3',
              type: 'string',
              title: 'Section5 Heading3',
            },
            {
                name: 'sec5paragraph3',
                type: 'string',
                title: 'Section5 Paragraph3',
              }
          ]
        }]
      }),

            //  row2
    defineField({
        name: 'sec5row2',
        title: 'Section5 Row2',
        type: 'array',
        of: [{
          type: 'image',
          title: 'Section5 Image2',
          fields: [
            {
                name: 'sec5subtitle4',
                type: 'string',
                title: 'Section5 Title4',
            },
            {
              name: 'sec5title4',
              type: 'string',
              title: 'Section5 SubTitle4',
            },
            {
              name: 'sec5heading4',
              type: 'string',
              title: 'Section5 Heading4',
            },
            {
                name: 'sec5paragraph4',
                type: 'string',
                title: 'Section5 Paragraph4',
              }
          ]
        }]
      }),

      //  row3
      defineField({
        name: 'sec5row3',
        title: 'Section5 Row3',
        type: 'array',
        of: [{
          type: 'image',
          title: 'Section5 Image2',
          fields: [
            {
                name: 'sec5subtitle5',
                type: 'string',
                title: 'Section5 Title5',
            },
            {
              name: 'sec5title5',
              type: 'string',
              title: 'Section5 SubTitle5',
            },
            {
              name: 'sec5heading5',
              type: 'string',
              title: 'Section5 Heading5',
            },
            {
                name: 'sec5paragraph5',
                type: 'string',
                title: 'Section5 Paragraph5',
              }
          ]
        }]
      }),

    // SingersSection
    defineField({
        name: 'sec6',
        type: 'string',
        title: 'Section6 Title',
      }),
      defineField({
        name: 'sec6paragraph',
        type: 'string',
        title: 'Section6 Paragraph',
      }),
    defineField({
        name: 'sec6button',
        type: 'string',
        title: 'Section6 Button',
      }),
      defineField({
        name: 'sec6image',
        type: 'image',
        title: 'Section6 image',
      }),

      
    //   DevCards2

    defineField({
        name: 'sec7',
        title: 'Section7',
        type: 'array',
        of: [{
          type: 'image',
          title: 'Section7 Card',
          fields: [
            {
              name: 'sec7title',
              type: 'string',
              title: 'Section7 Title',
            },
            {
              name: 'sec7subtitle',
              type: 'string',
              title: 'Section7 SubTitle',
            },
            {
                name: 'sec7paragraph',
                type: 'string',
                title: 'Section7 Paragraph',
            }
          ]
        }]
      }),

    //   StrategicIntelligence
    defineField({
        name: 'sec8button',
        type: 'string',
        title: 'Section8 Button',
      }),
    defineField({
        name: 'sec8title',
        type: 'string',
        title: 'Section8 Title',
      }),
      defineField({
        name: 'sec8card',
        title: 'Section8 Card',
        type: 'array',
        of: [{
          type: 'image',
          title: 'Section8 Card',
          fields: [
            {
              name: 'sec8title',
              type: 'string',
              title: 'Section8 Title',
            },
            {
              name: 'sec8subtitle',
              type: 'string',
              title: 'Section8 SubTitle',
            }
          ]
        }]
      }),

    //   Solutions

    defineField({
        name: 'sec9title',
        type: 'string',
        title: 'Section9 Title',
      }),
      defineField({
        name: 'sec9card',
        title: 'Section9 Card',
        type: 'array',
        of: [{
          type: 'image',
          title: 'Section9 Card',
          fields: [
            {
              name: 'sec9title',
              type: 'string',
              title: 'Section9 Title',
            },
            {
              name: 'sec9subtitle',
              type: 'string',
              title: 'Section9 SubTitle',
            }
          ]
        }]
      }),

    //   SliderSection
    defineField({
        name: 'sec10card',
        title: 'Section10 Card',
        type: 'array',
        of: [{
          type: 'image',
          title: 'Section10 Card',
          fields: [
            {
              name: 'sec10title',
              type: 'string',
              title: 'Section10 Title',
            },
            {
              name: 'sec10subtitle',
              type: 'string',
              title: 'Section10 SubTitle',
            }
          ]
        }]
      }),


  ],
})