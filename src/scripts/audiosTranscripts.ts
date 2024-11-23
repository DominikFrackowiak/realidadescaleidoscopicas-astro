export default function handleAudiosAndTranscripts(){
  document.addEventListener('DOMContentLoaded', () => {
		const audios = document.querySelectorAll<HTMLAudioElement>('audio')
		const playIcons = document.querySelectorAll<HTMLDivElement>('.play-icon')
		const pauseIcons = document.querySelectorAll<HTMLDivElement>('.pause-icon')
		const transcriptButtons = document.querySelectorAll<HTMLButtonElement>(
			'.transcript-open-button'
		)
		const audioTranscripts =
			document.querySelectorAll<HTMLDivElement>('.audio-transcript')
		const closeTranscriptButtons =
			document.querySelectorAll<HTMLButtonElement>('.close-transcript')
		const mainSections =
			document.querySelectorAll<HTMLDivElement>('.main-section')
		const transcriptSections = document.querySelectorAll<HTMLDivElement>(
			'.transcript-section'
		)

		// Funkcja do płynnego przewijania do elementu
		const smoothScrollToElement = (element: HTMLElement) => {
			const headerOffset = 0 // Dostosuj tę wartość jeśli masz stały header
			const elementPosition = element.getBoundingClientRect().top
			const offsetPosition = elementPosition + window.pageYOffset - headerOffset

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			})
		}

		// Obsługa audio
		pauseIcons.forEach(icon => {
			icon.style.display = 'none'
		})

		playIcons.forEach((icon, i) => {
			icon.addEventListener('click', () => {
				audios.forEach((audio, index) => {
					audio.pause()
					playIcons.item(index).style.display = 'block'
					pauseIcons.item(index).style.display = 'none'
				})

				audios.item(i).play()
				icon.style.display = 'none'
				pauseIcons.item(i).style.display = 'block'
			})
		})

		pauseIcons.forEach((icon, i) => {
			icon.addEventListener('click', () => {
				audios.item(i).pause()
				playIcons.item(i).style.display = 'block'
				icon.style.display = 'none'
			})
		})

		// Logika transkryptów
		transcriptButtons.forEach(button => {
			button.addEventListener('click', () => {
				const stageIndex = button.getAttribute('data-stage')
				const audioIndex = button.getAttribute('data-audio')

				if (stageIndex !== null) {
					const idx = parseInt(stageIndex)

					// Ukryj główną sekcję
					mainSections.item(idx).style.display = 'none'

					// Pokaż sekcję transkryptów
					transcriptSections.item(idx).style.display = 'flex'

					// Ukryj wszystkie transkrypty w tej sekcji
					audioTranscripts.forEach(transcript => {
						if (transcript.getAttribute('data-stage') === stageIndex) {
							transcript.style.display = 'none'
						}
					})

					// Pokaż odpowiedni transkrypt
					const targetTranscript = document.querySelector<HTMLDivElement>(
						`#transcript-${stageIndex}-${audioIndex}`
					)
					if (targetTranscript) {
						targetTranscript.style.display = 'flex'
						// Przewiń do transkryptu
						setTimeout(() => {
							const transcriptSection = document.querySelector<HTMLElement>(
								`#transcript-section-${stageIndex}`
							)
							if (transcriptSection) {
								smoothScrollToElement(transcriptSection)
							}
						}, 0)
					}
				}
			})
		})

		closeTranscriptButtons.forEach(button => {
			button.addEventListener('click', () => {
				const stageIndex = button.getAttribute('data-stage')

				if (stageIndex !== null) {
					const idx = parseInt(stageIndex)

					// Ukryj sekcję transkryptów
					transcriptSections.item(idx).style.display = 'none'

					// Pokaż główną sekcję
					const mainSection = mainSections.item(idx)
					mainSection.style.display = 'flex'

					// Ukryj wszystkie transkrypty
					audioTranscripts.forEach(transcript => {
						if (transcript.getAttribute('data-stage') === stageIndex) {
							transcript.style.display = 'none'
						}
					})

					// Przewiń do początku odpowiedniej sekcji głównej
					smoothScrollToElement(mainSection)
				}
			})
		})
	})
}