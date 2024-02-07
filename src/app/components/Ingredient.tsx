interface IngredientProps {
	ingredient: string
}

interface IngredientsMap {
	[key: string]: string[]
}

export default function Ingredients({ingredient}: IngredientProps) {

	function normalizeIngredient(ingr: string) {
		// Reemplazar espacios con guiones bajos y convertir a minúsculas
		return ingr.replace(/\s+/g, '_').toLowerCase()
	}

	const normalizedIngredient = normalizeIngredient(ingredient)	

	const ingredients: IngredientsMap = {
		onion: ['bg-violet-400', 'text-black'],
		garlic: ['bg-zinc-500'],
		carrots: ['bg-orange-500'],
		carrot: ['bg-orange-500'],
		beef: ['bg-red-500'],
		peprika: ['bg-amber-500'],
		paprika: ['bg-amber-500'],
		pepper: ['bg-stone-500'],
		ghee: ['bg-yellow-400', 'text-black'],
		lemon: ['bg-yellow-500'],
		fries: ['bg-yellow-600'],
		cheese: ['bg-yellow-600'],
		butter: ['bg-yellow-500'],
		nutmeg: ['bg-yellow-700'],
		cumin: ['bg-yellow-700'],
		egg: ['bg-amber-500', 'text-black'],
		eggs: ['bg-amber-500', 'text-black'],
		milk: ['bg-white', 'text-black'],
		shallots: ['bg-violet-400', 'text-black'],
		sugar: ['bg-white', 'text-black'],
		flour: ['bg-gray-300', 'text-black'],
		salt: ['bg-gray-400', 'text-black'],
		tomato: ['bg-red-500'],
		tomato_puree: ['bg-red-700'],
		bacon: ['bg-red-900'],
		pumpkin: ['bg-orange-500'],
		potatoes: ['bg-orange-900'],
		sausages: ['bg-amber-700'],
		turmeric: ['bg-orange-400', 'text-black'],
		lentils: ['bg-amber-900'],
		pork: ['bg-orange-900'],
		raspberries: ['bg-rose-500'],
		lettuce: ['bg-green-500'],
		leek: ['bg-green-500'],
		coriander: ['bg-green-500'],
		parsley: ['bg-green-600'],
		kale: ['bg-green-800'],
		celery: ['bg-green-500'],
		parmesan: ['bg-amber-500'],
		water: ['bg-blue-500'],
	}

	const color = ingredients?.[normalizedIngredient]?.[0] || 'bg-black'
	const textColor = ingredients?.[normalizedIngredient]?.[1] || 'text-white'

	console.log(ingredients?.[ingredient]?.[0])
	return(
		ingredient.length !== 0 ?
			<p className={`m-0 px-2 py-1 bg- rounded-xl ${textColor} ${color}`}>{ingredient}</p>
			: <></>
	)
}