'use client'

import { useEffect } from 'react'
import useFetchRecipes from './hooks/useFetchRecipes'

export interface Recipe {
	idMeal: string,
	strMeal: string,
	strMealThumb: string
}

export default function Home() {
	const [fetchData, recipes] = useFetchRecipes()

	useEffect(() => {
		fetchData()
	}, [])

	useEffect(() => {
		console.log(recipes)
	}, [recipes])

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>What do you feel like having today</h1>
			<div className='flex flex-wrap gap-12 gap-y-30'>
				{ recipes.length !== 0 ? (
					recipes.map((e) => 
						<>
							<div className='w-80 h-72 bg-slate-300 text-black overflow-hidden'>
								<h2 key={e.idMeal} >{e.strMeal}</h2>
								<img className='object-cover h-full w-full' src={e.strMealThumb} title={e.strMeal} alt={e.strMeal} />
							</div>
						</>
					))
					: (<p>loading</p>)
				}
			</div>
		</main>
	)
}
