
import { defineType, defineField } from 'sanity'

export default defineType({

    name: 'siteSettings',

    title: 'Site Settings',

    type: 'document',

    groups: [

        {

            name: 'general',

            title: 'General',

        },

        {

            name: 'header',

            title: 'Header',

        },

        {

            name: 'seo',

            title: 'SEO Defaults',

        },

        {

            name: 'social',

            title: 'Social Media',

        },

    ],

    fields: [

        // General

        defineField({

            name: 'siteName',

            title: 'Site Name',

            type: 'string',

            description: 'The name of your website',

            validation: (Rule) => Rule.required(),

            group: 'general',

        }),

        defineField({

            name: 'siteUrl',

            title: 'Site URL',

            type: 'url',

            description: 'The main URL of your website (e.g., https://commerso.nl)',

            validation: (Rule) => Rule.required(),

            group: 'general',

        }),



        // Header

        defineField({

            name: 'logo',

            title: 'Logo',

            type: 'image',

            description: 'Upload your company logo (SVG or PNG recommended)',

            options: {

                hotspot: true,

            },

            fields: [

                {

                    name: 'alt',

                    type: 'string',

                    title: 'Alternative text',

                    description: 'Important for accessibility',

                    validation: (Rule) => Rule.required(),

                },

            ],

            validation: (Rule) => Rule.required(),

            group: 'header',

        }),

        defineField({

            name: 'logoWidth',

            title: 'Logo Width (pixels)',

            type: 'number',

            description: 'Width of logo in navigation bar',

            initialValue: 150,

            validation: (Rule) => Rule.required().min(50).max(400),

            group: 'header',

        }),

        defineField({

            name: 'navigation',

            title: 'Main Navigation',

            type: 'reference',

            to: [{ type: 'navigation' }],

            description: 'Select the navigation menu for the header',

            group: 'header',

        }),

        defineField({

            name: 'headerCta',

            title: 'Header CTA Button',

            type: 'ctaButton',

            description: 'Call-to-action button in the header (right side)',

            group: 'header',

        }),



        // SEO Defaults

        defineField({

            name: 'defaultSeo',

            title: 'Default SEO Settings',

            type: 'seo',

            description: 'Default SEO settings for pages without custom SEO',

            group: 'seo',

        }),

        defineField({

            name: 'favicon',

            title: 'Favicon',

            type: 'image',

            description: 'Browser tab icon (32x32px recommended)',

            options: {

                accept: 'image/png, image/x-icon',

            },

            group: 'seo',

        }),



        // Social Media

        defineField({

            name: 'socialLinks',

            title: 'Social Media Links',

            type: 'object',

            group: 'social',

            fields: [

                {

                    name: 'linkedin',

                    title: 'LinkedIn',

                    type: 'url',

                },

                {

                    name: 'twitter',

                    title: 'Twitter/X',

                    type: 'url',

                },

                {

                    name: 'facebook',

                    title: 'Facebook',

                    type: 'url',

                },

                {

                    name: 'instagram',

                    title: 'Instagram',

                    type: 'url',

                },

            ],

        }),

    ],

    preview: {

        select: {

            title: 'siteName',

        },

    },

})