/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				white: '#ffffff',
				lightRed: '#fc3951',
				darkRed: '#ed0033',
				lightBlue: '#364ec6',
				darkBlue: '#2e3192',
			},
			fontFamily: {
				sans: ['Galano Grotesque Regular', 'sans-serif'], // default body font
				'galano-medium': ['Galano Grotesque Medium', 'sans-serif'],
				'galano-semibold': ['Galano Grotesque Semibold', 'sans-serif'],
				tavares: ['Tavares', 'sans-serif'],
			},
		},
	},
	plugins: [],
	safelist: [
		'bg-white',
		'bg-lightBlue',
		'bg-darkBlue',
		'bg-lightRed',
		'bg-darkRed',
	],
}
