'use client'

import { useState } from 'react'

interface InstructionsProps {
  yt: string | undefined,
  instructions: string | undefined
}

export default function Instructions({yt, instructions}: InstructionsProps) {
	const [video, setVideo] = useState<boolean>(false)
	const [readMore, setReadMore] = useState<boolean>(false)

	/* extract Id of youtube url */
	function embedId(url: string) {
		const match = url.match(/[?&]v=([^&]+)/)
		return match ? match[1] : null
	}

	return(
		<article>
			<div className='flex gap-8'>
				<h2
					className={`text-2xl font-semibold max-w-72 cursor-pointer border rounded-2xl mb-4 border-white px-4 py-2 ${!video ? 'bg-white text-black' : ''}`}
					onClick={() => setVideo(false)}
				>Instructions
				</h2>
				<h2
					className={`text-2xl font-semibold max-w-72 cursor-pointer border rounded-2xl mb-4 border-white px-4 py-2 ${video ? 'bg-white text-black' : ''}`}
					onClick={() => setVideo(true)}
				>video
				</h2>
			</div>
			{video
				? <iframe
					width="560"
					height="315"
					src={`https://www.youtube.com/embed/${embedId(yt as string)}`}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen>
				</iframe>
				:
				<>
					{readMore
						? <p className='mt-2 whitespace-pre-wrap'>{instructions}</p>
						: <p className='mt-2 whitespace-pre-wrap'>
							{instructions?.slice(0, 1000) + ' '}
							{instructions &&
							<span
								className='cursor-pointer underline-offset-1 underline'
								onClick={() => setReadMore(true)}
							> {instructions.length > 1000 ? 'read more...' : ''}
							</span>
							}
						</p>
					}
				</>
			}

		</article>
	)
}