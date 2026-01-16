
// sanity/schemaTypes/typographySettings.ts
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'typographySettings',
    title: 'Typography Settings',
    type: 'object',
    fields: [
        // Font Family
        defineField({
            name: 'headingFont',
            title: 'Heading Font',
            type: 'object',
            fields: [
                {
                    name: 'name',
                    title: 'Font Name',
                    type: 'string',
                    description: 'Bijvoorbeeld: Montserrat, Roboto, Open Sans',
                },
                {
                    name: 'file',
                    title: 'Font Files',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            {
                                name: 'weight',
                                title: 'Font Weight',
                                type: 'string',
                                options: {
                                    list: [
                                        { title: 'Thin (100)', value: '100' },
                                        { title: 'Extra Light (200)', value: '200' },
                                        { title: 'Light (300)', value: '300' },
                                        { title: 'Regular (400)', value: '400' },
                                        { title: 'Medium (500)', value: '500' },
                                        { title: 'Semi Bold (600)', value: '600' },
                                        { title: 'Bold (700)', value: '700' },
                                        { title: 'Extra Bold (800)', value: '800' },
                                        { title: 'Black (900)', value: '900' },
                                    ]
                                }
                            },
                            {
                                name: 'file',
                                title: 'Font File (.woff2)',
                                type: 'file',
                                options: {
                                    accept: '.woff2'
                                }
                            }
                        ],
                        preview: {
                            select: {
                                weight: 'weight',
                            },
                            prepare({ weight }) {
                                return {
                                    title: `Weight: ${weight}`
                                }
                            }
                        }
                    }]
                },
                {
                    name: 'fallback',
                    title: 'Fallback Fonts',
                    type: 'string',
                    description: 'Bijvoorbeeld: -apple-system, sans-serif',
                    initialValue: 'system-ui, -apple-system, sans-serif'
                }
            ]
        }),

        defineField({
            name: 'bodyFont',
            title: 'Body Font',
            type: 'object',
            fields: [
                {
                    name: 'name',
                    title: 'Font Name',
                    type: 'string',
                },
                {
                    name: 'file',
                    title: 'Font Files',
                    type: 'array',
                    of: [{
                        type: 'object',
                        fields: [
                            {
                                name: 'weight',
                                title: 'Font Weight',
                                type: 'string',
                                options: {
                                    list: [
                                        { title: 'Regular (400)', value: '400' },
                                        { title: 'Medium (500)', value: '500' },
                                        { title: 'Semi Bold (600)', value: '600' },
                                        { title: 'Bold (700)', value: '700' },
                                    ]
                                }
                            },
                            {
                                name: 'file',
                                title: 'Font File (.woff2)',
                                type: 'file',
                                options: {
                                    accept: '.woff2'
                                }
                            }
                        ]
                    }]
                },
                {
                    name: 'fallback',
                    title: 'Fallback Fonts',
                    type: 'string',
                    initialValue: 'system-ui, -apple-system, sans-serif'
                }
            ]
        }),

        // Heading Sizes (Responsive)
        defineField({
            name: 'h1',
            title: 'H1 Heading',
            type: 'object',
            fields: [
                {
                    name: 'mobile',
                    title: 'Mobile Size (px)',
                    type: 'number',
                    initialValue: 32,
                    validation: (Rule) => Rule.required().min(16).max(100)
                },
                {
                    name: 'tablet',
                    title: 'Tablet Size (px)',
                    type: 'number',
                    initialValue: 40,
                    validation: (Rule) => Rule.required().min(16).max(100)
                },
                {
                    name: 'desktop',
                    title: 'Desktop Size (px)',
                    type: 'number',
                    initialValue: 48,
                    validation: (Rule) => Rule.required().min(16).max(120)
                },
                {
                    name: 'weight',
                    title: 'Font Weight',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Regular (400)', value: '400' },
                            { title: 'Medium (500)', value: '500' },
                            { title: 'Semi Bold (600)', value: '600' },
                            { title: 'Bold (700)', value: '700' },
                            { title: 'Extra Bold (800)', value: '800' },
                        ]
                    },
                    initialValue: '700'
                },
                {
                    name: 'lineHeight',
                    title: 'Line Height',
                    type: 'number',
                    initialValue: 1.2,
                    validation: (Rule) => Rule.required().min(1).max(2)
                }
            ]
        }),

        defineField({
            name: 'h2',
            title: 'H2 Heading',
            type: 'object',
            fields: [
                {
                    name: 'mobile',
                    title: 'Mobile Size (px)',
                    type: 'number',
                    initialValue: 28,
                },
                {
                    name: 'tablet',
                    title: 'Tablet Size (px)',
                    type: 'number',
                    initialValue: 32,
                },
                {
                    name: 'desktop',
                    title: 'Desktop Size (px)',
                    type: 'number',
                    initialValue: 40,
                },
                {
                    name: 'weight',
                    title: 'Font Weight',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Regular (400)', value: '400' },
                            { title: 'Medium (500)', value: '500' },
                            { title: 'Semi Bold (600)', value: '600' },
                            { title: 'Bold (700)', value: '700' },
                        ]
                    },
                    initialValue: '700'
                },
                {
                    name: 'lineHeight',
                    title: 'Line Height',
                    type: 'number',
                    initialValue: 1.3,
                }
            ]
        }),

        defineField({
            name: 'h3',
            title: 'H3 Heading',
            type: 'object',
            fields: [
                {
                    name: 'mobile',
                    title: 'Mobile Size (px)',
                    type: 'number',
                    initialValue: 24,
                },
                {
                    name: 'tablet',
                    title: 'Tablet Size (px)',
                    type: 'number',
                    initialValue: 28,
                },
                {
                    name: 'desktop',
                    title: 'Desktop Size (px)',
                    type: 'number',
                    initialValue: 32,
                },
                {
                    name: 'weight',
                    title: 'Font Weight',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Regular (400)', value: '400' },
                            { title: 'Medium (500)', value: '500' },
                            { title: 'Semi Bold (600)', value: '600' },
                            { title: 'Bold (700)', value: '700' },
                        ]
                    },
                    initialValue: '600'
                },
                {
                    name: 'lineHeight',
                    title: 'Line Height',
                    type: 'number',
                    initialValue: 1.3,
                }
            ]
        }),

        defineField({
            name: 'h4',
            title: 'H4 Heading',
            type: 'object',
            fields: [
                {
                    name: 'mobile',
                    title: 'Mobile Size (px)',
                    type: 'number',
                    initialValue: 20,
                },
                {
                    name: 'tablet',
                    title: 'Tablet Size (px)',
                    type: 'number',
                    initialValue: 22,
                },
                {
                    name: 'desktop',
                    title: 'Desktop Size (px)',
                    type: 'number',
                    initialValue: 24,
                },
                {
                    name: 'weight',
                    title: 'Font Weight',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Regular (400)', value: '400' },
                            { title: 'Medium (500)', value: '500' },
                            { title: 'Semi Bold (600)', value: '600' },
                            { title: 'Bold (700)', value: '700' },
                        ]
                    },
                    initialValue: '600'
                },
                {
                    name: 'lineHeight',
                    title: 'Line Height',
                    type: 'number',
                    initialValue: 1.4,
                }
            ]
        }),

        defineField({
            name: 'h5',
            title: 'H5 Heading',
            type: 'object',
            fields: [
                {
                    name: 'mobile',
                    title: 'Mobile Size (px)',
                    type: 'number',
                    initialValue: 18,
                },
                {
                    name: 'tablet',
                    title: 'Tablet Size (px)',
                    type: 'number',
                    initialValue: 19,
                },
                {
                    name: 'desktop',
                    title: 'Desktop Size (px)',
                    type: 'number',
                    initialValue: 20,
                },
                {
                    name: 'weight',
                    title: 'Font Weight',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Regular (400)', value: '400' },
                            { title: 'Medium (500)', value: '500' },
                            { title: 'Semi Bold (600)', value: '600' },
                            { title: 'Bold (700)', value: '700' },
                        ]
                    },
                    initialValue: '600'
                },
                {
                    name: 'lineHeight',
                    title: 'Line Height',
                    type: 'number',
                    initialValue: 1.4,
                }
            ]
        }),

        // Body Text
        defineField({
            name: 'bodyText',
            title: 'Body Text',
            type: 'object',
            fields: [
                {
                    name: 'mobile',
                    title: 'Mobile Size (px)',
                    type: 'number',
                    initialValue: 16,
                },
                {
                    name: 'tablet',
                    title: 'Tablet Size (px)',
                    type: 'number',
                    initialValue: 16,
                },
                {
                    name: 'desktop',
                    title: 'Desktop Size (px)',
                    type: 'number',
                    initialValue: 18,
                },
                {
                    name: 'weight',
                    title: 'Font Weight',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Regular (400)', value: '400' },
                            { title: 'Medium (500)', value: '500' },
                        ]
                    },
                    initialValue: '400'
                },
                {
                    name: 'lineHeight',
                    title: 'Line Height',
                    type: 'number',
                    initialValue: 1.6,
                }
            ]
        }),
    ],
})