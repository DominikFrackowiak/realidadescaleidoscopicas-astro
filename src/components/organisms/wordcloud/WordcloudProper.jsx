import React, { useEffect, useState } from 'react'
import { db } from '../../../../lib/firebase/firebaseConfig'
import {
	collection,
	query,
	orderBy,
	limit,
	onSnapshot,
	getDocs,
} from 'firebase/firestore'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import ReactWordcloud from 'react-wordcloud'

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
	const [words, setWords] = useState([])
	const [isPending, setIsPending] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const q = query(
					collection(db, 'opinions'),
					orderBy('value', 'desc'),
					limit(15)
				)

				const unsubscribe = onSnapshot(
					q,
					snapshot => {
						if (snapshot.empty) {
							setError('Todavía no hay ninguna palabra')
							setIsPending(false)
						} else {
							const results = snapshot.docs.map(doc => ({ ...doc.data() }))
							setWords(results)
							setIsPending(false)
						}
					},
					error => {
						setError(error.message)
						setIsPending(false)
					}
				)

				return () => unsubscribe()
			} catch (err) {
				setError(err.message)
				setIsPending(false)
			}
		}

		fetchData()
	}, [])

	useEffect(() => {
		setIsClient(true)
	}, [])

	if (!isClient) {
		return <div>Loading...</div>
	}

	return (
		<div class='w-full'>
			{isPending && <p>Loading...</p>}
			{error && <p>{error}</p>}
			{words && words.length > 0 && (
				<div class='h-[700px] w-full'>
					<ReactWordcloud options={options} words={words} />
				</div>
			)}
		</div>
	)
}

export default WordCloudComponent
