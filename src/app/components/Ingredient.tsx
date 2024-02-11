import { ingredients } from '../ingredients'

interface IngredientProps {
	ingredient: string
}

export default function Ingredients({ingredient}: IngredientProps) {

	function normalizeIngredient(ingr: string) {
		// Replace spaces with underscores and convert to lowercase
		return ingr.replace(/\s+/g, '_').toLowerCase()
	}

	const normalizedIngredient = normalizeIngredient(ingredient)	

	const color = ingredients?.[normalizedIngredient]?.[0] || 'bg-black'
	const border = ingredients?.[normalizedIngredient]?.[0] || 'border border-white'
	const textColor = ingredients?.[normalizedIngredient]?.[1] || 'text-white'

	return(
		ingredient.length !== 0
			? <p
				title={ingredient}
				className={`m-0 px-2 py-1 bg- rounded-xl truncate max-w-36 shadow-sm ${textColor} ${color} ${border}`}
			>{ingredient}
			</p>
			: <></>
	)
}