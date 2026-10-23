// @ts-check
import { defineConfig } from 'astro/config';

// Published on GitHub Pages at https://mojtabamalekiai.github.io/portfolio/.
// With a custom domain later: set SITE_URL to it and BASE_PATH to '/'.
const SITE_URL = 'https://mojtabamalekiai.github.io';
const BASE_PATH = '/portfolio';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
