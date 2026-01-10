
export const allPagesQuery = `
  *[_type == "page"] | order(navigationOrder asc) {
    _id,
    title,
    slug {
      current
    },
    parent->{
      _id,
      title,
      slug {
        current
      }
    },
    showInNavigation,
    navigationOrder,
    publishedAt
  }
`

export const pageBySlugQuery = `
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug {
      current
    },
    
    parent->{
      _id,
      title,
      slug {
        current
      }
    },
    
    showInNavigation,
    navigationOrder,
    
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
    },
    
    content[] {
      ...,
      _type == "image" => {
        asset->{
          _id,
          url,
          metadata {
            dimensions,
            lqip
          }
        },
        alt,
        caption
      }
    },
    
    publishedAt
  }
`

export const pagePathsQuery = `
  *[_type == "page" && defined(slug.current)] {
    "slug": slug.current
  }
`

export const childPagesQuery = `
  *[_type == "page" && parent._ref == $parentId] | order(navigationOrder asc) {
    _id,
    title,
    slug {
      current
    },
    navigationOrder,
    publishedAt
  }
`