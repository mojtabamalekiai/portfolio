# Mojtaba Maleki — Freelance Websites

The marketing site for Mojtaba (Moji) Maleki's freelance website design and development service, plus six live concept websites that show the range of work.

Built with [Astro](https://astro.build) and TypeScript. The output is fully static: no backend, no database, no environment variables. Pages render as plain HTML and CSS, and the few small scripts (mobile menu, scroll reveal, copy-email button, demo forms) are progressive enhancements. Everything stays readable and usable without JavaScript.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks, then builds static files into dist/
npm run preview   # serves the built dist/ folder locally
```

Requires Node 20 or newer.

## Deploy

`dist/` is a static site. It works on Netlify, Vercel, Cloudflare Pages, GitHub Pages or any static host. Build command `npm run build`, output directory `dist`.

When you have a domain, set `SITE_URL` in `astro.config.mjs`. Astro then emits a canonical URL and an absolute Open Graph image URL, which some link-preview scrapers need.

## Languages

The site is bilingual: English at `/`, Hungarian at `/hu/` (concept sites too, e.g. `/hu/work/morzsa/`).

- **First visit:** if the browser's main language is Hungarian, the English page sends the visitor to its Hungarian twin before anything renders. Everyone else stays on English.
- **Manual choice:** the EN/HU switch in the header (and in the concept bar) saves the choice in `localStorage`, and that choice wins from then on.
- Links to `/hu/…` are never redirected away for visitors who haven't chosen, so search engines can index both versions.
- Hungarian copy uses the informal "te" form.

## Structure

```
src/
  i18n/index.ts         Language helpers (getLang, localePath, langPaths)
  i18n/ui.ts            All main-site text, in English and Hungarian
  data/site.ts          Name, email, Facebook link. The single source for contact details.
  data/projects.ts      The three concept projects shown in "Sample work"
  styles/global.css     Design tokens (colour, type, spacing, radii, motion) and base styles
  components/           Header, Hero, Steps, Work, Services, About, Faq, Contact (message builder), Fab, Footer, LangSwitch…
  concepts/*.astro      Concept sites (Morzsa, North & Fade, Ledger & Light, Hajnal Yoga, Talkative, Kova Interiors), each with its own EN/HU copy
  pages/[...lang]/      Routes generating both / and /hu/ versions of every page
  assets/photos/        Concept-site photography (Unsplash licence)
  assets/shots/         Concept screenshots: <slug>-desktop / -preview (tall, for the hover scroll) / -mobile, plus -hu variants
public/                 favicon.svg, og.png / og-hu.png (link previews), robots.txt
```

## Editing content

- **Contact details:** `src/data/site.ts`.
- **Your photo:** save it as `src/assets/photos/me.jpg` (or `.png`/`.webp`) and rebuild. It appears in the About card and next to the contact text. Without it, the About card shows the monogram.
- **Main-site text:** `src/i18n/ui.ts`. Change the `en` and `hu` entries together; TypeScript flags a missing Hungarian string.
- **Concept-site text:** the `copy` object at the top of each file in `src/concepts/`.
- **Adding a real client project:** add an entry in `src/data/projects.ts` (plus its text under `concepts` in `ui.ts`) and desktop and mobile screenshots in both languages.
- **Concept screenshots:** if a concept page changes, retake its screenshots with the concept bar hidden (add `class="shot"` to `<html>`), in both languages: `desktop` = 1440×900, `preview` = the top 1440×2700 of the page (used for the scroll-on-hover preview), `mobile` = 390×844 at 2×. `src/data/projects.ts` picks them up by file name.

## How visitors get in touch

- **"Message me" buttons** (hero, "How it works", the floating button that appears after the hero) open the Facebook profile directly.
- **The message builder** in the contact section: visitors pick what they need and optionally name their business, and a friendly message is written for them (they can edit it). *Send on Messenger* copies it to the clipboard and opens Messenger in a new tab. Profile links can't pre-fill Messenger text, so visitors paste it. *Send by email* opens their mail app with the message filled in.

## Honesty notes

- The six concept businesses are fictional, and every concept was designed and built for this portfolio. No other studio's work is shown. Every concept page carries a "Design concept" bar and a footer note, is marked `noindex`, and its forms clearly state that nothing is sent or booked.
- There are no testimonials, client logos, statistics, prices, timelines or guarantees on the main site. Pricing is explained as "quoted per project".
- The Messenger button opens the supplied Facebook profile. An `m.me` link is only documented for Facebook Pages, so it is not used.

## Credits

Concept photography from [Unsplash](https://unsplash.com) (Unsplash Licence). Fonts: Fraunces, Hanken Grotesk, Young Serif, Figtree, Big Shoulders Display, Inter Tight and Instrument Sans, self-hosted via Fontsource (SIL Open Font License).
