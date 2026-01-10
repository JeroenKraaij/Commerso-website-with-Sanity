
import { type SchemaTypeDefinition } from 'sanity';
import siteSettings from '@/sanity/schemaTypes/siteSettings';
import page from '@/sanity/schemaTypes/pages';
import navigation from '@/sanity/schemaTypes/navigation';
import seo from '@/sanity/schemaTypes/seo';
import contactInfo from './contactInfo'
import socialLinks from './socialLinks'
import footerSettings from './footerSettings'
import colorSettings from './colorSettings'
import scripts from './scripts'
import ctaButton from './ctaButton'  // 👈 Toegevoegd

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Singletons
    siteSettings,
    // Documents
    page,
    navigation,
    // Objects
    seo,
    contactInfo,
    socialLinks,
    footerSettings,
    colorSettings,
    scripts,
    ctaButton,  // 👈 Toegevoegd
  ],
}