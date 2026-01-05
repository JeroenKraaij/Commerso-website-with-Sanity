import { groq } from 'next-sanity'

/**
 * PAGE BY SLUG QUERY
 * Fetches a single page by its slug with all content and SEO
 */
export const PAGE_BY_SLUG_QUERY = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    "parentSlug": parent->slug.current,
    "parentTitle": parent->title,
    showInNavigation,
    navigationOrder,
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
 * ALL PAGES QUERY
 * Fetches all pages that should be shown in navigation
 * Ordered by navigationOrder
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
 * ALL SLUGS QUERY
 * Fetches all page slugs for static generation
 * Returns all pages regardless of navigation visibility
 */
export const ALL_SLUGS_QUERY = groq`
  *[_type == "page"] {
    "slug": slug.current,
    "parentSlug": parent->slug.current
  }
`

/**
 * CHILD PAGES QUERY
 * Fetches all child pages of a specific parent page
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

/**
 * PAGE BY ID QUERY
 * Fetches a single page by its ID (useful for previews)
 */
export const PAGE_BY_ID_QUERY = groq`
  *[_type == "page" && _id == $id][0] {
    _id,
    title,
    "slug": slug.current,
    "parentSlug": parent->slug.current,
    "parentTitle": parent->title,
    showInNavigation,
    navigationOrder,
    seo {
      metaTitle,
      metaDescription,
      ogImage {
        asset->
      },
      keywords
    },
    content,
    publishedAt
  }
`

/**
 * RECENT PAGES QUERY
 * Fetches most recently published pages
 */
export const RECENT_PAGES_QUERY = groq`
  *[_type == "page"] | order(publishedAt desc)[0...$limit] {
    _id,
    title,
    "slug": slug.current,
    "parentSlug": parent->slug.current,
    seo {
      metaDescription
    },
    publishedAt
  }
`
