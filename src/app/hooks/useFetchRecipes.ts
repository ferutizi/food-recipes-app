import { Recipe } from '../page'
import { useState } from 'react'

export default function useFetchRecipes() {
	const [recipes, setRecipes] = useState<Recipe[]>([])

	const fetchData = async () => {
		try {
			const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
			if(!res.ok) throw new Error('fetch failed ')
  
			const data = await res.json()
			setRecipes(data.meals)
		} catch (error) {
			console.log(error)
		}
	}

	return[fetchData, recipes] as const
}
