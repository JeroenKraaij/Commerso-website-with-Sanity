
import { defineType, defineField } from 'sanity'

/**
 * CTA Button Object
 * Call-to-action button configuration
 */

export default defineType({
    name: 'ctaButton',
    title: 'CTA Button',
    type: 'object',
    fields: [
        defineField({
            name: 'text',
            title: 'Button Tekst',
            type: 'string',
            description: 'Tekst op de knop (bijv. "Contact", "Offerte aanvragen")',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'url',
            title: 'Button Link',
            type: 'string',
            description: 'Intern (/contact) of extern (https://...)',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'style',
            title: 'Button Stijl',
            type: 'string',
            description: 'Visuele stijl van de button',
            options: {
                list: [
                    { title: 'Primair (oranje)', value: 'primary' },
                    { title: 'Secundair (rood)', value: 'secondary' },
                    { title: 'Outline', value: 'outline' },
                    { title: 'Ghost', value: 'ghost' },
                ],
                layout: 'radio',
            },
            initialValue: 'primary',
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: 'openInNewTab',
            title: 'Open in nieuw tabblad',
            type: 'boolean',
            description: 'Open link in een nieuw browser tabblad',
            initialValue: false,
        }),

        defineField({
            name: 'icon',
            title: 'Icoon (optioneel)',
            type: 'string',
            description: 'Naam van een icoon (bijv. "arrow-right", "phone", "mail")',
        }),
    ],

    preview: {
        select: {
            text: 'text',
            url: 'url',
            style: 'style',
        },
        prepare({ text, url, style }) {
            return {
                title: text || 'CTA Button',
                subtitle: `${style || 'primary'} → ${url || 'No URL'}`,
            }
        },
    },
})