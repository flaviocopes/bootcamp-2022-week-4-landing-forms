import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
})
