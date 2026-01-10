
/**
 * Style utilities
 * Voor het genereren van CSS en Tailwind classes
 */

// Genereer CSS variabelen voor kleuren
export function generateCSSVariables(colors: any): string {
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

// Genereer Tailwind kleuren object
export function generateTailwindColors(colors: any) {
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