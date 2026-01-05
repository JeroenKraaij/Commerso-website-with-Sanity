import { groq } from 'next-sanity'

// Get site settings with logo, navigation, and CTA
export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    siteUrl,
    logo {
      asset->,
      alt
    },
    logoWidth,
    navigation-> {
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
    },
    headerCta {
      text,
      link,
      style,
      openInNewTab
    },
    defaultSeo {
      metaTitle,
      metaDescription,
      ogImage {
        asset->
      },
      keywords
    },
    favicon {
      asset->
    },
    socialLinks
  }
`

// Get all pages for navigation and sitemap
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

// Get single page by slug
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

// Get all page slugs for static generation
export const ALL_SLUGS_QUERY = groq`
  *[_type == "page"] {
    "slug": slug.current,
    "parentSlug": parent->slug.current
  }
`

// Get child pages of a parent page
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
