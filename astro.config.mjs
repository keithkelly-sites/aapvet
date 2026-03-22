import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aapvet.keithkelly.dev',
  output: 'static',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Bitter',
      cssVariable: '--font-display',
      weights: [300, 400, 500, 600, 700, 800],
      styles: ['normal', 'italic'],
      fallbacks: ['serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Lora',
      cssVariable: '--font-body',
      weights: [400, 500, 600, 700],
      styles: ['normal', 'italic'],
      fallbacks: ['serif'],
    },
  ],
});
