'use client'

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
		<form onSubmit={handleSubmit}>
			<input
				defaultValue={searchParams.get('q') || ''}
				className='m-8 w-96 h-10 rounded-2xl outline-none pl-4 text-black'
				name="query"
				placeholder='Search for your dream recipe...'
			/>
			<button type="submit">Search</button>
		</form>
	)
}