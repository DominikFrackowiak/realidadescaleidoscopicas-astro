import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

export default defineConfig({
	output: 'server',
	server: { port: 3000 },
	integrations: [tailwind(), react()],
	adapter: vercel(),
	vite: {
		ssr: {
			noExternal: ['react-wordcloud'],
		},
	},
})
