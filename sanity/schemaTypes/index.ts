import { type SchemaTypeDefinition } from 'sanity'

// Document types
import siteSettings from './siteSettings'
import page from './page'
import navigation from './navigation'

// Object types
import seo from './seo'
import ctaButton from './ctaButton'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Singleton
    siteSettings,

    // Documents
    page,
    navigation,

    // Objects
    seo,
    ctaButton,
  ],
}
