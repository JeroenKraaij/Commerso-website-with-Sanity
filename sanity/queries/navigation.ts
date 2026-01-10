
export const mainNavigationQuery = `
  *[_type == "navigation"][0] {
    _id,
    title,
    items[] {
      label,
      page->{
        _id,
        title,
        slug {
          current
        }
      },
      externalUrl,
      subItems[] {
        label,
        page->{
          _id,
          title,
          slug {
            current
          }
        },
        externalUrl
      }
    }
  }
`

export const navigationByIdQuery = `
  *[_type == "navigation" && _id == $id][0] {
    _id,
    title,
    items[] {
      label,
      page->{
        _id,
        title,
        slug {
          current
        }
      },
      externalUrl,
      subItems[] {
        label,
        page->{
          _id,
          title,
          slug {
            current
          }
        },
        externalUrl
      }
    }
  }
`