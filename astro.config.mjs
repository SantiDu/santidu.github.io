import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://santidu.github.io/your-repo-name',
  base: '/santidu.github.io/',
  integrations: [mdx(), sitemap()],
  output: 'static',
});

