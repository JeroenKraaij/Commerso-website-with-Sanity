import { defineType, defineField } from 'sanity'

/**
 * Social Media Links Object
 * All social media profiles
 */
export default defineType({
  name: 'socialLinks',
  title: 'Social Media Links',
  type: 'object',
  fields: [
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
      description: 'Volledige LinkedIn URL',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter / X',
      type: 'url',
      description: 'Volledige Twitter/X URL',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
      description: 'Volledige Facebook URL',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      description: 'Volledige Instagram URL',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube',
      type: 'url',
      description: 'Volledige YouTube URL',
    }),
    defineField({
      name: 'github',
      title: 'GitHub',
      type: 'url',
      description: 'Volledige GitHub URL (optioneel)',
    }),
  ],
})
