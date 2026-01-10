
export const socialLinksQuery = `
  *[_type == "siteSettings"][0].socialLinks {
    linkedin,
    twitter,
    facebook,
    instagram,
    youtube,
    github
  }
`