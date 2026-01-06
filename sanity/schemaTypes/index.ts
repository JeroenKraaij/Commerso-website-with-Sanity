import { type SchemaTypeDefinition } from 'sanity';
import siteSettings from '@/sanity/schemaTypes/siteSettings';
import page from '@/sanity/schemaTypes/page';
import navigation from '@/sanity/schemaTypes/navigation';
import seo from '@/sanity/schemaTypes/seo';
import ctaButton from '@/sanity/schemaTypes/ctaButton';
import contactInfo from './contactInfo'
import socialLinks from './socialLinks'
import footerSettings from './footerSettings'
import colorSettings from './colorSettings'
import scripts from './scripts'

export const schema: { types: SchemaTypeDefinition[] } = {

  types: [
    // Singletons
    siteSettings,
    // Documents
    page,
    navigation,
    // Objects
    seo,
    ctaButton,
    contactInfo,
    socialLinks,
    footerSettings,
    colorSettings,
    scripts,
  ],
}