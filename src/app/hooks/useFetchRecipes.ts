import { Recipe } from '../page'
import { useState } from 'react'

export default function useFetchRecipes(setLoading: (loading: boolean) => void) {
	const [recipes, setRecipes] = useState<Recipe[]>([])

	const fetchData = async () => {
		try {
			const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
			if(!res.ok) throw new Error('fetch failed ')
  
			const data = await res.json()
			setRecipes(data.meals)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	const fetchByName = async (query: string) =>  {
		try {
			const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
			console.log(res)
			if(!res.ok) throw new Error('food not finded')

			const data = await res.json()
			setRecipes(data.meals)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	return[fetchData, fetchByName, recipes] as const
}
