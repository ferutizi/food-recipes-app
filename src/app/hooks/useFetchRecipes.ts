import Recipe from '../types/types'

export default async function useFetchRecipes() {

	/* 	const fetchData = async () => {
		try {
			const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
			if(!res.ok) throw new Error('fetch failed ')
  
			const data = await res.json()
			const recipes: Promise<Recipe[]> = data.meals
			return recipes
		} catch (error) {
			console.log(error)
		}
	} */

	const fetchByName = async (query: string) =>  {
		try {
			const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
			console.log(res)
			if(!res.ok) throw new Error('food not finded')

			const data = await res.json()
			const recipes: Promise<Recipe[]> = data.meals
			return recipes
		} catch (error) {
			console.log(error)
		}
	}

	const fetchById = async (id: string) =>  {
		try {
			const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
			console.log(res)
			if(!res.ok) throw new Error('food not finded')

			const data = await res.json()
			const recipes: Promise<Recipe[]> = data.meals
			return recipes
		} catch (error) {
			console.log(error)
		}
	}
	
	return [fetchByName, fetchById] as const
}