import { useState, useEffect } from 'react'
import './App.css'

import type { Drink } from './types'

function App() {
	const [randomDrink, setRandomDrink] = useState<Drink | null>(null)
	const [interests, setInterests] = useState<string[]>([])
	const [isFirstLoad, setIsFirstLoad] = useState(true)
	const [errorMsg, setErrorMsg] = useState('')
	const [savedDrinks, setSavedDrinks] = useState<Drink[]>([])

	useEffect(() => {
		const controller = new AbortController()
		const fetchRandom = async () => {
			try {
				const res = await fetch(
					'https://www.thecocktaildb.com/api/json/v1/1/random.php',
					{
						signal: controller.signal,
					}
				)
				const drink = await res.json()
				setRandomDrink(drink.drinks[0])
			} catch (error) {
				if (error instanceof Error) {
					console.log(error.message)
				}
				controller.abort()
				setErrorMsg('Something Went Wrong :/')
			}
		}

		fetchRandom()
		return () => controller.abort()
	}, [])

	const handleRefetch = () => {
		setIsFirstLoad(false)
		const controller = new AbortController()
		const fetchRandom = async () => {
			try {
				const res = await fetch(
					'https://www.thecocktaildb.com/api/json/v1/1/random.php',
					{
						signal: controller.signal,
					}
				)
				const drink = await res.json()
				setRandomDrink(drink.drinks[0])
			} catch (error) {
				if (error instanceof Error) {
					console.log(error.message)
				}
				controller.abort()
				setErrorMsg('Something Went Wrong :/')
			}
		}

		fetchRandom()
	}

	const handleInterests = (ingredient: string) => {
		setInterests((prev) => {
			if (prev.includes(ingredient)) return [...prev]
			return [...prev, ingredient]
		})
	}

	const handleRemoveInterest = (interest: string) =>
		setInterests((prev) => prev.filter((name) => name !== interest))

	if (!randomDrink)
		return (
			<>
				<h1>{errorMsg || 'Loading ...'}</h1>
			</>
		)

	return (
		<div>
			<header>
				<h1>drink</h1>
				<h2>Inspire your next cocktail</h2>
			</header>
			<main>
				<p>{errorMsg}</p>
				{isFirstLoad && (
					<>
						<p>tap on an ingredient to add it to your interests</p>
						<p>tap the image to find new inspiration</p>
					</>
				)}
				<h3 className='drink-name'>{randomDrink.strDrink}</h3>
				{randomDrink.strDrinkThumb && (
					<img
						src={randomDrink.strDrinkThumb}
						alt={randomDrink.strDrink}
						className='thumbnail'
						onClick={handleRefetch}
					/>
				)}
				<p onClick={() => handleInterests(randomDrink.strIngredient1!)}>
					{randomDrink.strMeasure1} {randomDrink.strIngredient1}
				</p>
				<p onClick={() => handleInterests(randomDrink.strIngredient2!)}>
					{randomDrink.strMeasure2} {randomDrink.strIngredient2}
				</p>
				<p onClick={() => handleInterests(randomDrink.strIngredient3!)}>
					{randomDrink.strMeasure3} {randomDrink.strIngredient3}
				</p>
				<p onClick={() => handleInterests(randomDrink.strIngredient4!)}>
					{randomDrink.strMeasure4} {randomDrink.strIngredient4}
				</p>
				<p onClick={() => handleInterests(randomDrink.strIngredient5!)}>
					{randomDrink.strMeasure5} {randomDrink.strIngredient5}
				</p>
				<p onClick={() => handleInterests(randomDrink.strIngredient6!)}>
					{randomDrink.strMeasure6} {randomDrink.strIngredient6}
				</p>
				<p onClick={() => handleInterests(randomDrink.strIngredient7!)}>
					{randomDrink.strMeasure7} {randomDrink.strIngredient7}
				</p>
				<p onClick={() => handleInterests(randomDrink.strIngredient8!)}>
					{randomDrink.strMeasure8} {randomDrink.strIngredient8}
				</p>
				<p onClick={() => handleInterests(randomDrink.strIngredient9!)}>
					{randomDrink.strMeasure9} {randomDrink.strIngredient9}
				</p>
				<p onClick={() => handleInterests(randomDrink.strIngredient10!)}>
					{randomDrink.strMeasure10} {randomDrink.strIngredient10}
				</p>
				<p onClick={() => handleInterests(randomDrink.strIngredient11!)}>
					{randomDrink.strMeasure11} {randomDrink.strIngredient11}
				</p>
				<p onClick={() => handleInterests(randomDrink.strIngredient12!)}>
					{randomDrink.strMeasure12} {randomDrink.strIngredient12}
				</p>
				<p onClick={() => handleInterests(randomDrink.strIngredient13!)}>
					{randomDrink.strMeasure13} {randomDrink.strIngredient13}
				</p>
				<p onClick={() => handleInterests(randomDrink.strIngredient14!)}>
					{randomDrink.strMeasure14} {randomDrink.strIngredient14}
				</p>
				<p onClick={() => handleInterests(randomDrink.strIngredient15!)}>
					{randomDrink.strMeasure15} {randomDrink.strIngredient15}
				</p>
				<div className='instructions'>
					<p>Instructions</p>
					<p>{randomDrink.strInstructions}</p>
				</div>
				{interests[0] && (
					<section className='interests'>
						<h4>Your interests</h4>
						{interests.map((interest, index) => (
							<div className='interest-enclosure'>
								<p key={index}>{interest}</p>
								<button
									className='btn'
									onClick={() => handleRemoveInterest(interest)}>
									Remove
								</button>
								<button className='btn'>Inspire with this</button>
							</div>
						))}
					</section>
				)}
			</main>

			<footer>
				<p>
					made by <a href='https://www.github.com/jskomal'>Jordan Skomal</a>
				</p>
			</footer>
		</div>
	)
}

export default App
