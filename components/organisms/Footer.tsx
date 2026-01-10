// components/organisms/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'
import { getImageUrl } from '@/sanity/lib/image'
import { formatCopyright, getActiveSocialLinks } from '@/sanity/utils/formatting'
import { isInternalLink } from '@/sanity/utils/url'
import type { SiteSettings } from '@/types/sanity'
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa'

interface FooterProps {
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

export default function Footer({ settings }: FooterProps) {
    const { footer, socialLinks, logo, siteName } = settings
    const activeSocials: { platform: string; url: string }[] = getActiveSocialLinks(socialLinks)

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Footer Columns */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Logo Column */}
                    <div>
                        {logo?.asset && (
                            <Image
                                src={getImageUrl(logo.asset, 150) || ''}
                                alt={logo.alt || siteName}
                                width={150}
                                height={50}
                                className="h-auto mb-4 brightness-0 invert"
                            />
                        )}
                    </div>

                    {/* Dynamic Columns */}
                    {footer?.columns?.map((column, index) => (
                        <div key={index}>
                            <h3 className="font-bold mb-4 text-lg">{column.title}</h3>
                            <ul className="space-y-2">
                                {column.links?.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        {isInternalLink(link.url) ? (
                                            <Link
                                                href={link.url}
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        ) : (
                                            <a
                                                href={link.url}
                                                target={link.openInNewTab ? "_blank" : undefined}
                                                rel={link.openInNewTab ? "noopener noreferrer" : undefined}
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                {link.label}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Social Links */}
                {footer?.showSocialLinks && activeSocials.length > 0 && (
                    <div className="flex gap-4 mb-8 pb-8 border-b border-gray-800">
                        {activeSocials.map(({ platform, url }) => {
                            const Icon = socialIcons[platform as keyof typeof socialIcons]
                            if (!Icon) return null

                            return (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label={platform}
                                >
                                    <Icon className="w-6 h-6" />
                                </a>
                            )
                        })}
                    </div>
                )}

                {/* Bottom Text */}
                {footer?.bottomText && (
                    <p className="text-sm text-gray-400 mb-4">
                        {footer.bottomText}
                    </p>
                )}

                {/* Copyright */}
                <p className="text-sm text-gray-400">
                    {formatCopyright(footer?.copyrightText || `© ${new Date().getFullYear()} ${siteName}`)}
                </p>
            </div>
        </footer>
    )
}