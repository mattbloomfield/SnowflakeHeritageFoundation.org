# Snowflake Heritage Foundation

Website for the [Snowflake Heritage Foundation](https://snowflakeheritagefoundation.org), a nonprofit preserving the historic homes, artifacts, and pioneer history of Snowflake, Arizona. Home of the Stinson Museum.

## Tech Stack

- [Astro](https://astro.build/) — static site generator
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [Netlify](https://www.netlify.com/) — hosting and deployment

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # preview production build
```

## Deployment

Pushes to `main` can be deployed to Netlify via:

```bash
npx netlify deploy --prod --dir=dist
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, mission, hours, history, donate CTA |
| `/about` | Foundation history, Stinson Museum, heritage home tours |
| `/donate` | Venmo donation instructions and QR code |
| `/contact` | Address, hours, phone, Google Maps embed |
