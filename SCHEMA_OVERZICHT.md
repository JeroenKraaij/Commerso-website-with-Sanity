# 📋 Sanity Schema Overzicht - Site Settings

## Structuur

Alle schemas zijn netjes georganiseerd zonder extra directories:

```
sanity/schemaTypes/
├── siteSettings.ts          ← Hoofddocument (alles samenvoegen)
├── contactInfo.ts           ← Object: Contact gegevens
├── socialLinks.ts           ← Object: Social media
├── footerSettings.ts        ← Object: Footer
├── colorSettings.ts         ← Object: Kleuren
├── scripts.ts               ← Object: Scripts & tracking
├── seo.ts                   ← Object: SEO (bestaand)
├── ctaButton.ts            ← Object: CTA button (bestaand)
├── page.ts                  ← Document: Pagina's
├── navigation.ts            ← Document: Navigatie
└── index.ts                 ← Alle exports
```

---

## 📦 Wat zit er in Site Settings?

### **8 Tabbladen** in Sanity Studio:

1. **Algemeen** - Basisinformatie
2. **Branding** - Logo, favicon, kleuren
3. **Header** - Navigatie en CTA
4. **Footer** - Footer content
5. **Contact** - Bedrijfsgegevens
6. **Social Media** - Social links
7. **SEO** - SEO defaults
8. **Scripts** - Analytics & tracking

---

## 1️⃣ ALGEMEEN

**Velden:**
- ✅ Website Naam
- ✅ Website URL
- ✅ Website Beschrijving

**Doel:** Basis informatie over je site

---

## 2️⃣ BRANDING (colorSettings.ts, logo, favicon)

**Velden:**
- ✅ Logo (image upload + alt text)
- ✅ Logo Breedte (pixels)
- ✅ Favicon (browser icon)
- ✅ **Kleurenschema:**
  - Primaire Kleur (hex, bijv. #FF8C00)
  - Secundaire Kleur (hex, bijv. #C84338)
  - Accent Kleur
  - Achtergrond Kleur
  - Tekst Kleur

**Validatie:**
- Hex kleuren worden automatisch gevalideerd
- Logo alt-tekst is verplicht

**Doel:** Visuele identiteit van je website

---

## 3️⃣ HEADER

**Velden:**
- ✅ Hoofd Navigatie (reference naar navigation document)
- ✅ Header CTA Button (object met text, link, style, openInNewTab)

**Doel:** Header configuratie

---

## 4️⃣ FOOTER (footerSettings.ts)

**Velden:**
- ✅ Copyright Tekst
- ✅ Toon Social Media Links (boolean)
- ✅ **Footer Kolommen** (array, max 4):
  - Kolom Titel
  - **Links** (array):
    - Label
    - URL (intern of extern)
    - Open in nieuw tabblad
- ✅ Extra Tekst Onder (optioneel)

**Voorbeeld:**
```
Kolom 1: Diensten
  - AI Consultancy (/diensten/consultancy)
  - Custom Solutions (/diensten/solutions)

Kolom 2: Bedrijf
  - Over ons (/over-ons)
  - Contact (/contact)
```

**Doel:** Flexibele footer met kolommen en links

---

## 5️⃣ CONTACT (contactInfo.ts)

**Velden:**
- ✅ Email (gevalideerd)
- ✅ Telefoonnummer
- ✅ **Adres:**
  - Straat + Huisnummer
  - Postcode
  - Stad
  - Land (default: Nederland)
- ✅ KvK Nummer (optioneel)
- ✅ BTW Nummer (optioneel)

**Doel:** Bedrijfsgegevens voor footer, contact pagina, etc.

---

## 6️⃣ SOCIAL MEDIA (socialLinks.ts)

**Velden:**
- ✅ LinkedIn URL
- ✅ Twitter / X URL
- ✅ Facebook URL
- ✅ Instagram URL
- ✅ YouTube URL
- ✅ GitHub URL (optioneel)

**Validatie:**
- Alleen geldige URLs toegestaan

**Doel:** Social media links voor footer/header

---

## 7️⃣ SEO (seo.ts - bestaand)

**Velden:**
- ✅ SEO Title (max 60 karakters)
- ✅ SEO Description (max 160 karakters)
- ✅ OG Image (1200x630px)
- ✅ Keywords (tags)

**Doel:** Standaard SEO voor alle pagina's zonder custom SEO

---

## 8️⃣ SCRIPTS (scripts.ts)

**Velden:**
- ✅ Google Analytics ID (G-XXXXXXXXXX)
- ✅ Google Tag Manager ID (GTM-XXXXXXX)
- ✅ Facebook Pixel ID
- ✅ Custom Scripts (Head)
- ✅ Custom Scripts (Body)
- ✅ Cookie Consent Actief (boolean)

**Validatie:**
- GA ID moet beginnen met G- of UA-
- GTM ID moet beginnen met GTM-

**Doel:** Tracking en analytics scripts

---

## 🎯 Hoe te gebruiken in Sanity Studio?

1. **Ga naar Sanity Studio:** `/studio`
2. **Klik op "Site Settings"**
3. **Je ziet 8 tabbladen aan de bovenkant**
4. **Vul elk tabblad in:**
   - Algemeen → Naam en URL
   - Branding → Logo uploaden, kleuren instellen
   - Header → Navigatie selecteren, CTA toevoegen
   - Footer → Footer kolommen aanmaken
   - Contact → Bedrijfsgegevens invullen
   - Social Media → Social links toevoegen
   - SEO → Defaults instellen
   - Scripts → Google Analytics toevoegen

5. **Publish** wanneer klaar!

---

## ✅ Wat is er speciaal?

1. **Georganiseerd in tabbladen** - Overzichtelijk
2. **Validatie** - Fouten worden voorkomen (email, URLs, hex kleuren)
3. **Descriptions** - Elk veld heeft uitleg
4. **Defaults** - Sommige velden hebben standaard waarden
5. **Flexibel** - Footer kolommen zijn dynamisch
6. **Nederlands** - Alle labels en teksten in het Nederlands

---

## 🔧 Technisch

**Object types (herbruikbaar):**
- `contactInfo` - Kan ook op contact pagina gebruikt worden
- `socialLinks` - Kan overal gebruikt worden
- `footerSettings` - Specifiek voor footer
- `colorSettings` - Kleuren voor heel de site
- `scripts` - Tracking en scripts
- `seo` - Voor alle pagina's
- `ctaButton` - Voor buttons overal

**Alle object types zijn modulair en herbruikbaar!**

---

## 📝 Volgende Stap

Na het invullen van Site Settings kun je:
1. ✅ Navigatie menu aanmaken
2. ✅ Pagina's toevoegen
3. ✅ Website testen
4. ✅ Live zetten!
