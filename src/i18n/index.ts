export const languages = { en: 'English', hu: 'Magyar' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** Where the site is served from: '' at a domain root, e.g. '/portfolio' on GitHub Pages. */
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-relative path (e.g. '/favicon.svg') with the site's base path. */
export const withBase = (path: string) => `${BASE}${path.startsWith('/') ? path : `/${path}`}`;

/** Static paths for pages that exist in both languages: `/…` (English) and `/hu/…`. */
export const langPaths = () => [{ params: { lang: undefined } }, { params: { lang: 'hu' } }];

/** The path without the base, e.g. '/portfolio/hu/' → '/hu/'. */
const withoutBase = (pathname: string) =>
  BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) || '/' : pathname;

export function getLang(url: URL): Lang {
  const path = withoutBase(url.pathname);
  return path === '/hu' || path.startsWith('/hu/') ? 'hu' : 'en';
}

/** The page path without base or language prefix, e.g. `/portfolio/hu/work/morzsa/` → `/work/morzsa/`. */
export function stripLang(pathname: string): string {
  const stripped = withoutBase(pathname).replace(/^\/hu(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

/** Full link (base included) to a site path, which may include a #hash, in the given language. */
export function localePath(lang: Lang, path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return withBase(p);
  return withBase(p === '/' ? '/hu/' : `/hu${p}`);
}
