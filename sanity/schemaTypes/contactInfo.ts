
import { defineType, defineField } from 'sanity'

/**
 * Contact Information Object
 * Reusable contact details for site settings
 */

export default defineType({
    name: 'contactInfo',
    title: 'Contact Information',
    type: 'object',
    fields: [

        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.email().warning('Vul een geldig email adres in'),

        }),

        defineField({
            name: 'phone',
            title: 'Telefoonnummer',
            type: 'string',
            description: 'Bijvoorbeeld: +31 (0)20 123 4567',

        }),

        defineField({
            name: 'address',
            title: 'Adres',
            type: 'object',
            fields: [

                {
                    name: 'street',
                    title: 'Straat + Huisnummer',
                    type: 'string',
                },
                {
                    name: 'postalCode',
                    title: 'Postcode',
                    type: 'string',
                },
                {
                    name: 'city',
                    title: 'Stad',
                    type: 'string',
                },
                {
                    name: 'country',
                    title: 'Land',
                    type: 'string',
                    initialValue: 'Nederland',
                },
            ],
        }),
        defineField({
            name: 'kvkNumber',
            title: 'KvK Nummer',
            type: 'string',
            description: 'Optioneel: Kamer van Koophandel nummer',
        }),

        defineField({
            name: 'vatNumber',
            title: 'BTW Nummer',
            type: 'string',
            description: 'Optioneel: BTW identificatienummer',
        }),
    ],
})