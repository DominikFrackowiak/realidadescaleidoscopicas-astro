import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

export default defineConfig({
	output: 'server',
	integrations: [tailwind(), react()],
	adapter: vercel(),
	vite: {
		// resolve: {
		// 	alias: {
		// 		react: 'react@16.13.0',
		// 		'react-dom': 'react-dom@16.13.0',
		// 	},
		// },
	},
})
