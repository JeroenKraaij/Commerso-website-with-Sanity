import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Navigation Title',
      type: 'string',
      description: 'Internal title for this navigation',
      initialValue: 'Main Navigation',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navigationItem',
          title: 'Navigation Item',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Text to display in navigation',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'page',
              title: 'Link to Page',
              type: 'reference',
              to: [{ type: 'page' }],
              description: 'Select a page to link to',
            },
            {
              name: 'externalUrl',
              title: 'OR External URL',
              type: 'string',
              description: 'Use this for external links instead of selecting a page',
            },
            {
              name: 'subItems',
              title: 'Sub-menu Items',
              type: 'array',
              description: 'Create a dropdown menu',
              of: [
                {
                  type: 'object',
                  name: 'subNavigationItem',
                  fields: [
                    {
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'page',
                      title: 'Link to Page',
                      type: 'reference',
                      to: [{ type: 'page' }],
                    },
                    {
                      name: 'externalUrl',
                      title: 'OR External URL',
                      type: 'string',
                    },
                  ],
                  preview: {
                    select: {
                      title: 'label',
                      subtitle: 'page.slug.current',
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'page.slug.current',
              hasSubItems: 'subItems',
            },
            prepare({ title, subtitle, hasSubItems }) {
              return {
                title: title,
                subtitle: hasSubItems && hasSubItems.length > 0
                  ? `${subtitle || 'No link'} (${hasSubItems.length} sub-items)`
                  : subtitle || 'No link',
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare({ title, items }) {
      return {
        title: title,
        subtitle: items ? `${items.length} items` : 'No items',
      }
    },
  },
})
