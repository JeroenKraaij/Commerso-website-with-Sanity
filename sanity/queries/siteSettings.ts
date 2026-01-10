

export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    _id,
    siteName,
    siteUrl,
    siteDescription,
    
    logo {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    logoWidth,
    
    favicon {
      asset->{
        _id,
        url
      }
    },
    
    colors {
      primaryColor,
      secondaryColor,
      accentColor,
      backgroundColor,
      textColor
    },
    
    navigation->{
      _id,
      title,
      items[] {
        label,
        page->{
          _id,
          slug {
            current
          },
          title
        },
        externalUrl,
        subItems[] {
          label,
          page->{
            _id,
            slug {
              current
            },
            title
          },
          externalUrl
        }
      }
    },
    
    headerCta {
      text,
      url,
      style,
      openInNewTab,
      icon
    },
    
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
    
    socialLinks {
      linkedin,
      twitter,
      facebook,
      instagram,
      youtube,
      github
    },
    
    defaultSeo {
      metaTitle,
      metaDescription,
      ogImage {
        asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        }
      },
      keywords
    },
    
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