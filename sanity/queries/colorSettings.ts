
export const colorSettingsQuery = `
  *[_type == "siteSettings"][0].colors {
    primaryColor,
    secondaryColor,
    accentColor,
    backgroundColor,
    textColor
  }
`

export const brandingQuery = `
  *[_type == "siteSettings"][0] {
    "colors": colors {
      primaryColor,
      secondaryColor,
      accentColor,
      backgroundColor,
      textColor
    },
    "logo": logo {
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    "logoWidth": logoWidth,
    "favicon": favicon {
      asset->{
        _id,
        url
      }
    }
  }
`