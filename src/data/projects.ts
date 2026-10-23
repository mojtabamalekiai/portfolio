import type { ImageMetadata } from 'astro';
import { localePath, type Lang } from '../i18n';
import { ui } from '../i18n/ui';

export interface Project {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  href: string;
  /** First screen of the desktop site (1440×900). */
  desktop: ImageMetadata;
  /** Tall desktop capture used for the scrolling preview. */
  preview: ImageMetadata;
  /** First screen on a phone (390×844). */
  mobile: ImageMetadata;
  alt: string;
  /** Brand colour, and the light/dark backdrop its card sits on. */
  tone: string;
  stage: string;
  dark?: boolean;
}

// Screenshots follow `<slug>-<desktop|preview|mobile>[-hu].png` in src/assets/shots.
const shots = import.meta.glob<{ default: ImageMetadata }>('../assets/shots/*.png', { eager: true });
const shot = (slug: string, kind: 'desktop' | 'preview' | 'mobile', lang: Lang) => {
  const file = `../assets/shots/${slug}-${kind}${lang === 'hu' ? '-hu' : ''}.png`;
  const mod = shots[file];
  if (!mod) throw new Error(`Missing screenshot: ${file}`);
  return mod.default;
};

const base = [
  { key: 'morzsa', slug: 'morzsa', name: 'Morzsa', tone: '#a64b22', stage: '#ecd8c2' },
  { key: 'north', slug: 'north-and-fade', name: 'North & Fade', tone: '#cfa75e', stage: '#24221e', dark: true },
  { key: 'ledger', slug: 'ledger-and-light', name: 'Ledger & Light', tone: '#1f4d3a', stage: '#d3e4d8' },
  { key: 'hajnal', slug: 'hajnal-yoga', name: 'Hajnal', tone: '#b4704f', stage: '#e6d9c6' },
  { key: 'talkative', slug: 'talkative', name: 'Talkative', tone: '#ff6a4d', stage: '#ffdf6e' },
  { key: 'kova', slug: 'kova-interiors', name: 'Kova Interiors', tone: '#1d1c1a', stage: '#d8d4ca' },
] as const;

/**
 * Concept projects: fictional businesses, designed and built to show the range of work.
 * They are labelled as concepts everywhere they appear.
 */
export function getProjects(lang: Lang): Project[] {
  const copy = ui[lang].concepts;
  return base.map(({ key, slug, ...rest }) => ({
    slug,
    ...rest,
    ...copy[key],
    href: localePath(lang, `/work/${slug}/`),
    desktop: shot(slug, 'desktop', lang),
    preview: shot(slug, 'preview', lang),
    mobile: shot(slug, 'mobile', lang),
  }));
}
