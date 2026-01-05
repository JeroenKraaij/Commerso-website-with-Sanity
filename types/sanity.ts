
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface SeoSettings {

    metaTitle?: string

    metaDescription?: string

    ogImage?: {

        asset: SanityImageSource

    }

    keywords?: string[]

}

export interface CtaButton {

    text: string

    link: string

    style: 'primary' | 'secondary' | 'ghost'

    openInNewTab?: boolean

}

export interface NavigationItem {

    label: string

    slug?: string

    pageId?: string

    externalUrl?: string

    subItems?: Array<{

        label: string

        slug?: string

        pageId?: string

        externalUrl?: string

    }>

}

export interface Navigation {

    items: NavigationItem[]

}

export interface SiteSettings {

    siteName: string
    siteUrl: string

    logo: {
        asset: SanityImageSource
        alt: string

    }

    logoWidth: number
    navigation?: Navigation
    headerCta?: CtaButton
    defaultSeo?: SeoSettings
    favicon?: {
        asset: SanityImageSource
    }

    socialLinks?: {
        linkedin?: string
        twitter?: string
        facebook?: string
        instagram?: string

    }

}



export interface Page {

    _id: string
    title: string
    slug: string
    parentSlug?: string
    parentTitle?: string
    seo?: SeoSettings
    content?: any[] // Portable Text content
    publishedAt?: string
    showInNavigation?: boolean
    navigationOrder?: number

}

export interface PageSlug {

    slug: string
    parentSlug?: string

}