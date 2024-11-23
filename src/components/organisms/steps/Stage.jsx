import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import AudioPlayer from '../../molecules/audio-player/AudioPlayer.astro'
import stagesData from '../../../../lib/constants/stageData'
const wrapper =
	'flex flex-col mx-[10px] md:mx-auto w-full px-4 max-w-[280px] md:max-w-[720px] lg:max-w-[1140px] gap-[40px] items-center'

const Stage = () => {
	const [activeTranscript, setActiveTranscript] = useState(null)
	const [activeAudio, setActiveAudio] = useState(null)

	const handlePlay = audioIndex => {
		if (activeAudio !== null && activeAudio !== audioIndex) {
			// Zatrzymaj poprzednie audio
			const audioElements = document.querySelectorAll('audio')
			audioElements[activeAudio]?.pause()
		}
		setActiveAudio(audioIndex)
	}

	const handlePause = () => {
		setActiveAudio(null)
	}

	const handleTranscriptOpen = transcriptIndex => {
		setActiveTranscript(transcriptIndex)
	}

	const handleTranscriptClose = () => {
		setActiveTranscript(null)
	}

	return (
		<>
			{stagesData.map((stage, stageIndex) => (
				<section
					key={stage.category}
					id={stage.category}
					className={twMerge(stage.backgroundColor, 'py-20')}
				>
					{activeTranscript === null ? (
						<div
							className={twMerge(
								wrapper,
								'step flex flex-col items-center gap-[40px]'
							)}
						>
							<div className='flex gap-[10px] items-center h-[60px] w-full'>
								<img
									src={stage.icon}
									className='w-[50px] h-[50px]'
									alt={stage.title}
								/>
								<h2 className='text-4xl font-tavares mt-[9px] font-bold'>
									{stage.title}
								</h2>
							</div>

							<p className='text-xl w-full'>{stage.description}</p>

							<div className='w-full flex justify-center'>
								<button className='py-2 w-full md:w-2/5 border'>
									<a
										href='/#participa'
										className='font-tavares text-xl block text-center'
									>
										Participa en Yincana
									</a>
								</button>
							</div>

							<div className='flex justify-around w-full'>
								{stage.audios.map((audio, audioIndex) => (
									<div key={audioIndex} className='flex flex-col items-center'>
										<div className='relative'>
											<button
												onClick={() => handlePlay(audioIndex)}
												className={
													activeAudio === audioIndex ? 'hidden' : 'block'
												}
											>
												<img
													src={stage.iconPlay}
													alt='play'
													className='w-12 h-12'
												/>
											</button>
											<button
												onClick={handlePause}
												className={
													activeAudio === audioIndex ? 'block' : 'hidden'
												}
											>
												<img
													src={stage.iconPause}
													alt='pause'
													className='w-12 h-12'
												/>
											</button>
											<audio
												src={audio.src}
												onEnded={() => setActiveAudio(null)}
											/>
										</div>
										<button
											onClick={() => handleTranscriptOpen(audioIndex)}
											className='mt-2 text-sm'
										>
											más info
											<br />
											+++
										</button>
									</div>
								))}
							</div>
						</div>
					) : (
						<div
							className={twMerge(wrapper, 'relative bg-white p-6 rounded-lg')}
						>
							<button
								onClick={handleTranscriptClose}
								className='absolute top-4 right-4 text-xl'
							>
								×
							</button>
							<div
								className='prose max-w-none'
								dangerouslySetInnerHTML={{
									__html: stage.audios[activeTranscript].transcript,
								}}
							/>
						</div>
					)}
				</section>
			))}
		</>
	)
}

export default Stage
