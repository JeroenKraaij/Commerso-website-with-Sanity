
// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { client } from '@/sanity/lib/client';
import type { SiteSettings } from '@/types/sanity';
import { getImageUrl } from '@/sanity/lib/image';
import { generateCSSVariables } from '@/sanity/utils/styles';
import type { Metadata } from 'next';
import { siteSettingsQuery } from "@/sanity/queries";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
    try {
        const settings = await client.fetch<SiteSettings>(siteSettingsQuery);

        if (!settings) {
            return {
                title: 'Commerso',
                description: 'Website',
            };
        }

        const seo = settings.defaultSeo;
        const favicon = settings.favicon?.asset ? getImageUrl(settings.favicon.asset, 32, 32) : undefined;

        return {
            title: {
                template: `%s | ${settings.siteName}`,
                default: seo?.metaTitle || settings.siteName,
            },
            description: seo?.metaDescription || settings.siteDescription || '',
            keywords: seo?.keywords,
            icons: {
                icon: favicon || '/favicon.ico',
            },
            openGraph: {
                type: 'website',
                siteName: settings.siteName,
                title: seo?.metaTitle || settings.siteName,
                description: seo?.metaDescription || settings.siteDescription || '',
                images: seo?.ogImage?.asset ? [{
                    url: getImageUrl(seo.ogImage.asset, 1200, 630) || ''
                }] : undefined,
            },
            metadataBase: new URL(settings.siteUrl || 'http://localhost:3000'),
        };
    } catch (error) {
        console.error('Error fetching site settings for metadata:', error);
        return {
            title: 'Commerso',
            description: 'Website',
        };
    }
}

export const revalidate = 60;

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    let settings: SiteSettings | null = null;

    try {
        settings = await client.fetch<SiteSettings>(siteSettingsQuery);
    } catch (error) {
        console.error('Error fetching site settings:', error);
    }

    return (
        <html lang="nl">
        <head>
            {/* CSS Variables voor kleuren */}
            {settings?.colors && (
                <style dangerouslySetInnerHTML={{
                    __html: generateCSSVariables(settings.colors)
                }} />
            )}
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
};