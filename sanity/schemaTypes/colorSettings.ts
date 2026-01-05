import { defineType, defineField } from 'sanity'

/**
 * Color Settings Object
 * Brand colors for the website
 */
export default defineType({
  name: 'colorSettings',
  title: 'Color Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'primaryColor',
      title: 'Primaire Kleur',
      type: 'string',
      description: 'Hex kleurcode (bijv. #FF8C00 voor oranje)',
      placeholder: '#FF8C00',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return true
          if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)) {
            return true
          }
          return 'Gebruik een geldige hex kleur (bijv. #FF8C00)'
        }),
    }),
    defineField({
      name: 'secondaryColor',
      title: 'Secundaire Kleur',
      type: 'string',
      description: 'Hex kleurcode (bijv. #C84338 voor rood)',
      placeholder: '#C84338',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return true
          if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)) {
            return true
          }
          return 'Gebruik een geldige hex kleur (bijv. #C84338)'
        }),
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Kleur',
      type: 'string',
      description: 'Optionele accent kleur voor highlights',
      placeholder: '#000000',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return true
          if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)) {
            return true
          }
          return 'Gebruik een geldige hex kleur'
        }),
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Achtergrond Kleur',
      type: 'string',
      description: 'Standaard achtergrondkleur',
      placeholder: '#FFFFFF',
      initialValue: '#FFFFFF',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return true
          if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)) {
            return true
          }
          return 'Gebruik een geldige hex kleur'
        }),
    }),
    defineField({
      name: 'textColor',
      title: 'Tekst Kleur',
      type: 'string',
      description: 'Standaard tekstkleur',
      placeholder: '#000000',
      initialValue: '#000000',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return true
          if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)) {
            return true
          }
          return 'Gebruik een geldige hex kleur'
        }),
    }),
  ],
  preview: {
    select: {
      primary: 'primaryColor',
      secondary: 'secondaryColor',
    },
    prepare({ primary, secondary }) {
      return {
        title: 'Kleurenschema',
        subtitle: `Primair: ${primary || 'Niet ingesteld'} | Secundair: ${secondary || 'Niet ingesteld'}`,
      }
    },
  },
})
