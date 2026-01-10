// components/organisms/Header.tsx
'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImageUrl } from '@/sanity/lib/image'
import { getButtonClasses } from '@/sanity/utils/styles'
import { getNavigationUrl, getLinkTarget, getLinkRel } from '@/sanity/utils/url'
import { getActiveSocialLinks } from '@/sanity/utils/formatting'
import type { SiteSettings } from '@/types/sanity'
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa'

interface HeaderProps {
    settings: SiteSettings
}

const socialIcons = {
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    facebook: FaFacebook,
    instagram: FaInstagram,
    youtube: FaYoutube,
    github: FaGithub,
}

export default function Header({ settings }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

    const { logo, logoWidth, navigation, headerCta, socialLinks } = settings
    const activeSocials: { platform: string; url: string }[] = getActiveSocialLinks(socialLinks)

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
            <nav className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        {logo?.asset && (
                            <Image
                                src={getImageUrl(logo.asset, logoWidth * 2) || ''}
                                alt={logo.alt || settings.siteName}
                                width={logoWidth}
                                height={logoWidth / 3}
                                priority
                                className="h-auto"
                            />
                        )}
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navigation?.items?.map((item, index) => (
                            <div key={index} className="relative group">
                                {item.subItems && item.subItems.length > 0 ? (
                                    <button
                                        className="text-gray-900 hover:text-primary transition-colors font-medium flex items-center gap-1"
                                    >
                                        {item.label}
                                        <svg
                                            className="w-4 h-4 transition-transform group-hover:rotate-180"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                ) : (
                                    <Link
                                        href={getNavigationUrl(item)}
                                        className="text-gray-900 hover:text-primary transition-colors font-medium"
                                        target={getLinkTarget(!!item.externalUrl)}
                                        rel={getLinkRel(!!item.externalUrl)}
                                    >
                                        {item.label}
                                    </Link>
                                )}

                                {/* Submenu Dropdown */}
                                {item.subItems && item.subItems.length > 0 && (
                                    <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <div className="py-2">
                                            {item.subItems.map((subItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    href={getNavigationUrl(subItem)}
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                                    target={getLinkTarget(!!subItem.externalUrl)}
                                                    rel={getLinkRel(!!subItem.externalUrl)}
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Social Media Icons */}
                        {activeSocials.length > 0 && (
                            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                                {activeSocials.map(({ platform, url }) => {
                                    const Icon = socialIcons[platform as keyof typeof socialIcons]
                                    if (!Icon) return null

                                    return (
                                        <a
                                            key={platform}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-primary transition-colors"
                                            aria-label={platform}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </a>
                                    )
                                })}
                            </div>
                        )}

                        {/* CTA Button */}
                        {headerCta && (
                            <Link
                                href={headerCta.url}
                                className={getButtonClasses(headerCta.style)}
                                target={getLinkTarget(headerCta.openInNewTab || false)}
                                rel={getLinkRel(headerCta.openInNewTab || false)}
                            >
                                {headerCta.text}
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-900"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>
        </header>
    )
}