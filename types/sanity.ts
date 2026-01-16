
// types/sanity.ts
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface SanityAsset {
    _id: string
    url: string
    metadata?: {
        dimensions?: {
            width: number
            height: number
            aspectRatio: number
        }
        lqip?: string
    }
}

export interface SanityImage {
    asset: SanityImageSource | SanityAsset
    alt?: string
    caption?: string
}

export interface SeoSettings {
    metaTitle?: string
    metaDescription?: string
    ogImage?: SanityImage
    keywords?: string[]
}

export interface ColorSettings {
    primaryColor?: string
    secondaryColor?: string
    accentColor?: string
    backgroundColor?: string
    textColor?: string
}

// 👇 Nieuw: Typography types
export interface HeadingStyle {
    mobile: number
    tablet: number
    desktop: number
    weight: string
    lineHeight: number
}

export interface FontFile {
    weight: string
    file: {
        asset: {
            url: string
        }
    }
}

export interface FontSettings {
    name: string
    file: FontFile[]
    fallback: string
}

export interface TypographySettings {
    headingFont?: FontSettings
    bodyFont?: FontSettings
    h1?: HeadingStyle
    h2?: HeadingStyle
    h3?: HeadingStyle
    h4?: HeadingStyle
    h5?: HeadingStyle
    bodyText?: HeadingStyle
}

export interface CtaButton {
    text: string
    url: string
    style: 'primary' | 'secondary' | 'outline' | 'ghost'
    openInNewTab?: boolean
    icon?: string
}

export interface NavigationSubItem {
    label: string
    page?: {
        _id: string
        slug: {
            current: string
        }
        title: string
    }
    externalUrl?: string
}

export interface NavigationItem {
    label: string
    page?: {
        _id: string
        slug: {
            current: string
        }
        title: string
    }
    externalUrl?: string
    subItems?: NavigationSubItem[]
}

export interface Navigation {
    _id: string
    title: string
    items: NavigationItem[]
}

export interface FooterColumn {
    title: string
    links: {
        label: string
        url: string
        openInNewTab?: boolean
    }[]
}

export interface FooterSettings {
    copyrightText?: string
    showSocialLinks?: boolean
    columns?: FooterColumn[]
    bottomText?: string
}

export interface ContactInfo {
    email?: string
    phone?: string
    address?: {
        street?: string
        postalCode?: string
        city?: string
        country?: string
    }
    kvkNumber?: string
    vatNumber?: string
}

export interface SocialLinks {
    linkedin?: string
    twitter?: string
    facebook?: string
    instagram?: string
    youtube?: string
    github?: string
}

export interface Scripts {
    googleAnalyticsId?: string
    googleTagManagerId?: string
    facebookPixelId?: string
    customHeadScripts?: string
    customBodyScripts?: string
    cookieConsent?: boolean
}

export interface SiteSettings {
    _id?: string
    siteName: string
    siteUrl: string
    siteDescription?: string
    logo?: SanityImage
    logoWidth: number
    favicon?: SanityImage
    colors?: ColorSettings
    typography?: TypographySettings // 👈 Nieuw
    navigation?: Navigation
    headerCta?: CtaButton
    footer?: FooterSettings
    contact?: ContactInfo
    socialLinks?: SocialLinks
    defaultSeo?: SeoSettings
    trackingScripts?: Scripts
}

export interface Page {
    _id: string
    title: string
    slug: {
        current: string
    }
    parent?: {
        _id: string
        title: string
        slug: {
            current: string
        }
    }
    seo?: SeoSettings
    content?: any[]
    publishedAt?: string
    showInNavigation?: boolean
    navigationOrder?: number
}

export interface PageSlug {
    slug: string
}