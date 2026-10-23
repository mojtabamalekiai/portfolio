# Mojtaba Maleki — Freelance Websites

The marketing site for Mojtaba (Moji) Maleki's freelance website design and development service, plus twelve live sample websites that show the range of work.

Built with [Astro](https://astro.build) and TypeScript. The output is fully static: no backend, no database, no environment variables. Pages render as plain HTML and CSS, and the few small scripts (mobile menu, scroll reveal, copy-email button, demo forms) are progressive enhancements. Everything stays readable and usable without JavaScript.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321/portfolio/
npm run build     # type-checks, then builds static files into dist/
npm run preview   # serves the built dist/ folder locally
```

Requires Node 20 or newer.

## Deploy

Live at **https://mojtabamalekiai.github.io/portfolio/** via GitHub Pages.

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it. Progress is under the repo's **Actions** tab, and a new version is live a minute or two after the run finishes.

The site is served from `/portfolio/`, so `astro.config.mjs` sets `base: '/portfolio'`. All internal links go through `localePath()` / `withBase()` in `src/i18n/index.ts`, which add it automatically. Locally, `npm run dev` serves at http://localhost:4321/portfolio/.

**Custom domain later:** add the domain under the repo's **Settings → Pages**, then in `astro.config.mjs` set `SITE_URL` to `https://yourdomain.com` and `BASE_PATH` to `'/'`.

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
  components/           Header, Hero, Work, Steps, Services, About, Faq, Contact, MobileBar, Footer, LangSwitch…
  components/concept/   Shared sample-site parts: ActionBar (phone bottom bar), OpenHours (live open/closed), TextSize (A / A+)
  concepts/*.astro      12 sample sites, each with its own EN/HU copy: Nagyi Konyhája, Villám, Pipacs, Kerék, Mosoly,
                        Tópart, Morzsa, North & Fade, Hajnal, Talkative, Kova, Ledger & Light
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

## Designed for older, non-technical visitors

- Phone-first. Nothing scrolls sideways, and there are no carousels, swipe rows, hover-only features or hidden "hamburger" menus.
- Body text is 18px or larger, with strong contrast (WCAG AA) and big labelled buttons, at least 48px tall.
- Plain words throughout: no "landing page", "portfolio", "SEO" or similar.
- On phones, a bottom bar keeps *Message me* / *Email* one tap away, and the page reserves space so the bar never covers text.
- Sample sites follow the same rules: a bottom bar with *Call / Map / Book*, live "Open now" hours, an A/A+ text-size switch, simple tap-to-choose helpers, and no date pickers.

## How visitors get in touch

- **Message me** buttons (header, hero, the phone bottom bar, the contact section) open the Facebook profile directly.
- **Email** buttons open the visitor's mail app. The contact-section button pre-fills a short example message.
- The contact section shows an example of what to write, so nobody has to wonder how to start.

## Honesty notes

- The twelve sample businesses are fictional, and every sample was designed and built for this portfolio. No other studio's work is shown. Every concept page carries a "Design concept" bar and a footer note, is marked `noindex`, and its forms clearly state that nothing is sent or booked.
- There are no testimonials, client logos, statistics, prices, timelines or guarantees on the main site. Pricing is explained as "quoted per project".
- The Messenger button opens the supplied Facebook profile. An `m.me` link is only documented for Facebook Pages, so it is not used.

## Credits

Concept photography from [Unsplash](https://unsplash.com) (Unsplash Licence). Fonts (all self-hosted via Fontsource): Fraunces, Hanken Grotesk, Young Serif, Figtree, Big Shoulders Display, Inter Tight, Instrument Sans, Instrument Serif, Cormorant, Manrope, Bricolage Grotesque, DM Serif Display, Nunito, Plus Jakarta Sans, Archivo, Playfair Display, Karla, Marcellus, Mulish and Rubik, under the SIL Open Font License.
