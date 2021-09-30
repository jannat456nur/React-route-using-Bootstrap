import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [searchText, setSearchText] = useState('')
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data.meals))
            .then(data => setMeals(data.meals))
    }, [searchText])
    const handleSearchFeild = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue)

    }
    return (
        <div>
            <h3>Welcome to mealDB</h3>
            <input className="w-50 m-5" type="text" placeholder="search here" onChange={handleSearchFeild} />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;