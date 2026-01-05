# Commerso Website - Sanity CMS Setup

## ✅ Wat is er opgezet?

### Sanity Schemas
1. **Site Settings** - Centrale plek voor:
   - Logo upload
   - Navigatie menu koppeling
   - Header CTA button
   - SEO defaults (title, description, OG image)
   - Favicon
   - Social media links

2. **Navigation** - Flexibel menu systeem:
   - Hoofdmenu items
   - Sub-menu items (dropdowns)
   - Interne en externe links

3. **Page** - Pagina's met:
   - Titel en slug
   - Parent/child relatie (voor /parent/child URLs)
   - SEO instellingen per pagina
   - Rich content met Portable Text
   - Navigatie volgorde

4. **SEO Object** - Herbruikbaar voor:
   - Meta title
   - Meta description
   - OG image
   - Keywords

5. **CTA Button Object** - Voor call-to-action buttons

## 🚀 Hoe te gebruiken

### Stap 1: Sanity Studio openen
```bash
# Start de development server (als nog niet draait)
npm run dev

# Ga naar Sanity Studio
http://localhost:3000/studio
```

### Stap 2: Site Settings invullen
1. Ga naar "Site Settings" in Sanity Studio
2. Vul de volgende velden in:
   - **Site Name**: "Commerso"
   - **Site URL**: "https://commerso.nl" (of je eigen URL)
   - **Logo**: Upload je Commerso logo
   - **Logo Width**: 150 (pas aan naar wens)

3. **Header** tabblad:
   - Upload logo
   - Stel header CTA button in (optioneel)

4. **SEO Defaults** tabblad:
   - SEO Title: "Commerso - Your Commercial AI Company"
   - SEO Description: Een korte beschrijving (150-160 karakters)
   - OG Image: Upload een social sharing image (1200x630px)

5. **Social** tabblad:
   - Vul social media links in

### Stap 3: Navigatie menu maken
1. Klik op "Navigation" → "Create new document"
2. Titel: "Main Navigation"
3. Voeg Navigation Items toe:
   - Label: "Home"
   - Link to Page: (kies een pagina) OF External URL: "/"

   - Label: "Diensten"
   - Link to Page: (diensten pagina)
   - Sub-menu Items: (optioneel, voor dropdown)
     - Label: "AI Consultancy"
     - Link to Page: (consultancy pagina)

   - Label: "Over ons"
   - Link to Page: (over ons pagina)

   - Label: "Contact"
   - Link to Page: (contact pagina)

4. Publish de navigatie

### Stap 4: Navigatie koppelen aan Site Settings
1. Ga terug naar "Site Settings"
2. Bij "Main Navigation" → selecteer de navigatie die je net hebt gemaakt
3. Publish

### Stap 5: Pagina's aanmaken
1. Klik op "Page" → "Create new document"
2. Vul in:
   - **Page Title**: "Over ons"
   - **Slug**: Klik "Generate" (wordt: "over-ons")
   - **Show in Navigation**: ✓ (aanvinken)
   - **Navigation Order**: 1
   - **SEO Settings**: Vul custom SEO in (optioneel)
   - **Page Content**: Schrijf content met de rich text editor

3. Publish de pagina

#### Sub-pagina's maken
Voor een URL zoals `/over-ons/team`:
1. Maak eerst de parent pagina "Over ons"
2. Maak een nieuwe pagina "Team"
3. Bij "Parent Page" → selecteer "Over ons"
4. De URL wordt automatisch: `/over-ons/team`

## 📁 Project Structuur

```
/
├── sanity/
│   ├── schemaTypes/
│   │   ├── siteSettings.ts     # Site-wide instellingen
│   │   ├── navigation.ts       # Menu structuur
│   │   ├── page.ts            # Pagina document
│   │   ├── seo.ts             # SEO object
│   │   ├── ctaButton.ts       # CTA button object
│   │   └── index.ts           # Schema exports
│   ├── lib/
│   │   ├── client.ts          # Sanity client
│   │   ├── queries.ts         # GROQ queries
│   │   └── image.ts           # Image helpers
│   └── env.ts                 # Environment variabelen
│
├── app/
│   ├── (site)/                # Main website route group
│   │   ├── layout.tsx         # Layout met Header
│   │   ├── page.tsx           # Homepage
│   │   └── [...slug]/
│   │       └── page.tsx       # Dynamic pagina routing
│   └── studio/                # Sanity Studio
│
├── components/
│   └── Header.tsx             # Header met nav + CTA
│
└── types/
    └── sanity.ts              # TypeScript types
```

## 🎨 Features

### SEO
- ✅ Dynamic metadata per pagina
- ✅ Fallback naar default SEO settings
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Custom favicon
- ✅ Keywords support

### Navigation
- ✅ Multi-level menu (hoofd + sub items)
- ✅ Interne en externe links
- ✅ Mobile responsive met hamburger menu
- ✅ Dropdown sub-menus op desktop
- ✅ Auto-generated breadcrumbs

### Pagina's
- ✅ Parent/child URL structuur
- ✅ Rich content met Portable Text
- ✅ Image upload in content
- ✅ Custom styling voor headings, quotes, etc.
- ✅ SEO per pagina

### Header
- ✅ Logo upload via CMS
- ✅ Dynamische navigatie
- ✅ CTA button (3 stijlen: primary, secondary, ghost)
- ✅ Mobile responsive

## 🔧 Technisch

### Queries
Alle GROQ queries staan in `/sanity/lib/queries.ts`:
- `SITE_SETTINGS_QUERY` - Site settings ophalen
- `PAGE_BY_SLUG_QUERY` - Pagina ophalen op slug
- `ALL_PAGES_QUERY` - Alle pagina's (voor navigatie)
- `ALL_SLUGS_QUERY` - Alle slugs (voor static generation)

### Revalidation
- Pagina's worden elke 60 seconden gerevalideerd (ISR)
- Settings worden elke 60 seconden gerevalideerd
- Pas dit aan in de `export const revalidate = 60` variabelen

### TypeScript Types
Alle types staan in `/types/sanity.ts` voor type-safety.

## 📝 Volgende Stappen

1. Vul Site Settings in Sanity Studio in
2. Maak navigatie menu aan
3. Creëer je eerste pagina's
4. Upload content en afbeeldingen
5. Test de website op localhost:3000
6. Deploy naar productie!

## 🎯 Tips

- Gebruik "Generate" button bij slugs voor SEO-vriendelijke URLs
- Vul altijd Alt text in bij afbeeldingen (voor SEO + accessibility)
- SEO Title: 50-60 karakters optimaal
- SEO Description: 150-160 karakters optimaal
- OG Images: 1200x630px voor beste resultaat
- Logo: SVG of PNG met transparante achtergrond werkt het beste
