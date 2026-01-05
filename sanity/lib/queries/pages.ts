import { groq } from 'next-sanity'

/**
 * Get single page by slug
 * Fetches complete page data including SEO, content, and parent information
 */
export const PAGE_BY_SLUG_QUERY = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    "parentSlug": parent->slug.current,
    "parentTitle": parent->title,
    seo {
      metaTitle,
      metaDescription,
      ogImage {
        asset->
      },
      keywords
    },
    content[] {
      ...,
      _type == "image" => {
        ...,
        asset->
      }
    },
    publishedAt
  }
`

/**
 * Get all pages for navigation and sitemap
 * Only returns pages that should be shown in navigation
 */
export const ALL_PAGES_QUERY = groq`
  *[_type == "page" && showInNavigation == true] | order(navigationOrder asc) {
    _id,
    title,
    "slug": slug.current,
    "parentSlug": parent->slug.current,
    showInNavigation,
    navigationOrder
  }
`

/**
 * Get all page slugs for static generation
 * Returns all pages regardless of navigation visibility
 */
export const ALL_SLUGS_QUERY = groq`
  *[_type == "page"] {
    "slug": slug.current,
    "parentSlug": parent->slug.current
  }
`

/**
 * Get child pages of a parent page
 * Used to display sub-pages of a specific parent
 */
export const CHILD_PAGES_QUERY = groq`
  *[_type == "page" && parent->_id == $parentId] | order(navigationOrder asc) {
    _id,
    title,
    "slug": slug.current,
    seo {
      metaDescription
    }
  }
`
