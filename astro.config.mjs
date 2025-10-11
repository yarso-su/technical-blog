// @ts-check
import { defineConfig } from 'astro/config'

import cloudflare from '@astrojs/cloudflare'

import sitemap from '@astrojs/sitemap'

import tailwindcss from '@tailwindcss/vite'

import rehypeExternalLinks from 'rehype-external-links'

// https://astro.build/config
export default defineConfig({
  site: 'https://es.yarso.dev',

  output: 'static',

  adapter: cloudflare({
    platformProxy: {
      enabled: false
    },
    imageService: 'compile'
  }),

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      ]
    ]
  },

  devToolbar: {
    enabled: false
  }
})

