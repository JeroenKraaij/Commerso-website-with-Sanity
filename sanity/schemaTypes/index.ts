import { type SchemaTypeDefinition } from 'sanity';
import siteSettings from '@/sanity/schemaTypes/siteSettings';
import page from '@/sanity/schemaTypes/page';
import navigation from '@/sanity/schemaTypes/navigation';
import seo from '@/sanity/schemaTypes/seo';
import ctaButton from '@/sanity/schemaTypes/ctaButton';

const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    page,
    navigation,
    seo,
    ctaButton,
  ],
};

export default schema;