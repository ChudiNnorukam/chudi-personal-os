import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import image from '@astrojs/image';

// TODO: replace site URL once deployed
export default defineConfig({
  site: 'https://ChudiNnorukam.github.io/chudi-personal-os',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx(),
    react(),
    image(),
  ],
  markdown: {
    remarkPlugins: [import('remark-slug')],
    rehypePlugins: [import('rehype-autolink-headings')],
  },
});
