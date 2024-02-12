import Link from 'next/link'
import Ingredient from '../components/Ingredient'
import Instructions from '../components/Instructions'
import useFetchRecipes from '../hooks/useFetchRecipes'

export default async function RecipePage({params: {id}}: {params: {id: string}}) {
	const [,fetchById] = await useFetchRecipes()
	const recipes = await fetchById(id)
	const recipe = recipes && recipes[0]

	const ingredients = [
		recipe?.strIngredient1,
		recipe?.strIngredient2,
		recipe?.strIngredient3,
		recipe?.strIngredient4,
		recipe?.strIngredient5,
		recipe?.strIngredient6,
		recipe?.strIngredient7,
		recipe?.strIngredient8,
		recipe?.strIngredient9,
		recipe?.strIngredient10,
		recipe?.strIngredient11,
		recipe?.strIngredient12,
	]

	return(
		<section className='m-8'>
			<Link href='/'>
				<p className='m-0 text-2xl font-normal hover:font-extrabold'>←</p>
			</Link>
			<h1 className='text-4xl font-semibold m-8 mt-2'>{recipe?.strMeal}</h1>
			<article className='grid gap-8 grid-cols-1 lg:grid-cols-2'>
				<div className='flex justify-center aspect-square'>
					<img src={recipe?.strMealThumb} title={recipe?.strMeal} alt={recipe?.strMeal} />
				</div>
				<div className='flex flex-col gap-16'>
					<div>
						<h2 className='text-2xl font-semibold max-w-72 p-4 ps-0'>Ingredients:</h2>
						{recipe &&
						<div className='ingredients flex flex-wrap gap-4'>
							{ingredients
								.filter(i => i !== null) // Filter null values
								.map((i, index) => (
									<Ingredient key={index} ingredient={i as string} />
								))}
						</div>
						}
					</div>
					<Instructions yt={recipe?.strYoutube} instructions={recipe?.strInstructions} />
				</div>
			</article>
		</section>
	)
}