import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { client } from '@/sanity/lib/client';
import { SITE_SETTINGS_QUERY } from '@/sanity/lib/queries';
import { SiteSettings } from '@/types/sanity';
import Header from '@/components/organisms/Header';
import { getImageUrl } from '@/sanity/lib/image';
import { Metadata } from 'next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Generate default metadata from Sanity
export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch<SiteSettings>(SITE_SETTINGS_QUERY);
  const seo = settings.defaultSeo;
  const favicon = settings.favicon?.asset ? getImageUrl(settings.favicon.asset, 32, 32) : undefined;

  return {
    title: {
      template: `%s | ${settings.siteName}`,
      default: seo?.metaTitle || settings.siteName,
    },
    description: seo?.metaDescription || '',
    keywords: seo?.keywords,
    icons: {
      icon: favicon || '/favicon.ico',
    },
    openGraph: {
      type: 'website',
      siteName: settings.siteName,
      title: seo?.metaTitle || settings.siteName,
      description: seo?.metaDescription || '',
      images: seo?.ogImage?.asset ? [{ url: getImageUrl(seo.ogImage.asset, 1200, 630) || '' }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.metaTitle || settings.siteName,
      description: seo?.metaDescription || '',
      images: seo?.ogImage?.asset ? [getImageUrl(seo.ogImage.asset, 1200, 630) || ''] : undefined,
    },
    metadataBase: new URL(settings.siteUrl),
  };
}

// Revalidate settings every 60 seconds
export const revalidate = 60;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await client.fetch<SiteSettings>(SITE_SETTINGS_QUERY);

  return (
    <html lang="nl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header settings={settings} />
        <main>{children}</main>
      </body>
    </html>
  );
}
