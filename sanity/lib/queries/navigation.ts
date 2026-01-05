import { groq } from 'next-sanity'

/**
 * NAVIGATION BY ID QUERY
 * Fetches a navigation menu by its ID
 */
export const NAVIGATION_BY_ID_QUERY = groq`
  *[_type == "navigation" && _id == $id][0] {
    _id,
    title,
    items[] {
      label,
      "slug": page->slug.current,
      "pageId": page->_id,
      "pageTitle": page->title,
      externalUrl,
      subItems[] {
        label,
        "slug": page->slug.current,
        "pageId": page->_id,
        "pageTitle": page->title,
        externalUrl
      }
    }
  }
`

/**
 * ALL NAVIGATIONS QUERY
 * Fetches all navigation menus (useful for selection in Studio)
 */
export const ALL_NAVIGATIONS_QUERY = groq`
  *[_type == "navigation"] | order(title asc) {
    _id,
    title,
    "itemCount": count(items)
  }
`

/**
 * MAIN NAVIGATION QUERY
 * Fetches the main navigation (used in header)
 * This assumes you have a navigation titled "Main Navigation"
 */
export const MAIN_NAVIGATION_QUERY = groq`
  *[_type == "navigation" && title == "Main Navigation"][0] {
    _id,
    title,
    items[] {
      label,
      "slug": page->slug.current,
      "pageId": page->_id,
      externalUrl,
      subItems[] {
        label,
        "slug": page->slug.current,
        "pageId": page->_id,
        externalUrl
      }
    }
  }
`
