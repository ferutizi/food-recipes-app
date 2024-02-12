'use client'

import '../globals.css'
import { useRouter, useSearchParams } from 'next/navigation'

export default function SearchBox() {
	const router = useRouter()
	const searchParams = useSearchParams()

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
    
		const query = event.currentTarget.query.value

		router.push(`/?q=${query}`)
	}

	return (
		<form onSubmit={handleSubmit} className='flex flex-col items-center sm:inline-block sm:mb-8'>
			<input
				defaultValue={searchParams.get('q') || ''}
				className='mx-0 mb-2 m-8 me-0 w-96 sm:w-72 md:w-96 h-10 rounded-2xl sm:rounded-e-none outline-none pl-4 text-black'
				name="query"
				placeholder='Search for your dream recipe...'
				style={{transform: 'translate(0, 1px)'}}
			/>
			<button className='mb-8 w-96 sm:w-auto rounded-2xl h-10 border border-white sm:rounded-s-none px-2 hover:bg-stone-900 transition-all ease-in' type="submit">Search</button>
		</form>
	)
}