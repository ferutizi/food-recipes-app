import Ingredient from '../components/Ingredient'
import useFetchRecipes from '../hooks/useFetchRecipes'

export default async function RecipePage({params: {id}}: {params: {id: string}}) {
	const [,fetchById] = await useFetchRecipes()
	const recipes = await fetchById(id)
	const recipe = recipes && recipes[0]

	return(
		<section className='m-8'>
			<h1 className='text-4xl font-semibold m-8'>{recipe?.strMeal}</h1>
			<article className='grid gap-8 grid-cols-1 lg:grid-cols-2'>
				<div className='flex justify-center aspect-square'>
					<img src={recipe?.strMealThumb} title={recipe?.strMeal} alt={recipe?.strMeal} />
				</div>
				<div className='flex flex-col gap-8'>
					<div>
						<h2 className='text-2xl font-semibold max-w-72 p-4 ps-0'>Ingredients:</h2>
						{recipe &&
            <div className='ingredients flex flex-wrap gap-4'>
            	<Ingredient ingredient={recipe.strIngredient1} />
            	<Ingredient ingredient={recipe.strIngredient2} />
            	<Ingredient ingredient={recipe.strIngredient3} />
            	<Ingredient ingredient={recipe.strIngredient4} />
            	<Ingredient ingredient={recipe.strIngredient5} />
            	<Ingredient ingredient={recipe.strIngredient6} />
            	<Ingredient ingredient={recipe.strIngredient7} />
            	<Ingredient ingredient={recipe.strIngredient8} />
            	<Ingredient ingredient={recipe.strIngredient9} />
            	<Ingredient ingredient={recipe.strIngredient10} />
            	<Ingredient ingredient={recipe.strIngredient11} />
            	<Ingredient ingredient={recipe.strIngredient12} />
            </div>
						}
					</div>
					<div>
						<h2 className='text-2xl font-semibold max-w-72 p-4 ps-0'>Instructions</h2>
						<p>{recipe?.strInstructions}</p>
					</div>
				</div>
			</article>
		</section>
	)
}