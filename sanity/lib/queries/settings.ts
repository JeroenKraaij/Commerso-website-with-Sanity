import { groq } from 'next-sanity'

/**
 * SITE SETTINGS QUERY
 * Fetches complete site configuration with all nested objects
 * This is a singleton - there should only be one siteSettings document
 */
export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    // ALGEMEEN
    siteName,
    siteUrl,
    siteDescription,

    // BRANDING
    logo {
      asset->,
      alt
    },
    logoWidth,
    favicon {
      asset->
    },
    colors {
      primaryColor,
      secondaryColor,
      accentColor,
      backgroundColor,
      textColor
    },

    // HEADER
    navigation-> {
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
    },
    headerCta {
      text,
      link,
      style,
      openInNewTab
    },

    // FOOTER
    footer {
      copyrightText,
      showSocialLinks,
      columns[] {
        title,
        links[] {
          label,
          url,
          openInNewTab
        }
      },
      bottomText
    },

    // CONTACT
    contact {
      email,
      phone,
      address {
        street,
        postalCode,
        city,
        country
      },
      kvkNumber,
      vatNumber
    },

    // SOCIAL MEDIA
    socialLinks {
      linkedin,
      twitter,
      facebook,
      instagram,
      youtube,
      github
    },

    // SEO
    defaultSeo {
      metaTitle,
      metaDescription,
      ogImage {
        asset->
      },
      keywords
    },

    // SCRIPTS
    trackingScripts {
      googleAnalyticsId,
      googleTagManagerId,
      facebookPixelId,
      customHeadScripts,
      customBodyScripts,
      cookieConsent
    }
  }
`
