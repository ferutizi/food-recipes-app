import { ingredients } from '../ingredients'

interface IngredientProps {
	ingredient: string
}

export default function Ingredients({ingredient}: IngredientProps) {

	function normalizeIngredient(ingr: string) {
		// Reemplazar espacios con guiones bajos y convertir a minúsculas
		return ingr.replace(/\s+/g, '_').toLowerCase()
	}

	const normalizedIngredient = normalizeIngredient(ingredient)	

	const color = ingredients?.[normalizedIngredient]?.[0] || 'bg-black'
	const textColor = ingredients?.[normalizedIngredient]?.[1] || 'text-white'

	return(
		ingredient.length !== 0
			? <p className={`m-0 px-2 py-1 bg- rounded-xl truncate max-w-36 ${textColor} ${color}`}>{ingredient}</p>
			: <></>
	)
}