import { defineType, defineField } from 'sanity'

/**
 * Footer Settings Object
 * Footer content, columns, and links
 */
export default defineType({
  name: 'footerSettings',
  title: 'Footer Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'copyrightText',
      title: 'Copyright Tekst',
      type: 'string',
      description: 'Bijvoorbeeld: © 2026 Commerso. Alle rechten voorbehouden.',
      initialValue: '© 2026 Commerso. Alle rechten voorbehouden.',
    }),
    defineField({
      name: 'showSocialLinks',
      title: 'Toon Social Media Links',
      type: 'boolean',
      description: 'Toon social media iconen in de footer',
      initialValue: true,
    }),
    defineField({
      name: 'columns',
      title: 'Footer Kolommen',
      type: 'array',
      description: 'Voeg kolommen toe aan de footer (max 4 aanbevolen)',
      of: [
        {
          type: 'object',
          name: 'footerColumn',
          title: 'Footer Kolom',
          fields: [
            {
              name: 'title',
              title: 'Kolom Titel',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'links',
              title: 'Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'url',
                      title: 'URL',
                      type: 'string',
                      description: 'Intern (/contact) of extern (https://...)',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'openInNewTab',
                      title: 'Open in nieuw tabblad',
                      type: 'boolean',
                      initialValue: false,
                    },
                  ],
                  preview: {
                    select: {
                      title: 'label',
                      subtitle: 'url',
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'title',
              links: 'links',
            },
            prepare({ title, links }) {
              return {
                title: title,
                subtitle: links ? `${links.length} links` : 'Geen links',
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(4).warning('Meer dan 4 kolommen kan onoverzichtelijk zijn'),
    }),
    defineField({
      name: 'bottomText',
      title: 'Extra Tekst Onder',
      type: 'text',
      rows: 2,
      description: 'Optionele extra tekst onder de footer (bijv. disclaimer)',
    }),
  ],
})
