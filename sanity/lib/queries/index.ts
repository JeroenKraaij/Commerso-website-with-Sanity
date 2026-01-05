/**
 * Sanity GROQ Queries
 *
 * All queries organized by content type:
 * - settings.ts: Site-wide configuration
 * - pages.ts: Page content queries
 * - navigation.ts: Navigation menu queries
 */

// Site Settings
export { SITE_SETTINGS_QUERY } from './settings'

// Pages
export {
  PAGE_BY_SLUG_QUERY,
  ALL_PAGES_QUERY,
  ALL_SLUGS_QUERY,
  CHILD_PAGES_QUERY,
  PAGE_BY_ID_QUERY,
  RECENT_PAGES_QUERY,
} from './pages'

// Navigation
export {
  NAVIGATION_BY_ID_QUERY,
  ALL_NAVIGATIONS_QUERY,
  MAIN_NAVIGATION_QUERY,
} from './navigation'
