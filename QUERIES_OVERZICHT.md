# 📋 Sanity Queries Overzicht

## 📁 Structuur

```
sanity/lib/queries/
├── index.ts          → Re-exports alle queries
├── settings.ts       → Site Settings queries (1 query)
├── pages.ts          → Page queries (6 queries)
└── navigation.ts     → Navigation queries (3 queries)
```

**Totaal: 10 queries** voor alle schemas

---

## 1️⃣ SETTINGS.TS (Site Settings)

### `SITE_SETTINGS_QUERY`

**Wat doet het:**
Haalt ALLE site-wide instellingen op (singleton - er is maar 1 document)

**Retourneert:**
```typescript
{
  // ALGEMEEN
  siteName: string
  siteUrl: string
  siteDescription: string

  // BRANDING
  logo: { asset, alt }
  logoWidth: number
  favicon: { asset }
  colors: {
    primaryColor: string     // Hex bijv. #FF8C00
    secondaryColor: string   // Hex bijv. #C84338
    accentColor: string
    backgroundColor: string
    textColor: string
  }

  // HEADER
  navigation: {
    _id: string
    title: string
    items: Array<{
      label: string
      slug: string
      pageId: string
      externalUrl: string
      subItems: Array<{...}>
    }>
  }
  headerCta: {
    text: string
    link: string
    style: 'primary' | 'secondary' | 'ghost'
    openInNewTab: boolean
  }

  // FOOTER
  footer: {
    copyrightText: string
    showSocialLinks: boolean
    columns: Array<{
      title: string
      links: Array<{
        label: string
        url: string
        openInNewTab: boolean
      }>
    }>
    bottomText: string
  }

  // CONTACT
  contact: {
    email: string
    phone: string
    address: {
      street: string
      postalCode: string
      city: string
      country: string
    }
    kvkNumber: string
    vatNumber: string
  }

  // SOCIAL MEDIA
  socialLinks: {
    linkedin: string
    twitter: string
    facebook: string
    instagram: string
    youtube: string
    github: string
  }

  // SEO
  defaultSeo: {
    metaTitle: string
    metaDescription: string
    ogImage: { asset }
    keywords: string[]
  }

  // SCRIPTS
  trackingScripts: {
    googleAnalyticsId: string
    googleTagManagerId: string
    facebookPixelId: string
    customHeadScripts: string
    customBodyScripts: string
    cookieConsent: boolean
  }
}
```

**Gebruik:**
```typescript
import { client } from '@/sanity/lib/client'
import { SITE_SETTINGS_QUERY } from '@/sanity/lib/queries'

const settings = await client.fetch(SITE_SETTINGS_QUERY)
```

**Waar te gebruiken:**
- Layout.tsx (voor metadata, favicon)
- Header component (logo, nav, CTA)
- Footer component (footer data, social links)
- Contact pagina (contact info)
- Scripts component (analytics)

---

## 2️⃣ PAGES.TS (Pagina's)

### `PAGE_BY_SLUG_QUERY`

**Parameters:** `{ slug: string }`

**Wat doet het:**
Haalt een enkele pagina op op basis van slug

**Gebruik:**
```typescript
const page = await client.fetch(PAGE_BY_SLUG_QUERY, { slug: 'over-ons' })
```

**Retourneert:**
- Volledige pagina met content, SEO, parent info

---

### `ALL_PAGES_QUERY`

**Wat doet het:**
Haalt alle pagina's op die in navigatie moeten verschijnen

**Gebruik:**
```typescript
const pages = await client.fetch(ALL_PAGES_QUERY)
```

**Waar te gebruiken:**
- Sitemap generatie
- Navigatie menu bouwen

---

### `ALL_SLUGS_QUERY`

**Wat doet het:**
Haalt alle page slugs op voor static site generation

**Gebruik:**
```typescript
export async function generateStaticParams() {
  const slugs = await client.fetch(ALL_SLUGS_QUERY)
  return slugs.map(...)
}
```

**Waar te gebruiken:**
- `generateStaticParams()` in Next.js

---

### `CHILD_PAGES_QUERY`

**Parameters:** `{ parentId: string }`

**Wat doet het:**
Haalt alle child pagina's van een parent op

**Gebruik:**
```typescript
const children = await client.fetch(CHILD_PAGES_QUERY, { parentId: page._id })
```

**Waar te gebruiken:**
- Tonen van sub-pagina's
- Breadcrumb navigatie

---

### `PAGE_BY_ID_QUERY`

**Parameters:** `{ id: string }`

**Wat doet het:**
Haalt pagina op basis van ID (handig voor previews)

**Gebruik:**
```typescript
const page = await client.fetch(PAGE_BY_ID_QUERY, { id: 'abc123' })
```

