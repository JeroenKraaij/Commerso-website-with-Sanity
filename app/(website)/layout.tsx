
// app/(website)/layout.tsx
import { client } from '@/sanity/lib/client';
import type { SiteSettings } from '@/types/sanity';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import Scripts from '@/components/organisms/Scripts';
import { siteSettingsQuery } from "@/sanity/queries";

export default async function WebsiteLayout({
                                                children,
                                            }: {
    children: React.ReactNode;
}) {
    const settings = await client.fetch<SiteSettings>(siteSettingsQuery);

    if (!settings) {
        return <>{children}</>;
    }

    return (
        <>
            <Header settings={settings} />
            <main>{children}</main>
            <Footer settings={settings} />
            <Scripts settings={settings} />
        </>
    );
}