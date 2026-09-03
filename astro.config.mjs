// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import { remarkMark } from './src/lib/remark-mark.mjs';

export default defineConfig({
  site: 'https://sebasgarcia.dev',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  markdown: {
    processor: unified({ remarkPlugins: [remarkMark] }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
