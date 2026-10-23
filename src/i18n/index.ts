export const languages = { en: 'English', hu: 'Magyar' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** Static paths for pages that exist in both languages: `/…` (English) and `/hu/…`. */
export const langPaths = () => [{ params: { lang: undefined } }, { params: { lang: 'hu' } }];

export function getLang(url: URL): Lang {
  return url.pathname === '/hu' || url.pathname.startsWith('/hu/') ? 'hu' : 'en';
}

/** The page path without its language prefix, e.g. `/hu/work/morzsa/` → `/work/morzsa/`. */
export function stripLang(pathname: string): string {
  const stripped = pathname.replace(/^\/hu(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

/** Prefix a site path (which may include a #hash) for the given language. */
export function localePath(lang: Lang, path: string): string {
  if (lang === defaultLang) return path;
  return path === '/' ? '/hu/' : `/hu${path.startsWith('/') ? path : `/${path}`}`;
}
