import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { PAGE_BY_SLUG_QUERY, ALL_SLUGS_QUERY, SITE_SETTINGS_QUERY } from '@/sanity/lib/queries'
import { Page as PageType, SiteSettings } from '@/types/sanity'
import { PortableText } from '@portabletext/react'
import { getImageUrl } from '@/sanity/lib/image'
import Image from 'next/image'

interface PageProps {
  params: { slug: string[] }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const pageSlug = params.slug[params.slug.length - 1]
  const page = await client.fetch<PageType>(PAGE_BY_SLUG_QUERY, { slug: pageSlug })
  const settings = await client.fetch<SiteSettings>(SITE_SETTINGS_QUERY)
  if (!page) {
    return { title: 'Page Not Found' }
  }
  const seo = page.seo || settings.defaultSeo
  const title = seo?.metaTitle || page.title
  const description = seo?.metaDescription || ''
  const ogImage = seo?.ogImage?.asset ? getImageUrl(seo.ogImage.asset, 1200, 630) : undefined
  return {
    title,
    description,
    keywords: seo?.keywords,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${settings.siteUrl}/${params.slug.join('/')}`,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  }
}

export async function generateStaticParams() {
  const pages = await client.fetch<{ slug: string; parentSlug?: string }[]>(ALL_SLUGS_QUERY)
  return pages.map((page) => {
    const slugArray = page.parentSlug ? [page.parentSlug, page.slug] : [page.slug]
    return { slug: slugArray }
  })
}

export const revalidate = 60

export default async function Page({ params }: PageProps) {
  const pageSlug = params.slug[params.slug.length - 1]
  const page = await client.fetch<PageType>(PAGE_BY_SLUG_QUERY, { slug: pageSlug })
  if (!page) {
    notFound()
  }
  const portableTextComponents = {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset) return null
        return (
          <figure className="my-8">
            <Image
              src={getImageUrl(value.asset, 1200) || ''}
              alt={value.alt || ''}
              width={1200}
              height={675}
              className="rounded-lg"
            />
            {value.caption && (
              <figcaption className="mt-2 text-center text-sm text-gray-600">
                {value.caption}
              </figcaption>
            )}
          </figure>
        )
      },
    },
    block: {
      h1: ({ children }: any) => <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-12">{children}</h1>,
      h2: ({ children }: any) => <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-10">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 mt-8">{children}</h3>,
      h4: ({ children }: any) => <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 mt-6">{children}</h4>,
      blockquote: ({ children }: any) => <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-lg text-gray-700">{children}</blockquote>,
      normal: ({ children }: any) => <p className="text-lg text-gray-700 leading-relaxed mb-4">{children}</p>,
    },
    marks: {
      link: ({ children, value }: any) => {
        const target = value?.blank ? '_blank' : undefined
        const rel = value?.blank ? 'noopener noreferrer' : undefined
        return (
          <a href={value?.href} target={target} rel={rel} className="text-primary hover:underline font-medium">
            {children}
          </a>
        )
      },
      strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
      em: ({ children }: any) => <em className="italic">{children}</em>,
      code: ({ children }: any) => <code className="bg-gray-100 text-secondary px-2 py-1 rounded text-sm font-mono">{children}</code>,
    },
  }
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      {page.parentTitle && (
        <nav className="text-sm text-gray-600 mb-8">
          <span>{page.parentTitle}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{page.title}</span>
        </nav>
      )}
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">{page.title}</h1>
      {page.content && (
        <div className="prose prose-lg max-w-none">
          <PortableText value={page.content} components={portableTextComponents} />
        </div>
      )}
    </article>
  )
}
