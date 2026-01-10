
/**
 * Script utilities
 * Voor het genereren van tracking scripts
 */

// Google Analytics script
export function generateGAScript(gaId: string): string {
    return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}');
  `
}

// Google Tag Manager script
export function generateGTMScript(gtmId: string): string {
    return `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');
  `
}

// Google Tag Manager noscript
export function generateGTMNoscript(gtmId: string): string {
    return `
    <iframe 
      src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
      height="0" 
      width="0" 
      style="display:none;visibility:hidden"
    ></iframe>
  `
}

// Facebook Pixel script
export function generateFBPixelScript(pixelId: string): string {
    return `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${pixelId}');
    fbq('track', 'PageView');
  `
}

// Facebook Pixel noscript
export function generateFBPixelNoscript(pixelId: string): string {
    return `
    <img 
      height="1" 
      width="1" 
      style="display:none"
      src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1"
    />
  `
}