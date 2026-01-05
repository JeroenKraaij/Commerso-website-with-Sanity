'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getImageUrl } from '@/sanity/lib/image'
import type { SiteSettings } from '@/types/sanity'

interface HeaderProps {
  settings: SiteSettings
}

export default function Header({ settings }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const { logo, logoWidth, navigation, headerCta } = settings

  const getButtonStyles = (style: string) => {
    switch (style) {
      case 'primary':
        return 'bg-primary hover:bg-[#E67E00] text-white'
      case 'secondary':
        return 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
      case 'ghost':
        return 'text-gray-900 hover:bg-gray-100'
      default:
        return 'bg-primary hover:bg-[#E67E00] text-white'
    }
  }

  const getFullSlug = (item: any) => {
    if (item.externalUrl) return item.externalUrl
    if (item.slug) return `/${item.slug}`
    return '#'
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {logo?.asset && (
              <Image
                src={getImageUrl(logo.asset, logoWidth * 2) || ''} // 2x for retina
                alt={logo.alt || settings.siteName}
                width={logoWidth}
                height={(logoWidth / 3)} // Approximate height ratio
                priority
                className="h-auto"
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation?.items?.map((item, index) => (
              <div key={index} className="relative group">
                {/* Main Nav Item */}
                {item.subItems && item.subItems.length > 0 ? (
                  // Has submenu
                  <button
                    className="text-gray-900 hover:text-primary transition-colors font-medium flex items-center gap-1"
                    onMouseEnter={() => setOpenSubmenu(item.label)}
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
                  // Regular link
                  <Link
                    href={getFullSlug(item)}
                    className="text-gray-900 hover:text-primary transition-colors font-medium"
                    target={item.externalUrl ? '_blank' : undefined}
                    rel={item.externalUrl ? 'noopener noreferrer' : undefined}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Submenu Dropdown */}
                {item.subItems && item.subItems.length > 0 && (
                  <div
                    className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <div className="py-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={getFullSlug(subItem)}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                          target={subItem.externalUrl ? '_blank' : undefined}
                          rel={subItem.externalUrl ? 'noopener noreferrer' : undefined}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            {headerCta && (
              <Link
                href={headerCta.link}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${getButtonStyles(headerCta.style)}`}
                target={headerCta.openInNewTab ? '_blank' : undefined}
                rel={headerCta.openInNewTab ? 'noopener noreferrer' : undefined}
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-4 pt-4">
              {navigation?.items?.map((item, index) => (
                <div key={index}>
                  {item.subItems && item.subItems.length > 0 ? (
                    <>
                      <button
                        className="w-full text-left text-gray-900 hover:text-primary font-medium flex items-center justify-between"
                        onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform ${openSubmenu === item.label ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openSubmenu === item.label && (
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={getFullSlug(subItem)}
                              className="text-gray-700 hover:text-primary"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={getFullSlug(item)}
                      className="text-gray-900 hover:text-primary font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {headerCta && (
                <Link
                  href={headerCta.link}
                  className={`px-6 py-3 rounded-full font-medium text-center ${getButtonStyles(headerCta.style)}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {headerCta.text}
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
