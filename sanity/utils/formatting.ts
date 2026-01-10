
/**
 * Formatting utilities
 * Voor het formatteren van data uit Sanity
 */

// Formatteer adres naar string
export function formatAddress(address: any): string {
    if (!address) return ''

    const parts = [
        address.street,
        `${address.postalCode} ${address.city}`,
        address.country
    ].filter(Boolean)

    return parts.join(', ')
}

// Formatteer telefoonnummer voor tel: link
export function formatPhoneLink(phone: string): string {
    if (!phone) return ''
    return `tel:${phone.replace(/\s/g, '')}`
}

// Formatteer email voor mailto: link
export function formatEmailLink(email: string): string {
    if (!email) return ''
    return `mailto:${email}`
}

// Formatteer copyright met dynamisch jaar
export function formatCopyright(copyrightText: string): string {
    if (!copyrightText) return ''
    const currentYear = new Date().getFullYear()
    return copyrightText.replace(/©\s*\d{4}/, `© ${currentYear}`)
}

// Filter alleen actieve social links
export function getActiveSocialLinks(socialLinks: any) {
    if (!socialLinks) return []

    return Object.entries(socialLinks)
        .filter(([_, url]) => url)
        .map(([platform, url]) => ({
            platform,
            url: url as string
        }))
}

// Social media labels
export function getSocialLabel(platform: string): string {
    const labels: Record<string, string> = {
        linkedin: 'LinkedIn',
        twitter: 'Twitter / X',
        facebook: 'Facebook',
        instagram: 'Instagram',
        youtube: 'YouTube',
        github: 'GitHub'
    }

    return labels[platform] || platform
}

// Social media icon namen (voor icon libraries)
export function getSocialIcon(platform: string): string {
    const icons: Record<string, string> = {
        linkedin: 'FaLinkedin',
        twitter: 'FaTwitter',
        facebook: 'FaFacebook',
        instagram: 'FaInstagram',
        youtube: 'FaYoutube',
        github: 'FaGithub'
    }

    return icons[platform] || 'FaLink'
}