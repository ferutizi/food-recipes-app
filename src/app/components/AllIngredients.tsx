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
		setShowIngredients(true)
		setSelectedRecipe(id)
	}

	const hideAllIngredients = () => {
		setShowIngredients(false)
		setSelectedRecipe('')
	}

	return(
		<div onMouseLeave={hideAllIngredients} className='flex flex-wrap gap-2 p-4'>
			<Ingredient ingredient={e.strIngredient1} />
			<Ingredient ingredient={e.strIngredient2} />
			<Ingredient ingredient={e.strIngredient3} />
			<Ingredient ingredient={e.strIngredient4} />

			{/* Hidden '...' for focused card that show all ingredients */}
			{e.strIngredient5 !== '' && (!showIngredients || e.idMeal !== selectedRecipe) &&
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
			}
		</div>
	)
}
