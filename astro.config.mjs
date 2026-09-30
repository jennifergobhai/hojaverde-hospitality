import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH let the same code deploy to the GitHub Pages preview
// (served under /hojaverde-hospitality/) and, later, to the real domain at the root.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://www.hojaverde-hospitality.com',
  base: process.env.BASE_PATH ?? '/',
});
