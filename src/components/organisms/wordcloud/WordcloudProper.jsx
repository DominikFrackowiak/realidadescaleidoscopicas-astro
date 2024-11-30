'use client'

import React, { useEffect, useState } from 'react'
import ReactWordcloud from 'react-wordcloud'

const words = [
	{ text: 'Astro', value: 100 },
	{ text: 'React', value: 80 },
	{ text: 'JavaScript', value: 70 },
]

const options = {
	colors: ['#fc3951', '#ed0033', '#364ec6', '#2e3192'],
	enableTooltip: true,
	deterministic: false,
	fontFamily: 'Galano Grotesque Semibold',
	fontSizes: [20, 70],
	fontStyle: 'normal',
	fontWeight: 'normal',
	padding: 1,
	rotations: 3,
	rotationAngles: [0, 90],
	scale: 'sqrt',
	spiral: 'archimedean',
	transitionDuration: 1000,
}
const WordCloudComponent = () => {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	if (!isClient) {
		return <div>Loading...</div>
	}

	return (
		<div style={{ width: '100%', height: '400px' }}>
			<ReactWordcloud words={words} options={options} />
		</div>
	)
}

export default WordCloudComponent
