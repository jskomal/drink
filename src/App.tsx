import { useState, useEffect } from "react";
import "./App.css";

import type { Drink } from "./types";

function App() {
  const [randomDrink, setRandomDrink] = useState<Drink | null>(null);
  const [interests, setInterests] = useState<string[]>([]);

  useEffect(() => {
    fetchRandom();
  }, []);

  const fetchRandom = async () => {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const drink = await res.json();
    setRandomDrink(drink.drinks[0]);
  };

  const handleInterests = (ingredient: string) => {
    setInterests((prev) => {
      if (prev.includes(ingredient)) return [...prev];
      return [...prev, ingredient];
    });
  };

  const handleRemoveInterest = (interest: string) => {
    setInterests((prev) => prev.filter((name) => name !== interest));
  };

  if (!randomDrink)
    return (
      <>
        <h1>Loading...</h1>
      </>
    );

  return (
    <div>
      <header>
        <h1>drink</h1>
        <h2>Inspire your next cocktail</h2>
      </header>
      <main>
        <h3>does this inspire you?</h3>
        <p>tap on an ingredient to add it to your interests</p>
        <h3 className="drink-name">{randomDrink.strDrink}</h3>
        {randomDrink.strDrinkThumb && (
          <img
            src={randomDrink.strDrinkThumb}
            alt={randomDrink.strDrink}
            className="thumbnail"
          />
        )}
        <p>specs</p>
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
        <p>{randomDrink.strInstructions}</p>
        <section className="interests">
          <h4>Your interests</h4>
          {interests.map((interest, index) => (
            <li key={index} onClick={() => handleRemoveInterest(interest)}>
              {interest}
            </li>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
