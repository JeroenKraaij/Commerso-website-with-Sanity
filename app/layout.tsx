import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { client } from '@/sanity/lib/client';
import { SITE_SETTINGS_QUERY } from '@/sanity/lib/queries';
import { SiteSettings } from '@/types/sanity';
<<<<<<< HEAD
import Header from '@/components/organisms/Header';
import { getImageUrl } from '@/sanity/lib/image';
import { Metadata } from 'next';
=======
import Header from '@/components/Header';
>>>>>>> 5f878dddc9c0f4e92462c51c903da76ac67b2c80

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await client.fetch<SiteSettings | null>(SITE_SETTINGS_QUERY);

  return (
    <html lang="nl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {settings && <Header settings={settings} />}
        <main>{children}</main>
      </body>
    </html>
  );
}
