// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages: https://hi-kreasidigital.github.io/kreasi-digital-hub/
// When a custom domain is connected, set `site` to that domain and remove `base`.
export default defineConfig({
  site: 'https://hi-kreasidigital.github.io',
  base: '/kreasi-digital-hub',
  trailingSlash: 'always',
});
