
/**
 * Sanity GROQ Queries
 * Organized queries for fetching data from Sanity CMS
 * - settings.ts: Site-wide configuration (logo, navigation, SEO defaults)
 * - pages.ts: All page-related queries
 */

// Re-export all queries for easy importing

export { SITE_SETTINGS_QUERY } from './settings'

export {

    PAGE_BY_SLUG_QUERY,
    ALL_PAGES_QUERY,
    ALL_SLUGS_QUERY,
    CHILD_PAGES_QUERY,

} from './pages'