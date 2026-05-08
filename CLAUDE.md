# Snowflake Heritage Foundation — Website Project Brief

## Project Overview

Build a static website for the **Snowflake Heritage Foundation**, a small nonprofit in Snowflake, Arizona. The foundation preserves and promotes the historical homes of Snowflake and operates out of the **Stinson Museum** — the original home of James Stinson, who settled the valley around 1870 and is considered the founding figure of Snowflake. The building is one of the oldest standing structures in Snowflake, AZ.

**Sister organization for content reference (do NOT copy verbatim):** https://taylorazmuseum.com/
Snowflake and Taylor are adjacent sister cities sharing the same school district and services. Content themes can mirror the Taylor site in spirit (heritage homes, community history, pioneer past) but must be specific to Snowflake.

---

## Tech Stack

- **Framework:** [Astro](https://astro.build/) (static output, zero JS by default, excellent for content sites)
- **Hosting:** Netlify (deploy via `netlify.toml`, `astro build` output to `dist/`)
- **Styling:** Tailwind CSS (via `@astrojs/tailwind`)
- **Fonts:** Load from Google Fonts CDN
- **No backend required** — all content is static

### Netlify Config (`netlify.toml`)
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

---

## Site Structure

Four pages (each as its own `.astro` file, sharing a common `Layout.astro`):

| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/pages/index.astro` | Hero, mission statement, quick hours, donate CTA |
| `/about` | `src/pages/about.astro` | History of the foundation, Stinson Museum, heritage homes |
| `/donate` | `src/pages/donate.astro` | Full donation page with Venmo instructions + QR code placeholder |
| `/contact` | `src/pages/contact.astro` | Hours, address, phone, map embed |

---

## Design Direction

**Aesthetic: Refined Heritage / Historic Museum**

This is NOT a tech company site. Think: the kind of institution that feels trustworthy, old, and important — the Smithsonian's smaller, warmer cousin.

- **Color palette:**
  - Background: warm off-white / parchment `#F5F0E8`
  - Primary text: deep charcoal `#2C2416`
  - Accent: muted terracotta / adobe clay `#8B4A2F` (nods to the Hispanic Colonial Adobe building)
  - Secondary accent: aged gold `#9A7B3A`
  - Borders/dividers: `#C9B99A` (warm tan)
  - Dark section bg: `#1E1610`

- **Typography:**
  - Display/headings: `"Playfair Display"` (serif, editorial, classic museum feel)
  - Body: `"EB Garamond"` or `"Lora"` (warm, readable serif)
  - Small caps / labels: `"Cinzel"` (for section labels, nav — dignified, slightly formal)
  - Load all three from Google Fonts

- **Visual character:**
  - Subtle paper/linen texture on backgrounds (CSS `background-image` noise or SVG pattern)
  - Horizontal rule dividers styled as ornamental lines (using CSS border or SVG)
  - No drop shadows — instead use thick bottom borders and generous padding
  - Photos displayed in slightly warm-toned frames (CSS: `filter: sepia(15%) contrast(1.05)`)
  - No gradients on backgrounds — flat muted colors with texture instead
  - Page max-width: `900px` centered — this is a content site, not a landing page
  - Navigation: simple horizontal bar, no mega-menu, all caps in `Cinzel`, spaced tracking

- **Absolutely avoid:** purple gradients, glassmorphism, cards with rounded corners, Inter/Roboto, hero video, parallax, emoji, or any visual pattern associated with SaaS/startup design.

---

## Content — Page by Page

### `index.astro` — Home

**Hero section:**
```
[Full-width image of the Stinson Museum building — use a placeholder <img> with src="" and a comment: <!-- TODO: Replace with actual Stinson Museum photo -->]

Headline (h1):
  "Preserving the Pioneer Heritage of Snowflake, Arizona"

Subheadline:
  "The Snowflake Heritage Foundation stewards the oldest homes 
   and stories of our community — since the days of the first settlers."

CTA buttons (two, side by side):
  [Plan Your Visit]  →  /contact
  [Support Our Work]  →  /donate
```

**Mission strip (dark background section):**
```
"Our mission is to preserve, protect, and promote the historic homes, 
 artifacts, and stories that define Snowflake's pioneering past."
```

**Hours at a glance (small card/callout):**
```
MUSEUM HOURS
Monday – Saturday: 10:00 AM – 2:00 PM
Closed Sunday

Tours by appointment: call the Chamber at (928) 536-4331
```

**Brief history blurb:**
```
Snowflake was settled in the 1870s by James Stinson, who supplied cattle to 
Western military outposts. In 1878, he sold his ranch to William J. Flake — 
the town's name is a tribute to both Erastus Snow and William Flake, the 
Mormon pioneers who established the community.

Today, more than 100 historic homes remain in Snowflake, with 45 listed on 
the National Register of Historic Places.
```

**Donate CTA strip:**
```
Headline: "Support Local History"
Body: "Your donation keeps our doors open and our stories alive.
       Donate easily through Venmo — every contribution helps."
Button: [Donate via Venmo]  →  opens https://venmo.com/u/SnowflakeHeritageFoundation
```

---

### `about.astro` — About

**Page headline:** "About the Snowflake Heritage Foundation"

**Section 1 — The Foundation:**
```
The Snowflake Heritage Foundation is a nonprofit organization dedicated 
to preserving the pioneer history of Snowflake, Arizona. We maintain and 
interpret historic homes, operate the Stinson Museum, and provide guided 
tours that bring the community's founding story to life.

Snowflake has more than 100 historic homes, 45 of which are listed on the 
National Register of Historic Places — one of the highest concentrations 
of historically significant homes in rural Arizona.
```

**Section 2 — The Stinson Museum:**
```
The Stinson Museum is our home base — and the oldest home in Snowflake.

Located at 102 N. 1st East, the museum is housed in a historic Hispanic 
Colonial Adobe structure. It displays artifacts from Snowflake's three 
foundational eras: its prehistoric past, its Hispanic heritage, and its 
Mormon Pioneer settlement.

Highlights include the loom used by Lucy Hannah Flake to weave cloth 
and rag rugs, along with photographs, documents, and objects that trace 
the lives of Snowflake's earliest residents.

[Placeholder image — comment: <!-- TODO: interior museum photo -->]
```

**Section 3 — The Heritage Home Tours:**
```
Tours depart from the Stinson Museum and cover 14 historically significant 
homes in downtown Snowflake. A full tour takes approximately 1½ to 2 hours.

Notable homes on the tour include:
- A Victorian Second Empire home built in 1894, constructed from locally 
  made and fired bricks, filled with Flake family memorabilia.
- A Gothic Revival "Gingerbread House" built in 1893, featuring original 
  antiques, toys, and textiles.

Tours are available Monday through Saturday, 10:00 AM to 2:00 PM. 
Group and off-hours tours are available by appointment — call the 
Snowflake/Taylor Chamber of Commerce at (928) 536-4331.
```

**Section 4 — Snowflake & Taylor: Sister Cities:**
```
Snowflake and Taylor are neighboring sister cities that share a school 
district, emergency services, and a deep common history. Our friends at 
the Taylor Arizona Museum preserve the parallel heritage of Taylor.

[Link: Visit the Taylor Arizona Museum →  https://taylorazmuseum.com/]
```

---

### `donate.astro` — Donate

**Page headline:** "Support the Snowflake Heritage Foundation"

**Intro:**
```
Your generosity keeps history alive. The Snowflake Heritage Foundation 
is a volunteer-driven nonprofit. Donations fund building maintenance, 
artifact preservation, educational programming, and keeping our museum 
doors open to the public.
```

**Venmo section (primary donation method):**
```
HOW TO DONATE

We accept donations through Venmo — it's fast, free, and works from 
your phone or computer.

Venmo handle:  @SnowflakeHeritageFoundation

[Large, tappable button — styled prominently]:
  "Donate on Venmo"
  href="https://venmo.com/u/SnowflakeHeritageFoundation"
  target="_blank"
  rel="noopener noreferrer"
  
  On mobile this will open the Venmo app directly.
  On desktop it will open venmo.com in a new tab.

[Placeholder for QR code image]:
  <img src="/images/venmo-qr.png" alt="Venmo QR Code — @SnowflakeHeritageFoundation" />
  <!-- TODO: Insert actual Venmo QR code image. A printable version is available 
       at https://venmo.com/u/SnowflakeHeritageFoundation -->
```

**Other ways to help:**
```
- Volunteer as a museum docent or tour guide
- Donate artifacts, photographs, or documents related to Snowflake history
- Spread the word — share our site and invite visitors to the museum

For questions, call us at (928) 536-4881 or reach out through our contact page.
```

---

### `contact.astro` — Visit Us

**Page headline:** "Visit the Stinson Museum"

**Info block:**
```
ADDRESS
102 N. 1st East (corner of 1st East & 1st North)
Snowflake, AZ 85937

PHONE
(928) 536-4881

HOURS
Monday – Saturday: 10:00 AM – 2:00 PM
Closed Sunday

Tours by appointment: (928) 536-4331 (Chamber of Commerce)
Allow 1½ to 2 hours for a full home tour.
```

**Map embed:**
```html
<!-- Google Maps embed for Stinson Museum, 102 N 1st St E, Snowflake AZ -->
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.0!2d-110.0833!3d34.5133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872f3c44569af243%3A0x58c790189a51c526!2sStinson%20Pioneer%20Museum!5e0!3m2!1sen!2sus!4v1"
  width="100%"
  height="400"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Stinson Museum location map">
</iframe>
```

**Getting here:**
```
The Stinson Museum is located in downtown Snowflake, Arizona, 
approximately 1 hour south of Show Low and 3 hours northeast of Phoenix.
```

---

## Navigation (`Layout.astro`)

```
Logo/Wordmark: "Snowflake Heritage Foundation" (left-aligned, Playfair Display)
Nav links (right, Cinzel small caps):
  Home | About | Visit | Donate
```

Mobile nav: hamburger menu, full-width dropdown, same links.

---

## Footer

```
© [current year] Snowflake Heritage Foundation
102 N. 1st East · Snowflake, AZ 85937 · (928) 536-4881

[small links row]: Home · About · Visit · Donate

Donate via Venmo: @SnowflakeHeritageFoundation
```

---

## Image Placeholders

The project should compile cleanly without real images. Use the following pattern:

```astro
<!-- TODO: Replace with actual photo -->
<div class="img-placeholder" aria-label="[description]">
  <span>[description]</span>
</div>
```

Style `.img-placeholder` with the parchment background, a dashed border in the tan accent color, centered italic text in the muted gold color, and a minimum height of `300px`. This way the layout looks intentional while awaiting real photography.

Images to plan for (filenames to drop into `public/images/` later):
- `stinson-museum-exterior.jpg` — hero image on home page
- `stinson-museum-interior.jpg` — about page
- `heritage-homes.jpg` — about page / tour section
- `venmo-qr.png` — QR code for Venmo donations

---

## Accessibility & SEO

- Each page gets its own `<title>` and `<meta name="description">` via Layout props
- All images must have descriptive `alt` attributes
- Color contrast must pass WCAG AA (the chosen palette does at normal text sizes)
- `lang="en"` on `<html>`
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`

---

## Key External Links (verified)

| Purpose | URL |
|---------|-----|
| Venmo donation page | `https://venmo.com/u/SnowflakeHeritageFoundation` |
| Google Maps – Stinson Museum | `https://maps.google.com/?q=Stinson+Pioneer+Museum+Snowflake+AZ` |
| Chamber of Commerce | `https://snowflaketaylorchamber.org/` |
| Taylor Arizona Museum (sister city) | `https://taylorazmuseum.com/` |

---

## Do Not

- Do not copy text verbatim from taylorazmuseum.com — content must be Snowflake-specific
- Do not use Taylor's images
- Do not use any SaaS/startup design patterns (gradients, glassmorphism, Inter/Roboto, etc.)
- Do not build a contact form that submits data — this is a static site; a mailto link is fine
- Do not add JavaScript frameworks beyond what Astro provides by default
- Do not use construction or home-building metaphors in any code comments
