/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	mode: 'jit',
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
		'mx-auto',
		'w-full',
		'text-white',
		'text-lightRed',
		'text-darkBlue',
		'hover:bg-lightBlue',
		'hover:bg-darkRed',
		'text-lightBlue',
		'px-4',
		'max-w-[280px]',
		'md:max-w-[720px]',
		'lg:max-w-[1140px]',
		'spanish',
		'font-tavares',
		'font-sans',
	],
}
