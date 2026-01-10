
export const footerSettingsQuery = `
  *[_type == "siteSettings"][0].footer {
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
  }
`

export const fullFooterQuery = `
  *[_type == "siteSettings"][0] {
    "footer": footer {
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
    "socialLinks": socialLinks {
      linkedin,
      twitter,
      facebook,
      instagram,
      youtube,
      github
    },
    "contact": contact {
      email,
      phone
    },
    "logo": logo {
      asset->{
        _id,
        url
      },
      alt
    },
    "siteName": siteName
  }
`