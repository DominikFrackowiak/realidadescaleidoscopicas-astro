// import { Scale } from 'react-wordcloud'

// types.ts
export interface Audio {
	id: number
	title: string
	transcript: string
	audioSrc: string
	category: string
}

export type Colors = 'white' | 'lightRed' | 'darkRed' | 'lightBlue' | 'darkBlue'

export interface StageProps {
	id: number
	category: string
	icon: string
	title: string
	description: string
	titleColor: string
	descriptionColor: string
	backgroundColor: string
	transcriptBgColor: string
	buttonBgColor: string
	buttonBgColorOnHover: string
	iconPlay: string
	iconPause: string
	// borderColor: 'lightRed' | 'darkBlue'
	// audioTextColor: 'white' | 'lightBlue'
	borderColor: string
	audioTextColor: string
	audios: Audio[]
}

export interface FirestoreWord {
	id?: string
	text: string
	value: number
}

// export interface Options {
// 	colors: string[]
// 	enableTooltip: boolean
// 	deterministic: boolean
// 	fontFamily: string
// 	fontSizes: [number, number]
// 	fontStyle: string
// 	fontWeight: string
// 	padding: number
// 	rotations: number
// 	rotationAngles: [number, number]
// 	scale: Scale
// 	spiral: 'archimedean' | 'rectangular'
// 	transitionDuration: number
// }

export interface WordCloudProps {
	initialWords?: Array<{ text: string; value: number }>
}
