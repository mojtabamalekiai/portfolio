// @ts-check
import { defineConfig } from 'astro/config';

// When the site has a domain, set it here (e.g. 'https://mojtabamaleki.com').
// Astro uses it to build absolute URLs for the canonical link and Open Graph image.
const SITE_URL = undefined;

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
