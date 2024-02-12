import './globals.css'
import useFetchRecipes from './hooks/useFetchRecipes'
import SearchBox from './components/searchBox'
import AllIngredients from './components/AllIngredients'
import Link from 'next/link'

export default async function Home({searchParams}: {searchParams: {q: string}}) {
	const [fetchByName] = await useFetchRecipes()
	const recipes = await fetchByName(searchParams.q || '')

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section className='flex flex-col items-center'>
				<h1 className='text-4xl font-semibold m-8 text-center'>What do you feel like having today</h1>
				<SearchBox />
			</section>
			<section className='flex flex-wrap justify-center gap-12'>
				{recipes && recipes.length > 0 ? (
					recipes.slice(0, 15).map((e) => 
						<article
							key={e.idMeal}
							className='w-96 bg-stone-100 rounded-2xl'
						>
							<Link href={`/${e.idMeal}`}>
								<div className='h-72 rounded-2xl rounded-ee-none overflow-hidden'>
									<img className='object-cover h-full w-full' src={e.strMealThumb} title={e.strMeal} alt={e.strMeal} />
								</div>
								<h2 className='text-2xl font-semibold max-w-72 p-4 pt-2 pb-2 rounded-t-2xl shadow-inset text-black -translate-y-10 absolute truncate bg-stone-100' key={e.idMeal} >{e.strMeal}</h2>
							</Link>
							<AllIngredients e={e} />
						</article>
					))
					:
					<p>No recipes found for that food :C</p>
				}
			</section>
		</main>
	)
}
