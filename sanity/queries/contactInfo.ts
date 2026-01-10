
export const contactInfoQuery = `
  *[_type == "siteSettings"][0].contact {
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
  }
`

export const fullContactQuery = `
  *[_type == "siteSettings"][0] {
    "contact": contact {
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
    "social": socialLinks {
      linkedin,
      twitter,
      facebook,
      instagram,
      youtube,
      github
    }
  }
`