
export const headerCtaQuery = `
  *[_type == "siteSettings"][0].headerCta {
    text,
    url,
    style,
    openInNewTab,
    icon
  }
`

export const headerDataQuery = `
  *[_type == "siteSettings"][0] {
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
    "navigation": navigation->{
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
    "headerCta": headerCta {
      text,
      url,
      style,
      openInNewTab,
      icon
    }
  }
`