---

### `RECENT_PAGES_QUERY`

**Parameters:** `{ limit: number }`

**Wat doet het:**
Haalt meest recente pagina's op (gesorteerd op publishedAt)

**Gebruik:**
```typescript
const recent = await client.fetch(RECENT_PAGES_QUERY, { limit: 5 })
```

**Waar te gebruiken:**
- "Recent toegevoegd" sectie
- Sidebar met nieuwe content

---

## 3️⃣ NAVIGATION.TS (Navigatie)

### `NAVIGATION_BY_ID_QUERY`

**Parameters:** `{ id: string }`

**Wat doet het:**
Haalt navigatie menu op basis van ID

**Gebruik:**
```typescript
const nav = await client.fetch(NAVIGATION_BY_ID_QUERY, { id: 'nav123' })
```

---

### `ALL_NAVIGATIONS_QUERY`

**Wat doet het:**
Haalt alle navigatie menus op

**Gebruik:**
```typescript
const allNavs = await client.fetch(ALL_NAVIGATIONS_QUERY)
```

**Waar te gebruiken:**
- Admin panel voor menu selectie
- Overzicht van alle menus

---

### `MAIN_NAVIGATION_QUERY`

**Wat doet het:**
Haalt het hoofdmenu op (title = "Main Navigation")

**Gebruik:**
```typescript
const mainNav = await client.fetch(MAIN_NAVIGATION_QUERY)
```

**Waar te gebruiken:**
- Als alternatief voor navigatie via Site Settings

---

## 💡 Import Voorbeelden

### **Alles importeren:**
```typescript
import {
  SITE_SETTINGS_QUERY,
  PAGE_BY_SLUG_QUERY,
  ALL_SLUGS_QUERY,
  MAIN_NAVIGATION_QUERY
} from '@/sanity/lib/queries'
```

### **Specifiek importeren:**
```typescript
import { SITE_SETTINGS_QUERY } from '@/sanity/lib/queries/settings'
import { PAGE_BY_SLUG_QUERY } from '@/sanity/lib/queries/pages'
```

Beide werken! De eerste is handiger.

---

## 🎯 Praktische Voorbeelden

### **Layout.tsx - SEO en Header**
```typescript
const settings = await client.fetch(SITE_SETTINGS_QUERY)

return (
  <html>
    <head>
      <title>{settings.defaultSeo.metaTitle}</title>
      <link rel="icon" href={getFaviconUrl(settings.favicon)} />
    </head>
    <body>
      <Header
        logo={settings.logo}
        nav={settings.navigation}
        cta={settings.headerCta}
      />
      {children}
      <Footer
        footer={settings.footer}
        social={settings.socialLinks}
      />
    </body>
  </html>
)
```

### **Dynamic Page Route**
```typescript
// app/[...slug]/page.tsx

export async function generateStaticParams() {
  const slugs = await client.fetch(ALL_SLUGS_QUERY)
  return slugs.map(...)
}

export default async function Page({ params }) {
  const page = await client.fetch(PAGE_BY_SLUG_QUERY, { slug: params.slug })
  return <PageContent page={page} />
}
```

### **Contact Pagina**
```typescript
const settings = await client.fetch(SITE_SETTINGS_QUERY)
const { contact } = settings

return (
  <div>
    <h1>Contact</h1>
    <p>Email: {contact.email}</p>
    <p>Tel: {contact.phone}</p>
    <address>
      {contact.address.street}<br/>
      {contact.address.postalCode} {contact.address.city}
    </address>
  </div>
)
```

---

## ✅ Checklist

Wanneer gebruik je welke query?

- ☑️ **Site-wide data** → `SITE_SETTINGS_QUERY`
- ☑️ **Enkele pagina** → `PAGE_BY_SLUG_QUERY`
- ☑️ **Alle pagina's** → `ALL_PAGES_QUERY`
- ☑️ **Static generation** → `ALL_SLUGS_QUERY`
- ☑️ **Sub-pagina's** → `CHILD_PAGES_QUERY`
- ☑️ **Nieuwste content** → `RECENT_PAGES_QUERY`
- ☑️ **Navigatie menu** → Via `SITE_SETTINGS_QUERY` of `MAIN_NAVIGATION_QUERY`

---

## 🔧 Performance Tips

1. **Cache settings:** Site Settings veranderen niet vaak
   ```typescript
   export const revalidate = 3600 // 1 uur
   ```

2. **Only fetch wat je nodig hebt:** Pas GROQ query aan
   ```typescript
   // Alleen logo en naam
   *[_type == "siteSettings"][0] { siteName, logo }
   ```

3. **Static generation:** Gebruik `ALL_SLUGS_QUERY` voor SSG
