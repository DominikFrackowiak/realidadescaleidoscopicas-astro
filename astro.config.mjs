import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
	output: 'hybrid',
	integrations: [tailwind()],
	adapter: vercel(),
})
