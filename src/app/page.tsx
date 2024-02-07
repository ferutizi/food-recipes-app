'use client'

import { useEffect } from 'react'
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
	const [fetchData, recipes] = useFetchRecipes()

	useEffect(() => {
		fetchData()
	}, [])

	useEffect(() => {
		console.log(recipes)
	}, [recipes])

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className='text-3xl m-8'>What do you feel like having today</h1>
			<section className='flex flex-wrap justify-center gap-12'>
				{ recipes.length !== 0 ? (
					recipes.map((e) => 
						<article key={e.idMeal} className='w-96 bg-zinc-800 text-white'>
							<h2 key={e.idMeal} >{e.strMeal}</h2>
							<div className='h-72'>
								<img className='object-cover h-full w-full' src={e.strMealThumb} title={e.strMeal} alt={e.strMeal} />
							</div>
							<div className='flex flex-wrap gap-2 p-4'>
								<Ingredient ingredient={e.strIngredient1} />
								<Ingredient ingredient={e.strIngredient2} />
								<Ingredient ingredient={e.strIngredient3} />
								<Ingredient ingredient={e.strIngredient4} />
								<Ingredient ingredient={e.strIngredient5} />
								<Ingredient ingredient={e.strIngredient6} />
							</div>
						</article>
					))
					: (<p>loading</p>)
				}
			</section>
		</main>
	)
}
