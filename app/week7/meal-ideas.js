"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function fetchMealIdeas(ingredient) {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
                const data = await response.json();
                setMeals(data.meals);
            } catch (error) {
                console.error("Error fetching meal ideas:", error);
            }
        }

        if (ingredient) {
            fetchMealIdeas(ingredient);
        }
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas for {ingredient}</h2>
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal}>
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    );
}
