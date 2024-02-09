'use client'

import './globals.css'
import { useEffect, useState } from 'react'
import useFetchRecipes from './hooks/useFetchRecipes'
import Ingredient from './components/Ingredient'

export interface Recipe {
	idMeal: string,
	strMeal: string,
	strMealThumb: string,
	strIngredient1: string,
	strIngredient2: string,
	strIngredient3: string,
	strIngredient4: string,
	strIngredient5: string,
	strIngredient6: string,
	strIngredient7: string,
	strIngredient8: string,
	strIngredient9: string,
	strIngredient10: string,
	strIngredient11: string,
	strIngredient12: string,
}

export default function Home() {
	const [query, setQuery] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(true)
	const [fetchData, fetchByName, recipes] = useFetchRecipes(setLoading)

	useEffect(() => {
		setLoading(true)
		fetchData()
	}, [])

	useEffect(() => {
		console.log(recipes)
	}, [recipes])

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)
		fetchByName(query)
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section className='flex flex-col items-center'>
				<h1 className='text-4xl font-semibold m-8'>What do you feel like having today</h1>
				<form onSubmit={handleSubmit}>
					<input 
						className='m-8 w-96 h-10 rounded-2xl outline-none pl-4 text-black'
						name='search'
						type='text'
						onChange={e => setQuery(e.target.value)}
						autoFocus
					/>
				</form>
			</section>
			<section className='flex flex-wrap justify-center gap-12'>
				{loading ? (
					<p>Loading...</p>
				) : recipes && recipes.length > 0 ? (
					recipes.map((e) => 
						<article key={e.idMeal} className='w-96 bg-stone-100 rounded-2xl'>
							<div className='h-72 rounded-2xl rounded-ee-none overflow-hidden'>
								<img className='object-cover h-full w-full' src={e.strMealThumb} title={e.strMeal} alt={e.strMeal} />
							</div>
							<h2 className='text-2xl font-semibold p-4 pt-2 pb-2 rounded-t-2xl shadow-inset text-black -translate-y-10 absolute truncate w-72 bg-stone-100' key={e.idMeal} >{e.strMeal}</h2>
							<div>
								<div className='flex flex-wrap gap-2 p-4'>
									<Ingredient ingredient={e.strIngredient1} />
									<Ingredient ingredient={e.strIngredient2} />
									<Ingredient ingredient={e.strIngredient3} />
									<Ingredient ingredient={e.strIngredient4} />
									<Ingredient ingredient='...' />
								</div>
							</div>
						</article>
					))
					:
					<p>{query ? 'No recipes found for that food :C' : 'Enter a food to search for recipes'}</p>
				}
			</section>
		</main>
	)
}
