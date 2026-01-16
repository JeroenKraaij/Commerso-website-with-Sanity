
// sanity/utils/styles.ts
import type { ColorSettings, TypographySettings } from '@/types/sanity'

/**
 * Style utilities
 * Voor het genereren van CSS en Tailwind classes
 */

// Genereer CSS variabelen voor kleuren
export function generateCSSVariables(colors: ColorSettings): string {
    if (!colors) return ''

    return `
    :root {
      --color-primary: ${colors.primaryColor || '#FF8C00'};
      --color-secondary: ${colors.secondaryColor || '#C84338'};
      --color-accent: ${colors.accentColor || '#000000'};
      --color-background: ${colors.backgroundColor || '#FFFFFF'};
      --color-text: ${colors.textColor || '#000000'};
    }
  `.trim()
}

// Genereer @font-face declarations
export function generateFontFaces(typography?: TypographySettings): string {
    if (!typography) return ''

    let fontFaces = ''

    // Heading font
    if (typography.headingFont?.file) {
        typography.headingFont.file.forEach(font => {
            if (font.file?.asset?.url) {
                fontFaces += `
        @font-face {
          font-family: '${typography.headingFont!.name}';
          src: url('${font.file.asset.url}') format('woff2');
          font-weight: ${font.weight};
          font-display: swap;
        }
        `
            }
        })
    }

    // Body font
    if (typography.bodyFont?.file) {
        typography.bodyFont.file.forEach(font => {
            if (font.file?.asset?.url) {
                fontFaces += `
        @font-face {
          font-family: '${typography.bodyFont!.name}';
          src: url('${font.file.asset.url}') format('woff2');
          font-weight: ${font.weight};
          font-display: swap;
        }
        `
            }
        })
    }

    return fontFaces
}

// Genereer typography CSS variabelen
export function generateTypographyVariables(typography?: TypographySettings): string {
    if (!typography) return ''

    const headingFontFamily = typography.headingFont
        ? `'${typography.headingFont.name}', ${typography.headingFont.fallback}`
        : 'system-ui, -apple-system, sans-serif'

    const bodyFontFamily = typography.bodyFont
        ? `'${typography.bodyFont.name}', ${typography.bodyFont.fallback}`
        : 'system-ui, -apple-system, sans-serif'

    return `
    :root {
      /* Font Families */
      --font-heading: ${headingFontFamily};
      --font-body: ${bodyFontFamily};
      
      /* H1 */
      --h1-size-mobile: ${typography.h1?.mobile || 32}px;
      --h1-size-tablet: ${typography.h1?.tablet || 40}px;
      --h1-size-desktop: ${typography.h1?.desktop || 48}px;
      --h1-weight: ${typography.h1?.weight || '700'};
      --h1-line-height: ${typography.h1?.lineHeight || 1.2};
      
      /* H2 */
      --h2-size-mobile: ${typography.h2?.mobile || 28}px;
      --h2-size-tablet: ${typography.h2?.tablet || 32}px;
      --h2-size-desktop: ${typography.h2?.desktop || 40}px;
      --h2-weight: ${typography.h2?.weight || '700'};
      --h2-line-height: ${typography.h2?.lineHeight || 1.3};
      
      /* H3 */
      --h3-size-mobile: ${typography.h3?.mobile || 24}px;
      --h3-size-tablet: ${typography.h3?.tablet || 28}px;
      --h3-size-desktop: ${typography.h3?.desktop || 32}px;
      --h3-weight: ${typography.h3?.weight || '600'};
      --h3-line-height: ${typography.h3?.lineHeight || 1.3};
      
      /* H4 */
      --h4-size-mobile: ${typography.h4?.mobile || 20}px;
      --h4-size-tablet: ${typography.h4?.tablet || 22}px;
      --h4-size-desktop: ${typography.h4?.desktop || 24}px;
      --h4-weight: ${typography.h4?.weight || '600'};
      --h4-line-height: ${typography.h4?.lineHeight || 1.4};
      
      /* H5 */
      --h5-size-mobile: ${typography.h5?.mobile || 18}px;
      --h5-size-tablet: ${typography.h5?.tablet || 19}px;
      --h5-size-desktop: ${typography.h5?.desktop || 20}px;
      --h5-weight: ${typography.h5?.weight || '600'};
      --h5-line-height: ${typography.h5?.lineHeight || 1.4};
      
      /* Body Text */
      --body-size-mobile: ${typography.bodyText?.mobile || 16}px;
      --body-size-tablet: ${typography.bodyText?.tablet || 16}px;
      --body-size-desktop: ${typography.bodyText?.desktop || 18}px;
      --body-weight: ${typography.bodyText?.weight || '400'};
      --body-line-height: ${typography.bodyText?.lineHeight || 1.6};
    }
    
    /* Apply heading styles */
    h1 {
      font-family: var(--font-heading);
      font-size: var(--h1-size-mobile);
      font-weight: var(--h1-weight);
      line-height: var(--h1-line-height);
    }
    
    h2 {
      font-family: var(--font-heading);
      font-size: var(--h2-size-mobile);
      font-weight: var(--h2-weight);
      line-height: var(--h2-line-height);
    }
    
    h3 {
      font-family: var(--font-heading);
      font-size: var(--h3-size-mobile);
      font-weight: var(--h3-weight);
      line-height: var(--h3-line-height);
    }
    
    h4 {
      font-family: var(--font-heading);
      font-size: var(--h4-size-mobile);
      font-weight: var(--h4-weight);
      line-height: var(--h4-line-height);
    }
    
    h5 {
      font-family: var(--font-heading);
      font-size: var(--h5-size-mobile);
      font-weight: var(--h5-weight);
      line-height: var(--h5-line-height);
    }
    
    body {
      font-family: var(--font-body);
      font-size: var(--body-size-mobile);
      font-weight: var(--body-weight);
      line-height: var(--body-line-height);
    }
    
    /* Tablet breakpoint */
    @media (min-width: 768px) {
      h1 { font-size: var(--h1-size-tablet); }
      h2 { font-size: var(--h2-size-tablet); }
      h3 { font-size: var(--h3-size-tablet); }
      h4 { font-size: var(--h4-size-tablet); }
      h5 { font-size: var(--h5-size-tablet); }
      body { font-size: var(--body-size-tablet); }
    }
    
    /* Desktop breakpoint */
    @media (min-width: 1024px) {
      h1 { font-size: var(--h1-size-desktop); }
      h2 { font-size: var(--h2-size-desktop); }
      h3 { font-size: var(--h3-size-desktop); }
      h4 { font-size: var(--h4-size-desktop); }
      h5 { font-size: var(--h5-size-desktop); }
      body { font-size: var(--body-size-desktop); }
    }
  `.trim()
}

// Genereer Tailwind kleuren object
export function generateTailwindColors(colors: ColorSettings) {
    if (!colors) return {}

    return {
        primary: colors.primaryColor || '#FF8C00',
        secondary: colors.secondaryColor || '#C84338',
        accent: colors.accentColor || '#000000',
    }
}

// Button classes op basis van style
export function getButtonClasses(style: string): string {
    const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2'

    const styleClasses: Record<string, string> = {
        primary: 'bg-primary text-white hover:bg-primary/90',
        secondary: 'bg-secondary text-white hover:bg-secondary/90',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
        ghost: 'text-primary hover:bg-primary/10'
    }

    return `${baseClasses} ${styleClasses[style] || styleClasses.primary}`
}