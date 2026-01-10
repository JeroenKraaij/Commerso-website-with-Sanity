
// app/page.tsx
import { client } from '@/sanity/lib/client'
import { pageBySlugQuery } from '@/sanity/queries'
import type { Page } from '@/types/sanity'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { getImageUrl } from '@/sanity/lib/image'

export const revalidate = 60

export default async function HomePage() {
    // Haal de homepage op met slug '/'
    const page = await client.fetch<Page>(pageBySlugQuery, {
        slug: '/'
    })

    // Fallback als homepage nog niet bestaat
    if (!page) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Welkom</h1>
                    <p className="text-gray-600">
                        Maak een pagina met slug "/" aan in Sanity Studio
                    </p>
                </div>
            </div>
        )
    }

    return (
        <article className="max-w-4xl mx-auto px-6 py-12">
            {/* Page Title */}
            <header className="mb-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {page.title}
                </h1>
            </header>

            {/* Page Content */}
            {page.content && (
                <div className="prose prose-lg max-w-none">
                    <PortableText
                        value={page.content}
                        components={{
                            block: {
                                h1: ({children}) => <h1 className="text-4xl font-bold mb-4 mt-8">{children}</h1>,
                                h2: ({children}) => <h2 className="text-3xl font-bold mb-3 mt-6">{children}</h2>,
                                h3: ({children}) => <h3 className="text-2xl font-bold mb-2 mt-4">{children}</h3>,
                                h4: ({children}) => <h4 className="text-xl font-bold mb-2 mt-3">{children}</h4>,
                                normal: ({children}) => <p className="mb-4 leading-relaxed">{children}</p>,
                                blockquote: ({children}) => (
                                    <blockquote className="border-l-4 border-primary pl-4 italic my-4">
                                        {children}
                                    </blockquote>
                                ),
                            },
                            marks: {
                                strong: ({children}) => <strong className="font-bold">{children}</strong>,
                                em: ({children}) => <em className="italic">{children}</em>,
                                code: ({children}) => (
                                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                                        {children}
                                    </code>
                                ),
                                link: ({children, value}) => (
                                    <a
                                        href={value?.href}
                                        target={value?.blank ? '_blank' : undefined}
                                        rel={value?.blank ? 'noopener noreferrer' : undefined}
                                        className="text-primary hover:underline"
                                    >
                                        {children}
                                    </a>
                                ),
                            },
                            types: {
                                image: ({value}) => {
                                    if (!value?.asset) return null

                                    return (
                                        <figure className="my-8">
                                            <Image
                                                src={getImageUrl(value.asset, 1200) || ''}
                                                alt={value.alt || ''}
                                                width={1200}
                                                height={600}
                                                className="rounded-lg w-full h-auto"
                                            />
                                            {value.caption && (
                                                <figcaption className="text-center text-sm text-gray-600 mt-2">
                                                    {value.caption}
                                                </figcaption>
                                            )}
                                        </figure>
                                    )
                                },
                            },
                        }}
                    />
                </div>
            )}
        </article>
    )
}