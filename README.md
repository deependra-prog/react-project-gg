# ASTERIN — We Build Creators & Worlds

Cinematic black/red creative-studio website built with **Vite + React + React Router**.
Studio for YouTube & Instagram creators/influencers + Minecraft server hosting &
management (PLAYWORLD).

## Run

```bash
npm install
npm run dev      # local dev
npm run build    # production build
```

## Drop in YOUR assets 

| File | What it does |
|---|---|
| `public/assets/video/video.mp4` | Cinematic background video for the intro + homepage hero. If missing, an animated red/black particle fallback is used. |
| `public/assets/logo/logo-animation.mp4` (or `.webm`) | Your logo animation video, played in the intro instead of the built-in animated logo. |
| `public/assets/logo/logo.png` | Static logo (black background). |
| `public/assets/logo/logo-transparent.png` | Transparent logo used in navbar/menu/intro (generated from logo.png). |
| `public/assets/images/work/…` | Project cover images. |
| `public/assets/images/services/…`, `products/…`, `about/…`, `icons/…` | Reserved folders for future assets. |

The startup intro plays on every fresh page load; every in-site navigation shows a
short ASTER(change it however suits you).

## Add content (data-driven, edit one file)

- **Projects** → `src/data/projects.js` (auto-creates `/work/:slug` pages)
- **Services** → `src/data/services.js` (auto-creates `/services/:slug` pages)
- **Products / servers** → `src/data/products.js` (auto-creates `/products/:slug`)
- **Prices & plans** → `src/data/pricing.js` — **single source of truth**, keyed by slug
- **FAQ** → `src/data/faq.js` · **News** → `src/data/news.js`

## Routes

`/` · `/work` · `/work/:slug` · `/services` · `/services/:slug` · `/products` ·
`/products/servers` · `/products/:slug` · `/about` · `/help` · `/contact`

## Notes
- **while making this i took my inspiration from sylo media https://www.sylomedia.co.uk**
  


