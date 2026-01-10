

import { defineType, defineField } from 'sanity'

/**
 * Scripts Object
 * External scripts like Google Analytics, Tag Manager, etc.
 */

export default defineType({

    name: 'scripts',
    title: 'Scripts & Tracking',
    type: 'object',
    fields: [

        defineField({

            name: 'googleAnalyticsId',
            title: 'Google Analytics ID',
            type: 'string',
            description: 'Bijvoorbeeld: G-XXXXXXXXXX of UA-XXXXXXXXX',

            validation: (Rule) =>

                Rule.custom((value) => {

                    if (!value) return true
                    if (value.startsWith('G-') || value.startsWith('UA-')) {
                        return true
                    }

                    return 'Google Analytics ID moet beginnen met G- of UA-'

                }),

        }),

        defineField({
            name: 'googleTagManagerId',
            title: 'Google Tag Manager ID',
            type: 'string',
            description: 'Bijvoorbeeld: GTM-XXXXXXX',

            validation: (Rule) =>

                Rule.custom((value) => {

                    if (!value) return true

                    if (value.startsWith('GTM-')) {

                        return true

                    }

                    return 'Google Tag Manager ID moet beginnen met GTM-'

                }),

        }),

        defineField({
            name: 'facebookPixelId',
            title: 'Facebook Pixel ID',
            type: 'string',
            description: 'Numeriek ID voor Facebook Pixel',

        }),

        defineField({
            name: 'customHeadScripts',
            title: 'Custom Scripts (Head)',
            type: 'text',
            rows: 5,
            description: 'Voeg custom scripts toe die in de <head> moeten komen',

        }),

        defineField({
            name: 'customBodyScripts',
            title: 'Custom Scripts (Body)',
            type: 'text',

            rows: 5,

            description: 'Voeg custom scripts toe die aan het einde van <body> moeten komen',

        }),

        defineField({

            name: 'cookieConsent',
            title: 'Cookie Consent Actief',
            type: 'boolean',
            description: 'Activeer cookie consent banner (AVG compliant)',
            initialValue: true,

        }),

    ],

})