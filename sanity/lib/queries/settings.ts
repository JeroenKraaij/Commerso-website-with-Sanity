import { groq } from 'next-sanity'

/**
 * Site Settings Query
 * Fetches global site configuration including logo, navigation, CTA, and SEO defaults
 */
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
