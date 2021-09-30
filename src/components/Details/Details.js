import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const { detailId, strCategory, strMeal } = useParams()
    const { meal, setMeal } = useState({})
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detailId}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals))
    }, [])
    // console.log(params)
    return (
        <div>
            <h2>This is Details{detailId}</h2>
            {/* <h4>title_{meal?.strCategory}</h4>
            <h4>title_{meal?.strMeal}</h4> */}
            <button>  <Link to="/home">all food</Link></button>
        </div>
    );
};

export default Details;