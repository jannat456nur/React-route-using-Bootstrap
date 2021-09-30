import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Meal = (props) => {
    const { idMeal, strYoutube, strMeal, strMealThumb } = props.meal;
    const history = useHistory()
    const handleBtn = () => {
        history.push(`/details/${idMeal}`)
    }
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img className="w-75" src={strMealThumb} alt="" />
                    <div className="card-body">
                        <h6>title_{strMeal}</h6>
                        <Link to={`/details/${idMeal}`}>Details</Link><br />
                        <Link to={`/show/${strYoutube}`}>< button className="btn btn-success">Show more</button></Link>
                        <button className="btn btn-secondary m-3" onClick={handleBtn}>detail 2</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;