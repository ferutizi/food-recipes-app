'use client'

import { useState } from 'react'
import Ingredient from './Ingredient'
import Recipe from '../types/types'

interface AllIngredientsProps {
	e: Recipe
}

export default function AllIngredients({e}: AllIngredientsProps) {
	const [showIngredients, setShowIngredients] = useState<boolean>(false)
	const [selectedRecipe, setSelectedRecipe] = useState<string>()

	const showAllIngredients = (id: Recipe['idMeal']) => {
		console.log(e)
		setShowIngredients(true)
		setSelectedRecipe(id)
		console.log(id, selectedRecipe)
	}

	const hideAllIngredients = () => {
		setShowIngredients(false)
		setSelectedRecipe('')
	}

	const moreIngredients = [
		e.strIngredient5,
		e.strIngredient6,
		e.strIngredient7,
		e.strIngredient8,
		e.strIngredient9,
		e.strIngredient10,
		e.strIngredient11,
		e.strIngredient12,
	]

	return(
		<div onMouseLeave={hideAllIngredients} className='flex flex-wrap gap-2 p-4 min-h-28'>
			<Ingredient ingredient={e.strIngredient1} />
			<Ingredient ingredient={e.strIngredient2} />
			<Ingredient ingredient={e.strIngredient3} />
			<Ingredient ingredient={e.strIngredient4} />

			{/* Hidden '...' for focused card that show all ingredients */}
			{e.strIngredient5 !== '' && e.strIngredient5 !== null && (!showIngredients || e.idMeal !== selectedRecipe) &&
					<p
						onMouseEnter={() => showAllIngredients(e.idMeal)}
						className={'m-0 px-2 py-1 bg- rounded-xl cursor-pointer text-white bg-black h-fit'}
					>...
					</p>
			}
			{showIngredients && e.idMeal === selectedRecipe &&
				<>
					{/* check if ingredient is not null to renderize */}
					{moreIngredients.map((i, index) => i !== null && (
						<Ingredient key={index} ingredient={i} />
					))}
				</>
			}
		</div>
	)
}
