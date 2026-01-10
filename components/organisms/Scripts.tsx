
// components/organisms/Scripts.tsx
import Script from 'next/script'
import { generateGAScript, generateGTMScript, generateFBPixelScript } from '@/sanity/utils/scripts'
import type { SiteSettings } from '@/types/sanity'

interface ScriptsProps {
    settings: SiteSettings
}

export default function Scripts({ settings }: ScriptsProps) {
    const scripts = settings.trackingScripts

    if (!scripts) return null

    return (
        <>
            {/* Google Analytics */}
            {scripts.googleAnalyticsId && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${scripts.googleAnalyticsId}`}
                        strategy="afterInteractive"
                    />
                    <Script
                        id="google-analytics"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: generateGAScript(scripts.googleAnalyticsId)
                        }}
                    />
                </>
            )}

            {/* Google Tag Manager */}
            {scripts.googleTagManagerId && (
                <Script
                    id="google-tag-manager"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: generateGTMScript(scripts.googleTagManagerId)
                    }}
                />
            )}

            {/* Facebook Pixel */}
            {scripts.facebookPixelId && (
                <Script
                    id="facebook-pixel"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: generateFBPixelScript(scripts.facebookPixelId)
                    }}
                />
            )}

            {/* Custom Head Scripts */}
            {scripts.customHeadScripts && (
                <Script
                    id="custom-head-scripts"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: scripts.customHeadScripts
                    }}
                />
            )}

            {/* Custom Body Scripts */}
            {scripts.customBodyScripts && (
                <Script
                    id="custom-body-scripts"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: scripts.customBodyScripts
                    }}
                />
            )}
        </>
    )
}