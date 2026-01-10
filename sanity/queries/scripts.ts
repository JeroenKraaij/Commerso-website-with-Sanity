
export const scriptsQuery = `
  *[_type == "siteSettings"][0].trackingScripts {
    googleAnalyticsId,
    googleTagManagerId,
    facebookPixelId,
    customHeadScripts,
    customBodyScripts,
    cookieConsent
  }
`

export const trackingIdsQuery = `
  *[_type == "siteSettings"][0].trackingScripts {
    googleAnalyticsId,
    googleTagManagerId,
    facebookPixelId,
    cookieConsent
  }
`