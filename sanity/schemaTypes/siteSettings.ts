
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    groups: [
        { name: 'general', title: 'Algemeen' },
        { name: 'branding', title: 'Branding' },
        { name: 'header', title: 'Header' },
        { name: 'footer', title: 'Footer' },
        { name: 'contact', title: 'Contact' },
        { name: 'social', title: 'Social Media' },
        { name: 'seo', title: 'SEO' },
        { name: 'scripts', title: 'Scripts' },
    ],

    fields: [
        // ALGEMEEN
        defineField({
            name: 'siteName',
            title: 'Website Naam',
            type: 'string',
            description: 'De naam van je website (bijv. Commerso)',
            validation: (Rule) => Rule.required(),
            group: 'general',
        }),

        defineField({
            name: 'siteUrl',
            title: 'Website URL',
            type: 'url',
            description: 'De volledige URL van je website (bijv. https://commerso.nl)',
            validation: (Rule) => Rule.required(),
            group: 'general',
        }),

        defineField({
            name: 'siteDescription',
            title: 'Website Beschrijving',
            type: 'text',
            rows: 3,
            description: 'Korte beschrijving van je bedrijf/website',
            group: 'general',
        }),

        // BRANDING
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            description: 'Upload je bedrijfslogo (PNG of SVG aanbevolen)',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alt tekst',
                    description: 'Beschrijving van het logo (belangrijk voor toegankelijkheid)',
                    validation: (Rule) => Rule.required(),
                },
            ],
            validation: (Rule) => Rule.required(),
            group: 'branding',
        }),

        defineField({
            name: 'logoWidth',
            title: 'Logo Breedte (pixels)',
            type: 'number',
            description: 'Gewenste breedte van het logo in de navigatiebalk',
            initialValue: 150,
            validation: (Rule) => Rule.required().min(50).max(400),
            group: 'branding',
        }),

        defineField({
            name: 'favicon',
            title: 'Favicon',
            type: 'image',
            description: 'Browser tab icoon (32x32px aanbevolen, PNG of ICO)',
            options: { accept: 'image/png, image/x-icon' },
            group: 'branding',
        }),

        defineField({
            name: 'colors',
            title: 'Kleurenschema',
            type: 'colorSettings',
            description: 'Brand kleuren voor je website',
            group: 'branding',
        }),

        // HEADER
        defineField({
            name: 'navigation',
            title: 'Hoofd Navigatie',
            type: 'reference',
            to: [{ type: 'navigation' }],
            description: 'Selecteer het navigatie menu voor de header',
            group: 'header',
        }),

        defineField({
            name: 'headerCta',
            title: 'Header CTA Button',
            type: 'ctaButton',
            description: 'Call-to-action knop in de header (rechterkant)',
            group: 'header',
        }),

        // FOOTER
        defineField({
            name: 'footer',
            title: 'Footer Instellingen',
            type: 'footerSettings',
            description: 'Footer kolommen, copyright en links',
            group: 'footer',
        }),

        // CONTACT
        defineField({
            name: 'contact',
            title: 'Contact Informatie',
            type: 'contactInfo',
            description: 'Bedrijfsgegevens en contactinformatie',
            group: 'contact',
        }),

        // SOCIAL MEDIA
        defineField({
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'socialLinks',
            description: 'Links naar je social media profielen',
            group: 'social',
        }),

        // SEO
        defineField({
            name: 'defaultSeo',
            title: 'Standaard SEO Instellingen',
            type: 'seo',
            description: 'Standaard SEO instellingen voor pagina\'s zonder custom SEO',
            group: 'seo',
        }),

        // SCRIPTS
        defineField({
            name: 'trackingScripts',
            title: 'Tracking & Scripts',
            type: 'scripts',
            description: 'Google Analytics, Tag Manager, en andere scripts',
            group: 'scripts',
        }),
    ],

    preview: {
        select: {
            title: 'siteName',
            subtitle: 'siteUrl',
        },
    },
})