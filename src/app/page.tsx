import './globals.css'
/* import { useState } from 'react' */
import useFetchRecipes from './hooks/useFetchRecipes'
import Ingredient from './components/Ingredient'
import SearchBox from './components/searchBox'

export default async function Home({searchParams}: {searchParams: {q: string}}) {
/* 	const [query, setQuery] = useState<string>('')
	const [showIngredients, setShowIngredients] = useState<boolean>(false)
	const [selectedRecipe, setSelectedRecipe] = useState<string>() */
	const [fetchByName] = await useFetchRecipes()
	const recipes = await fetchByName(searchParams.q || '')

	/* 	const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		recipes = await fetchByName(query)
	} */

	/* 	const showAllIngredients = (id: Recipe['idMeal']) => {
		setShowIngredients(true)
		setSelectedRecipe(id)
	}

	const hideAllIngredients = () => {
		setShowIngredients(false)
		setSelectedRecipe('')
	} */

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section className='flex flex-col items-center'>
				<h1 className='text-4xl font-semibold m-8'>What do you feel like having today</h1>
				<SearchBox />
			</section>
			<section className='flex flex-wrap justify-center gap-12'>
				{recipes && recipes.length > 0 ? (
					recipes.slice(0, 15).map((e) => 
						<article
							key={e.idMeal}
							/* onMouseLeave={() => hideAllIngredients()} */
							className='w-96 bg-stone-100 rounded-2xl'
						>
							<div className='h-72 rounded-2xl rounded-ee-none overflow-hidden'>
								<img className='object-cover h-full w-full' src={e.strMealThumb} title={e.strMeal} alt={e.strMeal} />
							</div>
							<h2 className='text-2xl font-semibold max-w-72 p-4 pt-2 pb-2 rounded-t-2xl shadow-inset text-black -translate-y-10 absolute truncate bg-stone-100' key={e.idMeal} >{e.strMeal}</h2>
							<div>
								<div className='flex flex-wrap gap-2 p-4'>
									<Ingredient ingredient={e.strIngredient1} />
									<Ingredient ingredient={e.strIngredient2} />
									<Ingredient ingredient={e.strIngredient3} />
									<Ingredient ingredient={e.strIngredient4} />

									{/* Hidden '...' for focused card that show all ingredients */}
									{/* 									{e.strIngredient5 !== '' && (!showIngredients || e.idMeal !== selectedRecipe) &&
										<p
											onMouseEnter={() => showAllIngredients(e.idMeal)}
											className={'m-0 px-2 py-1 bg- rounded-xl cursor-pointer text-white bg-black'}
										>...
										</p>
									}
									{showIngredients && e.idMeal === selectedRecipe &&
										<>
											<Ingredient ingredient={e.strIngredient5} />
											<Ingredient ingredient={e.strIngredient6} />
											<Ingredient ingredient={e.strIngredient7} />
											<Ingredient ingredient={e.strIngredient8} />
											<Ingredient ingredient={e.strIngredient9} />
											<Ingredient ingredient={e.strIngredient10} />
											<Ingredient ingredient={e.strIngredient11} />
											<Ingredient ingredient={e.strIngredient12} />
										</>
									} */}
								</div>
							</div>
						</article>
					))
					:
					<p>No recipes found for that food :C</p>
				}
			</section>
		</main>
	)
}
