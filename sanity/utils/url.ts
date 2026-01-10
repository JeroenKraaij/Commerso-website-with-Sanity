
/**
 * URL utilities
 * Voor het werken met URLs en links
 */

// Check of link intern of extern is
export function isInternalLink(url: string): boolean {
    if (!url) return false
    return url.startsWith('/') || !url.includes('://')
}

// Check of link extern is
export function isExternalLink(url: string): boolean {
    return !isInternalLink(url)
}

// Genereer URL voor navigatie item
export function getNavigationUrl(item: any): string {
    if (item.externalUrl) {
        return item.externalUrl
    }
    if (item.page?.slug?.current) {
        return `/${item.page.slug.current}`
    }
    return '#'
}

// Bepaal link target
export function getLinkTarget(openInNewTab: boolean): string | undefined {
    return openInNewTab ? '_blank' : undefined
}

// Bepaal link rel
export function getLinkRel(openInNewTab: boolean): string | undefined {
    return openInNewTab ? 'noopener noreferrer' : undefined
}

// Build volledige URL voor Open Graph
export function buildFullUrl(siteUrl: string, slug: string): string {
    const cleanSiteUrl = siteUrl.replace(/\/$/, '')
    const cleanSlug = slug.replace(/^\//, '')
    return `${cleanSiteUrl}/${cleanSlug}`
}