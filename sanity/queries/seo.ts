
export const seoByPageQuery = `
  *[_type == "page" && slug.current == $slug][0] {
    seo {
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
    }
  }.seo
`

export const defaultSeoQuery = `
  *[_type == "siteSettings"][0].defaultSeo {
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
  }
`

export const seoWithFallbackQuery = `
  *[_type == "page" && slug.current == $slug][0] {
    "pageSeo": seo,
    "defaultSeo": *[_type == "siteSettings"][0].defaultSeo,
    "siteName": *[_type == "siteSettings"][0].siteName
  }
`