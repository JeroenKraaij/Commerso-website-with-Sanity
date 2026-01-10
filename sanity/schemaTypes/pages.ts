

import { defineType, defineField } from 'sanity'

export default defineType({

    name: 'page',
    title: 'Page',
    type: 'document',

    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',

            validation: (Rule) => Rule.required(),

        }),

        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Click "Generate" to create a URL-friendly slug from the title',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({

            name: 'parent',
            title: 'Parent Page',
            type: 'reference',
            to: [{ type: 'page' }],
            description: 'Select a parent page to create a subpage (e.g., /about/team)',
            options: {
                filter: ({ document }) => {

                    return {
                        filter: '_id != $id && !defined(parent)',
                        params: { id: document._id },
                    }
                },
            },
        }),

        defineField({

            name: 'showInNavigation',
            title: 'Show in Navigation',
            type: 'boolean',
            description: 'Display this page in the main navigation menu',
            initialValue: true,
        }),

        defineField({

            name: 'navigationOrder',
            title: 'Navigation Order',
            type: 'number',
            description: 'Lower numbers appear first in navigation',
            initialValue: 0,
            hidden: ({ document }) => !document?.showInNavigation,
        }),

        defineField({

            name: 'seo',
            title: 'SEO Settings',
            type: 'seo',
            description: 'SEO settings for this page',
        }),

        defineField({

            name: 'content',
            title: 'Page Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Quote', value: 'blockquote' },
                    ],

                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                            { title: 'Code', value: 'code' },
                        ],

                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'string',
                                        title: 'URL',
                                    },
                                    {
                                        title: 'Open in new tab',
                                        name: 'blank',
                                        type: 'boolean',
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                            description: 'Important for SEO and accessibility',
                        },
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        },
                    ],
                },
            ],
        }),

        defineField({

            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        }),
    ],

    preview: {
        select: {
            title: 'title',
            subtitle: 'slug.current',
            parent: 'parent.title',
        },

        prepare({ title, subtitle, parent }) {

            return {
                title: title,
                subtitle: parent ? `${parent} / ${subtitle}` : subtitle,
            }
        },
    },
})