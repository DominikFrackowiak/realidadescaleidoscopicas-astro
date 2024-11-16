import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
	output: 'server',
	integrations: [tailwind()],
	adapter: vercel(),
})
